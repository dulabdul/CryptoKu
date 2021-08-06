/* eslint-disable no-underscore-dangle */
class footerBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = /* html */ `
        
    <footer
    class="footer-2-2 mx-auto position-relative p-0"
    style="font-family: 'Poppins', sans-serif"
  >
    <div class="list-footer">
      <div class="row gap-md-0 gap-3">
        <div class="col-lg-3 col-md-6">
          <div class="">
            <div class="list-space">
              <img
                src="/icons/icon.png"
                class="img-fluid"
                width="60px"
                height="60px"
                alt=""
              />
            </div>
            <nav class="list-unstyled">
              <li class="list-space">
                <a href="#/" class="list-menu">Home</a>
              </li>
              <li class="list-space">
                <a href="https://github.com/dulabdul" class="list-menu">About</a>
              </li>
              <li class="list-space">
              <a href="#/kripto" class="list-menu">Crypto</a>
            </li>              
            </nav>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h2 class="footer-text-title">Company</h2>
          <nav class="list-unstyled">
            <li class="list-space">
              <a href="" class="list-menu">Contact Us</a>
            </li>
            <li class="list-space">
              <a href="" class="list-menu">Blog</a>
            </li>
            <li class="list-space">
              <a href="" class="list-menu">Culture</a>
            </li>
            <li class="list-space">
              <a href="" class="list-menu">Security</a>
            </li>
          </nav>
        </div>
        <div class="col-lg-3 col-md-6">
          <h2 class="footer-text-title">Support</h2>
          <nav class="list-unstyled">
            <li class="list-space">
              <a href="" class="list-menu">Getting Started</a>
            </li>
            <li class="list-space">
              <a href="" class="list-menu">Help Center</a>
            </li>
          </nav>
        </div>
      </div>
    </div>

    <div class="border-color info-footer">
      <div class="">
        <hr class="hr" />
      </div>
      <div
        class="
          mx-auto
          d-flex
          flex-column flex-lg-row
          align-items-center
          footer-info-space
          gap-4
        "
      >
        <div class="d-flex title-font font-medium align-items-center gap-4">
          <a href="https://www.instagram.com/dul.abdul21/" target="_blank" class="social-media-c">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/abdul-rahman-2737131a1/" target="_blank" class="social-media-c">
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/dulabdul" target="_blank" class="social-media-c">
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
        <nav
          class="
            mx-auto
            d-flex
            flex-wrap
            align-items-center
            justify-content-center
            gap-4
          "
        >
          <a href="" class="footer-link" style="text-decoration: none"
            >Terms of Service</a
          >
          <span>|</span>
          <a href="" class="footer-link" style="text-decoration: none"
            >Privacy Policy</a
          >
          <span>|</span>
          <a href="" class="footer-link" style="text-decoration: none"
            >Licenses</a
          >
        </nav>
        <nav
          class="
            d-flex
            flex-lg-row flex-column
            align-items-center
            justify-content-center
          "
        >
          <p style="margin: 0">Copyright © 2021 CryptoKu</p>
        </nav>
      </div>
    </div>
  </footer>
                      `;
  }
}
customElements.define('footer-bar', footerBar);
