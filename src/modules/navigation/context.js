import React, { createContext, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { UrlConverter, TitleConverter } from "@utils";

export const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be within a NavigationProvider');
  }

  return context; 
}

const NavigationProvider = ({ children }) => {
  const { headerFiles } = useStaticQuery(graphql`
    query getNavigationData {
      # Regex for all files that are NOT config files
      allMdx: allMdx
      {
        edges {
          node {
            headings(depth: h1) {
              value
            }
            fileAbsolutePath
            frontmatter {
              title
              order
            }
          }
        }
      }


    #Get files that have header/headerOrder frontmatter
      headerFiles: allMdx(
        filter: {
          frontmatter: { header: { in: true } }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              header
              headerOrder
            }
            fileAbsolutePath
            headings(depth: h1) {
              value
            }
          }
        }
      }
    }
  `);

  console.log(headerFiles)

  //allMDX will return all header.mdx files at top level locale folders.
  //Find only the one we need for our current locale and use it's body in the MDX renderer below.
  const headerDataLinks = headerFiles.edges
    .sort((a, b) => {
      const aNode = {
        ...a.node,
        title: TitleConverter(a.node),
        headerOrder: a.node.frontmatter.headerOrder,
      };

      const bNode = {
        ...b.node,
        title: TitleConverter(b.node),
        headerOrder: b.node.frontmatter.headerOrder,
      };

      //If Node B has headerOrder but Node A doesn't, it takes priority. 
      //Else vice versa
      if (aNode.headerOrder === null && bNode.headerOrder !== null) {
        return 1;
      } else if (aNode.headerOrder !== null && bNode.headerOrder === null) {
        return -1;
      }

      //If Node A and Node B don't have headerOrder sort by title.
      if (aNode.headerOrder === null && bNode.headerOrder === null) {
        if (aNode.headerOrder === null && bNode.headerOrder === null) {
          if (aNode.title === bNode.title) return 0;
          return aNode.title;
        }

        if (aNode.headerOrder === bNode.headerOrder) {
          if (aNode.title === bNode.title) return 0;
          return aNode.title;
        }

        return 0;
      }
      
      //Sort normally based on headerOrder
      if (aNode.headerOrder < bNode.headerOrder) return -1;
      if (aNode.headerOrder > bNode.headerOrder) return 1;
      return 0;
    })
    .map(({ node }, index) => { //Map the nodes into objects usable by the Header component.
      const title = TitleConverter(node);
      const url = UrlConverter(node);

      return {
        url,
        title,
      };
    });

  return (
    <NavigationContext.Provider
      value={{
        headerDataLinks
      }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
