import{c as e,t as r}from"./index-a739ba05.js";import{i as n,E as t,L as o,T as s,a}from"./index-aca8b88c.js";const i=r("<h2>Nested"),l=r("<p>Set resources through TransProvider options:"),p=r("<a href=/profile>Your Profile"),f=()=>e(a,{options:{debug:!0,lng:"en",resources:{lt:{translation:{greeting_nested:"<0>Sveiki, {{fullName}}! </0><1>Tavo profilis</1>."}}}},get instance(){return n.createInstance()},get children(){return[i(),l(),e(t,{children:"<TransProvider options={ resources: { lt: { translation: { greeting_nested: '<0>Sveiki, {{fullName}}! </0><1>Tavo profilis</1>.' } } } />"}),e(o,{}),e(t,{get translation(){return e(s,{key:"greeting_nested",options:{fullName:"John Doe"},get children(){return["Hello {{ fullName }}! ",p(),"."]}})},children:`<Trans key="greeting_nested" options={{ fullName: 'John Doe' }}> {'Hello {{ fullName }}! '} <a href="/profile">Your Profile</a>. </Trans>`})]}});export{f as default};
