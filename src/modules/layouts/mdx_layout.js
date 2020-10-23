/** @jsx jsx */
import {Children, Fragment} from 'react';
import { Box, Flex, jsx } from "theme-ui";
import Sticky from "react-sticky-el";
import { useStaticQuery, graphql } from "gatsby";

import { Sidenav, Breadcrumbs } from "@modules/navigation";
import calculateTreeData from "@modules/navigation/calculateTreeData";
import { SEO } from "@modules/utility";

export default (props) => {

  const { allMdx } = useStaticQuery(graphql`
    query getMDXData {
      # Regex for all files that are NOT config files
      allMdx(
        filter: {
          fileAbsolutePath: {
            regex: "//content/(?!header.mdx|index.mdx|sidenav.mdx|example.mdx|social.mdx|footer.mdx|404.mdx|.js|.json|.png|.jpeg|.ppt|.pdf)/"
          }
        }
      ) {
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
    }
  `);

  const { children, pageContext, uri } = props;

  const {pagePath} = pageContext; 
  const {
    title,
    description,
    keywords,
    hideSidenav,
    hideBreadcrumbs
  } = pageContext.frontmatter;

  const pathDirs = pagePath.replace(/^\/|\/$/g, "").split("/");
  const { sidenavData, breadcrumbData } = calculateTreeData(
    allMdx.edges,
    pathDirs
  );

  //For the sake of SEO we may want the page title to be based on the first h1 in our MDX file.
  //if no title is specified in the metadata.
  const getFirstHeading = () => {
    //NOTE(Rejon): The children of layouts provided are MDX components!
    //Find the first mdx child that's an H1
    const firstHeading = Children.toArray(children).find(
      (c) => c.props.mdxType === "h1"
    );

    //If we have an h1 in our file return it.
    if (firstHeading !== undefined) {
      return firstHeading.props.children;
    }

    return undefined;
  };
  
  //SEO page title priority is: frontmatter title -> First H1 in mdx -> Filename fallback from uri
  //NOTE(Rejon): If the page is an index of a directory, the uri split will be the name of the directory. ie. /en/bounties -> bounties
  const _pageTitle = title || getFirstHeading() || uri.split("/").pop();

  const seo = {
    title: _pageTitle,
    description,
    keywords,
  };

  return (
    <Fragment>
      <SEO {...seo} />
      {!hideSidenav &&
        <Box
        sx={{
          width: "256px",
        }}>
          <Sticky
              boundaryElement=".content-boundary"
              dontUpdateHolderHeightWhenSticky={true}
              style={{ position: "relative" }}
              hideOnBoundaryHit={false}
            >
            <Sidenav data={sidenavData} currentPath={pagePath}/>
          </Sticky>
        </Box>
      }
      <Box as="article" sx={{pt: 4, px: 4, width: !hideSidenav ? 'calc(100% - 256px)' : '100%' }}>

        {!hideBreadcrumbs && 
          <Flex
            sx={{
              justifyContent: "space-between",
              position: "relative",
              alignItems: "flex-start",
              flexWrap: ["wrap", "wrap", "unset"],
            }}
          >
            <Breadcrumbs data={breadcrumbData} pathDirs={pathDirs}/>
          </Flex>
        }
        {children}
      </Box>
    </Fragment>
  );
};
