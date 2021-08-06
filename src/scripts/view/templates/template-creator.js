/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
const createAllPriceTemplate = (bitcoin) => `
<tr>
<th scope="row">${bitcoin.cmc_rank}</th>
<td><a href="${`/#/detail/${bitcoin.id}`}">${bitcoin.name}</a></td>
<td>${bitcoin.symbol}</td>
<td>${bitcoin.quote.USD.market_cap}</td>
<td>${bitcoin.quote.USD.price}</td>
<td>${bitcoin.max_supply}</td>
<td>${bitcoin.circulating_supply}</td>
<td style="color:#002366;">${bitcoin.quote.USD.volume_24h}</td>
<td>${bitcoin.quote.USD.percent_change_1h}</td>
<td>${bitcoin.quote.USD.percent_change_24h}</td>
</tr>
`;
const createBtcDetailTemplate = (bitcoin) => `
<div class="row">
<div class="col-md-12 detail">
  <div class="detail-logo">
    <img src="${bitcoin.logo}" width="70px" alt="" />
    <span class="fw-bold fs-2 me-2">${bitcoin.name} <sup>${bitcoin.symbol}</sup></span>
    <div class="card-detail mt-3">
      <p class="coin-text">${bitcoin.category}</p>
    </div>
    <div class="row web-detail mt-4">
      <div class="col-md web-card me-3">
        <a href="${bitcoin.urls.website}" target="_blank"><p><i class="fa fa-gg me-1 fs-3" aria-hidden="true"></i> ${bitcoin.name} Website</p></a>
      </div>
      <div class="col-md web-card me-3">
        <a href="${bitcoin.urls.technical_doc}" target="_blank"><p><i class="fa fa-file-text fs-3 me-1" aria-hidden="true"></i> Whitepaper</p></a>
      </div>
      <div class="col-md web-card me-3">
        <a href="${bitcoin.urls.source_code}" target="_blank"><p><i class="fa fa-code me-1 fs-3" aria-hidden="true"></i> Source Code</p></a>
      </div>
      <div class="col-md web-card me-3">
        <a href="${bitcoin.urls.reddit}" target="_blank"><p><i class="fa fa-reddit-square me-1 fs-3" aria-hidden="true"></i> Reddit</p></a>
      </div>
    </div>
  </div>
</div>
<div class="accordion accordion-flush" id="accordionFlushExample ">
  <div class="accordion-item mt-5 mb-5">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed fw-bold fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        What is ${bitcoin.name}
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">${bitcoin.description}</div>
    </div>
  </div>
</div>
`;
export {
  createAllPriceTemplate, createBtcDetailTemplate,
};
