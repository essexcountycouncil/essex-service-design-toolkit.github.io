import React from "react"
export default () => {

<h2 class="content-heading">Content Heading</h2>
<div class="previews news">
  <div class="preview">
    <img src={node.image.file.url} alt="" width="200" height="112" />
    <h3 class="sub-section-heading"><Link to={node.slug}>{node.title}</Link></h3>
    <p>{node.summary.summary}</p>
    <p class="meta">{node.date}</p>
  </div>
</div>