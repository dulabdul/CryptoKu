const Home = {
  async render() {
    return /* html */ `
    <div class="container content-2-2 mt-4">
    <div class="row">
      <div class="col-md-6 title-text prices">
        <h2 class="text-title">Real Time Price</h2>
        <h3>Trade Currencies Faster Than Ever, Low Fees</h3>
        <p class="text-caption">
          Exchange currency in Indonesia,no 1 in Indonesia the best ever
        </p>
      </div>
      <div class="col-md-6 prices text-center">
        <div class="image-1">
          <img src="trading1.png" class="img-fluid" alt="Trading" />
        </div>
      </div>
    <div class= "col-md-12 text-center see-all">
    <a href="#/kripto"><button type="button" class="btn btn-outline-primary btn-lg">See All Crypto</button></a>
    </div>
    </div>
    </div>
  </div>
  <div class="container content-2-2 mt-5">
    <div class="row justify-content-center">
      <div class="text-center title-text">
        <h2 class="text-title">How It Works</h2>
      </div>
      <div class="col-md-4 icon-work text-center">
        <img src="wallet.png" class="img-fluid" alt="Wallet" />
        <h4>Create Wallet</h4>
        <p class="text-caption">
          Dont have a wallet? Dont worry,create wallet now!
        </p>
      </div>
      <div class="col-md-4 icon-work text-center">
        <img src="user.png" class="img-fluid" alt="user" />
        <h4>Open Accounts</h4>
        <p class="text-caption">
          Simple open account to start buying and selling currency
        </p>
      </div>
      <div class="col-md-4 icon-work text-center">
        <img src="trading.png" class="img-fluid" alt="trading" />
        <h4>Trading Currency</h4>
        <p class="text-caption">Start trading now</p>
      </div>
    </div>
  </div>
  <div
    class="content-2-2 container-xxl mx-auto p-0 position-relative"
    style="font-family: 'Poppins', sans-serif"
  >
    <div class="text-center title-text">
      <h2 class="text-title">3 Keys Benefit</h2>
      <p class="text-caption" style="margin-left: 3rem; margin-right: 3rem">
        You can easily manage your currency with a powerful tools
      </p>
    </div>

    <div class="grid-padding text-center">
      <div class="row">
        <div class="col-lg-4 column">
          <div class="icon">
            <img
              src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-5.png"
              alt=""
            />
          </div>
          <h3 class="icon-title">Easy to Operate</h3>
          <p class="icon-caption">This can easily help you<br /></p>
        </div>
        <div class="col-lg-4 column">
          <div class="icon">
            <img
              src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-6.png"
              alt=""
            />
          </div>
          <h3 class="icon-title">Real-Time Prices</h3>
          <p class="icon-caption">
            With real-time prices, you<br />
            can check price in real time
          </p>
        </div>
        <div class="col-lg-4 column">
          <div class="icon">
            <img
              src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-7.png"
              alt=""
            />
          </div>
          <h3 class="icon-title">Very Full Secured</h3>
          <p class="icon-caption">Dont worry for hacker or security<br /></p>
        </div>
      </div>
    </div>
  </div>
        `;
  },

  async afterRender() {

  },
};

export default Home;
