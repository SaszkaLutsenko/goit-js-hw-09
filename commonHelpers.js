import"./assets/reset-41fa52ec.js";const c=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],s=l(c),p=document.querySelector(".gallery");p.innerHTML=s;p.addEventListener("click",r);function r(o){if(o.preventDefault(),!o.target.classList.contains("gallery-image"))return;const a=o.target.dataset.source,t=o.target.alt,e=basicLightbox.create(`<div class = 'modal'>
        <a class='modal-link' href= '${a}'>
          <img class='modal-image' src= '${a}' alt= '${t}' />
        </a>
      </div>`,{onShow:()=>{document.addEventListener("keydown",i)},onClose:()=>{document.removeEventListener("keydown",i)}});e.show();function i(n){n.code==="Escape"&&(document.removeEventListener("keydown",i),e.close())}}function l(o){return o.map(({preview:a,original:t,description:e})=>`<li class = 'gallery-item'>
        <a class = 'gallery-link' href = '${t}'>
          <img
            class = 'gallery-image'
            src = '${a}'
            data-source = '${t}'
            alt = '${e}'
          />
        </a>
      </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
