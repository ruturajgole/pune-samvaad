"use strict";(self.webpackChunkpune_samvaad=self.webpackChunkpune_samvaad||[]).push([[879],{6879:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var i=n(870),l=n(5043),a=n(636),o=n(3733),r=n(4733),s=n(579),u=function(e){return e[e.Unsubmitted=0]="Unsubmitted",e[e.Submitting=1]="Submitting",e[e.Submitted=2]="Submitted",e}(u||{});const d=()=>(0,s.jsxs)(r.i,{style:c.submitted,children:[(0,s.jsx)(i.A,{color:"success",fontSize:"large"}),(0,s.jsx)(r.EY,{style:c.submittedText,children:"Form Submitted"})]}),m=()=>(0,s.jsx)(r.i,{style:c.loader,children:(0,s.jsx)(o.aH,{})}),c={container:{padding:"1%"},title:{fontSize:"xx-large"},form:{display:"flex",flexDirection:"column",gap:"2%",padding:"1%"},contact:{display:"flex",flexDirection:["column","column","row"],gap:"1%",justifyContent:"space-evenly"},input:{fontSize:"large",margin:"0.5% 0%",padding:"1%",flex:"1"},buttons:{display:"flex",padding:"1%",gap:"1%"},button:{color:"white",fontSize:"large",backgroundColor:"#ef7f1b"},submit:{color:"white",borderRadius:"4px",fontSize:"large",border:"none",cursor:"pointer",backgroundColor:"#ef7f1b"},loading:{opacity:.5,pointerEvents:"none"},loader:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:"0",right:"0",zIndex:100},submitted:{display:"flex",justifyContent:"center",alignItems:"center",flex:"1",gap:"1%",width:"100%"},submittedText:{fontSize:"xx-large"}},p=()=>{const e={name:"",email:"",mobile:"",query:""},[t,n]=(0,l.useState)(e),[i,o]=(0,l.useState)(u.Unsubmitted),p=e=>{const{name:i,value:l}=e.target;n({...t,[i]:l})},x=async e=>{e.preventDefault();const n=e.target;if(!n.checkValidity())return void n.reportValidity();o(u.Submitting);200===await(0,a.RS)(t)&&o(u.Submitted)},b=()=>n(e),f=()=>(0,s.jsxs)(r.i,{style:c.container,children:[(0,s.jsx)(r.EY,{style:c.title,children:"Contact Us Form"}),(0,s.jsxs)("form",{id:"form",onSubmit:x,style:c.form,children:[(0,s.jsx)("input",{onChange:p,style:c.input,type:"text",name:"name",placeholder:"Full Name*",value:t.name,required:!0}),(0,s.jsxs)(r.i,{style:c.contact,children:[(0,s.jsx)("input",{onChange:p,style:c.input,type:"email",name:"email",required:!0,placeholder:"Email*",value:t.email}),(0,s.jsx)("input",{onChange:p,style:c.input,type:"text",name:"mobile",required:!0,placeholder:"Mobile*",value:t.mobile})]}),(0,s.jsx)("textarea",{onChange:p,rows:4,style:{...c.input,resize:"none"},name:"query",placeholder:"Additional Information (Optional)",value:t.query})]}),(0,s.jsxs)(r.i,{style:c.buttons,children:[(0,s.jsx)("input",{form:"form",style:c.submit,type:"submit",value:"SUBMIT"}),(0,s.jsx)(r.$n,{style:c.button,onClick:b,children:"Clear"})]})]});return i===u.Unsubmitted&&(0,s.jsx)(f,{})||i===u.Submitting&&(0,s.jsx)(m,{})||i===u.Submitted&&(0,s.jsx)(d,{})||(0,s.jsx)(r.EY,{children:"Something Went Wrong"})}}}]);
//# sourceMappingURL=879.0fd08501.chunk.js.map