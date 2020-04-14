const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const PageTemplate = path.resolve(`./src/essex-theme/templates/page.js`)
  const SearchResultsTemplate = path.resolve(`./src/essex-theme/templates/search-results.js`)

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const Pages = result.data.allMarkdownRemark.edges
    Pages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: PageTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })


  const Search = result.data.allMarkdownRemark.edges
    Search.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: SearchResultsTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}