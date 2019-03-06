var oWp=document.getElementById("wrapper");
var oNav=document.getElementsByTagName("nav");
var oUl=document.getElementsByTagName("ul");
var oLi=document.getElementsByTagName("li");
var oMn=document.getElementsByTagName("main");
var oSt=document.getElementsByTagName("section");
var oFm=document.getElementsByTagName("form");
for(var i=0;i<oLi.length;i++){
    oLi[i].index=i;
    oLi[i].onclick=function(){
        for(var k=0;k<oLi.length;k++){
            oLi[k].className='';
            oFm[k].style.display="none";
        }
        this.className="active";
        oFm[this.index].style.display="block"
    }
}