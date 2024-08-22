import{S as i,i as m}from"./assets/vendor-8501dee5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d=t=>`
    <li class="gallery-card">
      <a href="${t.largeImageURL}">
        <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>Likes:</b> ${t.likes}
        </p>
        <p class="info-item">
          <b>Views:</b> ${t.views}
        </p>
        <p class="info-item">
          <b>Comments:</b> ${t.comments}
        </p>
        <p class="info-item">
          <b>Downloads:</b> ${t.downloads}
        </p>
      </div>
    </li>
  `,f="45569082-93b38ce8ee83e3f403ee7e577",p="https://pixabay.com/api/",h=t=>{const s=new URLSearchParams({orientation:"horizontal",image_type:"photo",safesearch:"true"});return fetch(`${p}?key=${f}&q=${t}&${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})};console.log(i);const n=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),y=document.querySelector(".js-loader");console.log(y);const u=new i(".js-gallery a",{captionsData:"alt",captionDelay:250});console.log(u);const g=t=>{t.preventDefault();const s=n.elements.user_query.value;h(s).then(o=>{if(o.hits.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",n.reset();return}const a=o.hits.map(e=>d(e)).join("");c.innerHTML=a,u.refresh()}).catch(o=>{console.log(o)})};n.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
