import{S as m,i as c}from"./assets/vendor-8501dee5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f=t=>`
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
  `,h="45569082-93b38ce8ee83e3f403ee7e577",p="https://pixabay.com/api/",y=t=>{const s=new URLSearchParams({orientation:"horizontal",image_type:"photo",safesearch:"true"});return fetch(`${p}?key=${h}&q=${t}&${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})};console.log(m);const n=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader");console.log(l);const d=new m(".js-gallery a",{captionsData:"alt",captionDelay:250});console.log(d);const g=t=>{t.preventDefault();const s=n.elements.user_query.value.trim();if(s===""){c.error({message:"Sorry, there no image you are looking",position:"topRight"});return}l.classList.remove("is-hidden"),y(s).then(o=>{if(o.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u.innerHTML="";return}const a=o.hits.map(e=>f(e)).join("");u.innerHTML=a,d.refresh(),n.reset()}).catch(o=>{console.log(o)}).finally(()=>{l.classList.add("is-hidden")})};n.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
