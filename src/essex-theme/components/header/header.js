import React from "react"
import logo from "./seax.png"
console.log(logo)
function Header() {
  return (
    <header class="header-background">
      <div class="header">
        <div class="nav">
          <div class="logo-wrap">
            <a href="/" class="logo-text seax">
              <img src={logo} width="36" height="30" alt="Essex logo" />
               Essex.gov.uk
            </a>
          </div>
          <form action="/search-results" method="get" class="form" role="search" aria-label="Search essex.gov.uk" id="cludo-search-form">
            <div class="group search">
              <div class="search-input">
                <label for="cludo-search">Search essex.gov.uk
                  <input type="text" id="cludo-search" name="search" placeholder="Search essex.gov.uk" autocomplete="off" />
                </label>
                <button class="fas fa-search search-icon-position" aria-label="Search button" id="search-button"></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header