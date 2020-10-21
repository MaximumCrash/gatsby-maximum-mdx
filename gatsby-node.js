/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.onCreatePage = async ({page, pathPrefix, actions}) => {
  const {createPage, deletePage} = actions;

  // inject breadcrumbs into page context
  const { context: oldPageContext } = page
  deletePage(page)
  createPage({
    ...page,
    context: {
      ...oldPageContext,
      pagePath: page.path //NOTE(Rejon): I provide this so we can have a navigational anchor during static builds for pathDirs and sidenav/breadcrumb data.
    }
  });
}
