import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div id="cludo-search-results">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`