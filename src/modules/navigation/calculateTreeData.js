import { titleCase } from "@utils";

//This is an algorithm that does a number of things:
// - Takes mdx edge data and constructs usable sidenav objects.
// - Creates sidenav objects for the content directory all the way down.


//NOTE(Rejon): Large parts of this solution was pulled from Hasura's gatsby-gitbook-starter.
//             specifically the sidenav reducer. https://github.com/hasura/gatsby-gitbook-starter/blob/master/src/components/sidebar/tree.js
export default (
  edges = [],
  path
) => {
  //Generates a an object with {title[String], slug[String]}
  //by using the filePath and title requirments of an MDX node.
  const makeSidenavObjects = (edges, _locale) => {
    //Filter through edges for only files in our currentTopSection.
    //Do NOT include index file for the currentTopSection.
    return edges
      .flatMap(({ node: { headings, frontmatter, fileAbsolutePath } }) => {
        //Remove index.mdx, .mdx, and trailing slashes from the end of the slug.
        const slug = fileAbsolutePath
          .slice(
            fileAbsolutePath.indexOf(`/content/`) + 8,
            fileAbsolutePath.length
          )
          .replace(/(.mdx|index.mdx|.md)$/gm, "")
          .replace(/\/$/, "");
        const rawSlug = slug.replace(/^\/([\w]{2})\//, "/");

        const slugPart = slug.split("/").slice(-1)[0];
        //Use frontmatter title, first heading, or file name from slug.
        const title =
          frontmatter.title ||
          (headings.length > 0 ? headings[0].value : null) ||
          slugPart;

        return { title, slug, rawSlug, slugPart, order: frontmatter.order };
      });
  };

  let breadcrumbData = [];

  //Reduce all of our mergedLocaleFiles into a object structure that closely resembles our final sidenav.
  const sidenavData = makeSidenavObjects(edges, "en").reduce(
    (accu, { title, slug, rawSlug, slugPart, order }) => {
      const parts = rawSlug.split("/");

      let { items: prevItems } = accu;

      const slicedParts = parts.slice(1, -1);

      for (const part of slicedParts) {
        let tmp =
          prevItems && prevItems.find(({ slugPart }) => slugPart === part);

        if (tmp) {
          if (!tmp.items) {
            tmp.items = [];
          }
        } else {
          tmp = {
            slugPart: part,
            title: titleCase(part.replace(/-|_|\./g, " ")),
            items: [],
          };
          prevItems.push(tmp);
        }

        //NOTE(Rejon): We sort at the top level here.
        prevItems = tmp.items.sort((a, b) => {
          if (a.order === null && b.order !== null) {
            return 1;
          } else if (a.order !== null && b.order === null) {
            return -1;
          }

          if (a.order === null && b.order === null) {
            if (a.title === b.title) return 0;
            return a.title.localeCompare(b.title);
          }

          if (a.order === b.order) {
            if (a.title === b.title) return 0;
            return a.title.localeCompare(b.title);
          }

          if (a.order < b.order) return -1;
          if (a.order > b.order) return 1;
          return 0;
        });
      }

      const slicedLength = parts.length - 1;

      const existingItem = prevItems.find(
        ({ slugPart }) => slugPart === parts[slicedLength]
      );

      if (existingItem) {
        existingItem.url = slug;
        existingItem.title = title;
        existingItem.order = order;

        if (path.includes(existingItem.slugPart)) {
          breadcrumbData.push({
            part: existingItem.slugPart,
            title: existingItem.title,
            url: slug,
          });
        }
      } else {
        prevItems.push({
          slugPart: parts[slicedLength],
          url: slug,
          items: [],
          title,
          order,
        });

        if (path.includes(parts[slicedLength])) {
          breadcrumbData.push({
            part: parts[slicedLength],
            title,
            url: slug,
          });
        }

        //NOTE(Rejon): We MUST sort prevItems again for the case of recursive depth ordering
        prevItems.sort((a, b) => {
          if (a.order === null && b.order !== null) {
            return 1;
          } else if (a.order !== null && b.order === null) {
            return -1;
          }

          if (a.order === null && b.order === null) {
            if (a.title === b.title) return 0;
            return a.title.localeCompare(b.title);
          }

          if (a.order === b.order) {
            if (a.title === b.title) return 0;
            return a.title.localeCompare(b.title);
          }

          if (a.order < b.order) return -1;
          if (a.order > b.order) return 1;
          return 0;
        });
      }

      return accu;
    },
    { items: [] }
  );

  return { sidenavData, breadcrumbData };
};
