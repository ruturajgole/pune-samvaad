"use strict";(self.webpackChunkpune_samvaad=self.webpackChunkpune_samvaad||[]).push([[727],{3727:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var o=i(5043),l=i(9531),n=i(8832),s=i(9662),r=i(579);const a=(0,s.A)((0,r.jsx)("path",{d:"M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12m10-1h4v2h-4v3l-4-4 4-4z"}),"ArrowCircleLeft"),d=(0,s.A)((0,r.jsx)("path",{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10m-10 1H8v-2h4V8l4 4-4 4z"}),"ArrowCircleRight"),h=e=>{let{folders:t}=e;const[i,l]=(0,o.useState)({folderIndex:-1,photoIndex:-1}),{folderIndex:s,photoIndex:h}=i;return(0,r.jsxs)("div",{style:c.container,children:[(0,r.jsx)("span",{style:c.subtitle,children:"Gallery"}),(0,r.jsx)("span",{style:c.title,children:"Photos"}),!!t.length&&t.map(((e,t)=>(0,r.jsxs)("div",{style:c.folder,children:[(0,r.jsx)("span",{style:c.folderTitle,children:e.name}),(0,r.jsx)("div",{style:c.grid,children:e.photos.map(((e,i)=>(0,r.jsx)("img",{onClick:()=>l({folderIndex:t,photoIndex:i}),style:c.thumbnail,src:e.thumbnailLink,alt:e.name})))}),(0,r.jsx)("hr",{style:c.horizontalLine})]}))),s>-1&&h>-1&&(0,r.jsx)(n.aF,{title:t[s].name,onClose:()=>l({folderIndex:-1,photoIndex:-1}),children:(0,r.jsxs)("div",{style:c.modal,children:[(0,r.jsx)(a,{onClick:e=>{e.stopPropagation(),l({folderIndex:s,photoIndex:h-1})},style:{...c.arrow,visibility:h>0?"visible":"hidden"}}),(0,r.jsx)("iframe",{src:"https://drive.google.com/file/d/".concat(t[s].photos[h].id,"/preview"),width:"70%",height:"90%"}),(0,r.jsx)(d,{onClick:e=>{e.stopPropagation(),l({folderIndex:s,photoIndex:h+1})},style:{...c.arrow,visibility:h<t[s].photos.length-1?"visible":"hidden"}})]})})]})},c={container:{display:"flex",height:"75vh",padding:"1%",flexDirection:"column"},title:{fontSize:"xx-large"},subtitle:{fontSize:"x-large"},folder:{display:"flex",flexDirection:"column"},folderTitle:{fontSize:"x-large"},horizontalLine:{width:"100%",border:"1px solid black"},photos:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1%"},thumbnail:{cursor:"pointer",margin:"1%"},modal:{display:"flex",width:"80%",height:"80%",justifyContent:"center",alignItems:"center"},arrow:{color:"white",fontSize:"xxx-large",cursor:"pointer"}},x=e=>{let{folders:t}=e;const[i,l]=(0,o.useState)({folderIndex:-1,videoIndex:-1}),{folderIndex:s,videoIndex:h}=i;return(0,r.jsxs)("div",{style:p.container,children:[(0,r.jsx)("span",{style:p.subtitle,children:"Gallery"}),(0,r.jsx)("span",{style:p.title,children:"Videos"}),!!t.length&&t.map(((e,t)=>!!e.videos.length&&(0,r.jsxs)("div",{style:p.folder,children:[(0,r.jsx)("span",{style:p.folderTitle,children:e.name}),(0,r.jsx)("div",{style:p.grid,children:e.videos.map(((e,i)=>(0,r.jsx)("img",{onClick:()=>l({folderIndex:t,videoIndex:i}),style:p.thumbnail,src:e.thumbnailLink,alt:e.name})))}),(0,r.jsx)("hr",{style:p.horizontalLine})]}))),s>-1&&h>-1&&(0,r.jsx)(n.aF,{title:t[s].name,onClose:()=>l({folderIndex:-1,videoIndex:-1}),children:(0,r.jsxs)("div",{style:p.modal,children:[(0,r.jsx)(a,{onClick:e=>{e.stopPropagation(),l({folderIndex:s,videoIndex:h-1})},style:{...p.arrow,visibility:h>0?"visible":"hidden"}}),(0,r.jsx)("iframe",{src:"https://drive.google.com/file/d/".concat(t[s].videos[h].id,"/preview"),width:"70%",height:"90%"}),(0,r.jsx)(d,{onClick:e=>{e.stopPropagation(),l({folderIndex:s,videoIndex:h+1})},style:{...p.arrow,visibility:h<t[s].videos.length-1?"visible":"hidden"}})]})})]})},p={container:{display:"flex",height:"75vh",padding:"1%",flexDirection:"column"},title:{fontSize:"xx-large"},subtitle:{fontSize:"x-large"},folder:{display:"flex",flexDirection:"column"},folderTitle:{fontSize:"x-large"},horizontalLine:{width:"100%",border:"1px solid black"},videos:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1%"},thumbnail:{cursor:"pointer",margin:"1%"},modal:{display:"flex",width:"80%",height:"80%",justifyContent:"center",alignItems:"center"},arrow:{color:"white",fontSize:"xxx-large",cursor:"pointer"}};var f=function(e){return e[e.None=0]="None",e[e.Photos=1]="Photos",e[e.Videos=2]="Videos",e}(f||{});const g={container:{display:"flex",height:"max-content",padding:"1%",flexDirection:"column"},title:{fontSize:"xx-large"},horizontalLine:{width:"100%",border:"1px solid black"},thumbnails:{display:"flex",position:"relative",overflowX:"clip",cursor:"pointer"},thumbnail:{cursor:"pointer",objectFit:"cover"},arrow:{position:"absolute",color:"black",fontSize:"xxx-large",right:"10",background:"\n    linear-gradient(to right, white, 95%, transparent),\n    linear-gradient(to top, white, 95%, transparent),\n    linear-gradient(to bottom, white, 95%, transparent)",backgroundBlendMode:"screen"},overlay:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",fontSize:"xx-large",background:"rgb(0,0,0,0.8)",color:"white"}},m=e=>{let{page:t,setSubPage:i}=e;const[s,a]=(0,o.useState)([]),[d,c]=(0,o.useState)(f.None);(0,o.useEffect)((()=>{fetch("".concat("http://localhost:3001","/photos")).then((e=>e.json().then((e=>a(e.filter((e=>e.photos.length)))))))}),[]);const p=s.map((e=>e.photos)).flat(),m=s.map((e=>e.videos)).flat();return s.length?t===l.Z2.Photos&&(0,r.jsx)(h,{folders:s})||t===l.Z2.Videos&&(0,r.jsx)(x,{folders:s})||(0,r.jsxs)("div",{style:g.container,children:[(0,r.jsx)("span",{style:g.title,children:"Photos"}),(0,r.jsxs)("div",{style:g.thumbnails,onMouseEnter:()=>c(f.Photos),onMouseLeave:()=>c(f.None),children:[d===f.Photos&&(0,r.jsx)("div",{style:g.overlay,onClick:()=>i({page:l.bQ.Gallery,subPage:l.Z2.Photos}),children:"See More"}),p.map((e=>(0,r.jsx)("img",{style:g.thumbnail,src:e.thumbnailLink,alt:e.name},e.name)))]}),(0,r.jsx)("span",{style:g.title,children:"Videos"}),(0,r.jsxs)("div",{style:g.thumbnails,onMouseEnter:()=>c(f.Videos),onMouseLeave:()=>c(f.None),children:[d===f.Videos&&(0,r.jsx)("div",{style:g.overlay,onClick:()=>i({page:l.bQ.Gallery,subPage:l.Z2.Videos}),children:"See More"}),m.map((e=>(0,r.jsx)("img",{style:g.thumbnail,src:e.thumbnailLink,alt:e.name},e.name)))]})]}):(0,r.jsx)(n.aH,{})}}}]);
//# sourceMappingURL=727.09a59eeb.chunk.js.map