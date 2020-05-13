/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Ensures that client-side routing works on the desired pages
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // Only update the `/app` page.
  if (page.path.match(/^\/portfolios/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/portfolios/*"
    // Update the page.
    createPage(page)
  }
}
