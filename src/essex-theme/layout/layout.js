import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

export default ({ children }) => (
<>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Essex County Council Service Design Toolkit</title>
    <link rel="canonical" href="https://essex-service-design-toolkit.herokuapp.com" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous" />
    <link href="https://customer.cludo.com/css/templates/v2.1/essentials/cludo-search.min.css" type="text/css" rel="stylesheet" />
    <link href="/public/stylesheets/application-print.css" media="print" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Helmet>
  <Header />
  <main id="content">
    <div class="container" id="design-system-docs">
      <div class="main only">
        <section class="content">
          <div>{children}</div>
        </section>
      </div>
    </div>
  </main>
  <Footer />
</>
)
