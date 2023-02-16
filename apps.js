
const thumbnails = ["https://media.cdn.adultswim.com/uploads/20210914/219141616186-1910281358343-RAM.jpg",
"https://media.cdn.adultswim.com/uploads/20220713/22713173121-PrimalMarathonImage1.png",
"https://i.cdn.turner.com/adultswim/big/image-upload/thumbnails/thumb-2_image-15130053723479.jpg",
"https://media.cdn.adultswim.com/uploads/20200430/204301254477-metasite.jpg",
"https://i.cdn.turner.com/adultswim/big/video/robot-chicken-marathon/marathonStream_robotchicken5.jpg",
"https://i.cdn.turner.com/adultswim/big/video/samurai-jack/sjMarathonchannlel_maraThumbS05finale1080.jpg",
"https://i.cdn.turner.com/adultswim/big/video/aqua-teen-hunger-force-marathon/marathonStream_athf10.jpg",
"https://i.cdn.turner.com/adultswim/big/img/2018/03/28/eamarathon.jpg",
"https://i.cdn.turner.com/adultswim/big/img/2019/03/26/vbSearch.jpg",
"https://media.cdn.adultswim.com/uploads/20190710/197101518217-channel5thumb.jpg",
"https://media.cdn.adultswim.com/uploads/20200325/thumbnails/2_203251736258-marathonStream_infomercials.jpg",
"https://i.cdn.turner.com/adultswim/big/video/black-jesus-marathon/marathonStream_blackjesus.jpg",
"https://i.cdn.turner.com/adultswim/big/video/your-pretty-face-is-going-to-hell-marathon/marathonStream_ypf6.jpg"
]
let index = 0;
let arraySize = thumbnails.length;

const t1 = document.getElementById("thumbnail1");
const t2 = document.getElementById("thumbnail2");
const t3 = document.getElementById("thumbnail3");
const t4 = document.getElementById("thumbnail4");
const t5 = document.getElementById("thumbnail5");

const logoPic = document.querySelector(".imageContained")
t1.addEventListener('click', ()=>{
 logoPic.setAttribute("src",t1.src)
 console.log(t2.src)
})
t2.addEventListener('click', ()=>{
    logoPic.setAttribute("src",t2.src)
    console.log(t2.src)
   })
   t3.addEventListener('click', ()=>{
    logoPic.setAttribute("src",t3.src)
    console.log(t2.src)
   })
   t4.addEventListener('click', ()=>{
    logoPic.setAttribute("src",t4.src)
    console.log(t2.src)
   })
   t5.addEventListener('click', ()=>{
    logoPic.setAttribute("src",t5.src)
    console.log(t2.src)
   })
function fillThumbnaisPlus(index){
    
    if(index >= arraySize-5) index=0;
    t1.setAttribute("src",thumbnails[index%arraySize])
    t2.setAttribute("src",thumbnails[(index+1)%arraySize])
    t3.setAttribute("src",thumbnails[(index+2)%arraySize])
    t4.setAttribute("src",thumbnails[(index+3)%arraySize])
    t5.setAttribute("src",thumbnails[(index+4)%arraySize])
}

const rightArrow = document.querySelector(".rightArrow")
rightArrow.addEventListener('click',()=>{
    fillThumbnaisPlus(index);
    index++;
})

function fillThumbnaisMinus(index){
    if(index <= 0) index=arraySize;
    t1.setAttribute("src",thumbnails[index%arraySize])
    t2.setAttribute("src",thumbnails[(index+1)%arraySize])
    t3.setAttribute("src",thumbnails[(index+2)%arraySize])
    t4.setAttribute("src",thumbnails[(index+3)%arraySize])
    t5.setAttribute("src",thumbnails[(index+4)%arraySize])
}
const leftArrow = document.querySelector(".leftArrow")
leftArrow.addEventListener('click',()=>{
    fillThumbnaisMinus(index);
    index--;
})
