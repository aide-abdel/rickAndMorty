function textFeeder(){
const texts = ["Lorem ipsum dolor sit amet consectetur adipisicing elit","Lorem ipsum dolor sit amet consectetur","Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur"];
const textMediaCont = document.querySelector(".textMediaMarquee");
let i = 0;
let j= 0
while(j < 99){
    const text = document.createElement("span");
    text.innerText = texts[i];
    text.setAttribute("class","textMediaItem");
    textMediaCont.append(text);
    if (i === texts.length) i =0;
    j++;
}
}

//  mainContainerPanoramaPics
const medias = ["https://i.cdn.turner.com/adultswim/big/img/2017/02/28/static2.gif","https://i.cdn.turner.com/adultswim/big/video/rick-and-morty-marathon/rickandmorty_310_dup-20170928_1.jpg","https://images6.alphacoders.com/909/thumb-1920-909641.png","https://images.hdqwalls.com/wallpapers/rick-and-morty-breaking-bad-4k-o0.jpg","https://wallpapercave.com/wp/wp1822736.jpg","https://www.freepnglogos.com/uploads/rick-and-morty/rick-and-morty-background-rick-and-morty-wallpapers-top-rick-and-6.jpg"];


let k = 0
const media = document.querySelector(".mainMedia");
function mediaChange(){
   
     media.src = medias[k];
    media.setAttribute("src",medias[k]);
    k === (medias.length-1) ? k=0 : k++;
}
function setTimer(){
    setInterval(mediaChange,2000);
}
 document.onload = textFeeder();
 document.onload = setTimer();


