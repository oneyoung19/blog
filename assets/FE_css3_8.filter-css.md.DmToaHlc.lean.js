import{_ as f,o as _,c as p,aP as u}from"./chunks/framework.D1yHhm2y.js";const m="_radio_ir767_31",g="_left_ir767_39",v="_right_ir767_42",h={"filter-demo":"_filter-demo_ir767_2","filter-image":"_filter-image_ir767_8","filter-box":"_filter-box_ir767_16","filter-item":"_filter-item_ir767_21",radio:m,left:g,right:v},x={mounted(){var a=document.querySelector(".filter-image"),t=document.querySelector(".filter-box"),l=["none","blur(5px)","brightness(200%)","contrast(200%)","drop-shadow(8px 8px 10px gray)","grayscale(100%)","hue-rotate(90deg)","invert(100%)","opacity(30%)","saturate(8)","sepia(100%)","contrast(200%) brightness(150%)"],o=l.map(e=>`<li class="filter-item" data-id="${e}">
          <input type="radio" class="radio">
          <span class="left">filter</span>:
          <span class="right">${e}</span>;
        </li>`);t.innerHTML=o.join(""),t.addEventListener("click",function(e){var r=e.target.closest("li");if(r&&t.contains(r)){var i=r.dataset.id;if(i){a.style.filter=i;for(var n=r.parentNode.children,s=0;s<n.length;s++){var c=n[s],d=c.children[0];if(c.dataset.id===i){d.checked=!0;continue}d.checked=!1}}}})}},S=JSON.parse('{"title":"8.Filter","description":"","frontmatter":{"title":"8.Filter"},"headers":[],"relativePath":"FE/css3/8.filter-css.md","filePath":"FE/css3/8.filter-css.md","lastUpdated":1735912341000}');function y(a,t,l,o,e,r){return _(),p("div",null,t[0]||(t[0]=[u('<p>如果在平常生活中接触过美图软件的话，那么对<strong>滤镜</strong>一词应该不会陌生。</p><p>而在 <code>CSS3</code> 中设置<strong>滤镜</strong>的方式就是使用 <code>filter</code>。</p><template><div class="filter-demo"><ul class="filter-box"></ul><div class="filter-image"></div></div></template>',3)]))}const b={$style:h},k=f(x,[["render",y],["__cssModules",b]]);export{S as __pageData,k as default};