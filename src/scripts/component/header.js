/* eslint-disable no-underscore-dangle */
class headerBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = /* html */ `
      <section
      class="h-100 w-100"
      style="box-sizing: border-box; background-color: #141432"
    >
      <div
        class="header-4-3 container-xxl mx-auto p-0 position-relative"
        style="font-family: 'Poppins', sans-serif"
      >
        <div>
          <div class="mx-auto d-flex flex-lg-row flex-column hero">
            <!-- Left Column -->
            <div
              class="
                left-column
                d-flex
                flex-lg-grow-1 flex-column
                align-items-lg-start
                text-lg-start
                align-items-center
                text-center
              "
            >
              <h1 class="title-text-big">
                Buy And Sale<br class="d-lg-block d-none" />
                Cryptocurrency Assets
              </h1>
              <div
                class="
                  d-flex
                  flex-sm-row flex-column
                  align-items-center
                  mx-lg-0 mx-auto
                  justify-content-center
                  gap-3
                "
              >
                <button
                  class="btn d-inline-flex mb-md-0 btn-try text-white border-0"
                >
                  Sign In
                </button>
                <button class="btn btn-outline">
                  <div class="d-flex align-items-center">Sign Up</div>
                </button>
              </div>
            </div>
            <!-- Right Column -->
            <div
              class="
                right-column
                text-center
                d-flex
                justify-content-lg-end justify-content-center
                pe-0
              "
            >
              <img
                id="img-fluid"
                class="h-auto mw-100"
                src="kripto.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
                      `;
  }
}
customElements.define('header-bar', headerBar);
