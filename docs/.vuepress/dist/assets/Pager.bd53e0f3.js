import{_ as i,e as l,r as u,o as e,c as n,f as d,w as s,d as c,t as r,v as a}from"./app.9eb88680.js";const x={class:"pager"},k={key:0},v={key:1},m={key:0},f={key:1},y=l({__name:"Pager",props:{data:{type:Object,required:!0}},setup(t){return(h,g)=>{const o=u("RouterLink");return e(),n("div",x,[t.data.prev?(e(),d(o,{key:0,class:"prev",to:t.data.prev.link},{default:s(()=>[c(r(t.data.prev.text)+" ",1),t.data.prev.title?(e(),n("br",k)):a("",!0),t.data.prev.title?(e(),n("span",v,r(t.data.prev.title),1)):a("",!0)]),_:1},8,["to"])):a("",!0),t.data.next?(e(),d(o,{key:1,class:"next",to:t.data.next.link},{default:s(()=>[c(r(t.data.next.text)+" ",1),t.data.next.title?(e(),n("br",m)):a("",!0),t.data.next.title?(e(),n("span",f,r(t.data.next.title),1)):a("",!0)]),_:1},8,["to"])):a("",!0)])}}});var P=i(y,[["__file","Pager.vue"]]);export{P};
