let header = document.querySelector('header');
let body = document.querySelector('body');
let headbox = document.querySelector('#headbox');
let nav = document.querySelector('#nav');


let arti3box = document.querySelectorAll('.arti3box');
let artiz1 = document.querySelectorAll('.artiz1');
let artiz1img = document.querySelectorAll('.artiz1img');
let artiz1txt = document.querySelectorAll('.artiz1txt');
let artiz1txt1 = document.querySelectorAll('.artiz1txt1');
let artiz1txt2 = document.querySelectorAll('.artiz1txt2');
let artiz1txt3 = document.querySelectorAll('.artiz1txt3');

let scene = 2;


let btnlf = document.querySelector('#btnlf');
let btnps = document.querySelector('#btnps');
let btnrg = document.querySelector('#btnrg');
let imgcont = document.querySelector('#imgcont');
let up = document.querySelector('#up');
let menuup = document.querySelector('.menuup');
let menubox = document.querySelector('#menubox');
let menudown = document.querySelector('#menudown');

scene = 0;
stscene = 0;

btnrg.addEventListener('click',imgrgFn)
function imgrgFn(){
    if(scene < 4){scene = scene + 1 ; 
    imgmvFn();}
    else{scene = scene -4; 
        imgmvFn();}
        console.log(scene);
}

btnlf.addEventListener('click',imgltFn)
function imgltFn(){
    if(scene > 0){scene = scene - 1 ; 
        imgmvFn();}
        else{scene = scene +4; 
            imgmvFn();}
            console.log(scene);
}

window.onload = automvFn();

function automvFn(){
    imgrgFn();
    stopmv = setTimeout(function(){automvFn();}, 3000);
}


function imgstFn(){
    switch(stscene){
        case 0:
            clearTimeout(stopmv);
            stscene = 1;
            break;
        case 1:
            automvFn();
            stscene = 0;
            break;
    }
}

function imgmvFn(){
    switch(scene){
        case 0:
            imgcont.style.left = '0px';
            break;
        case 1:
            imgcont.style.left = '-1101px';
            break;
        case 2:
            imgcont.style.left = '-2202px';
            break;
        case 3:
            imgcont.style.left = '-3303px';
            break;
        case 4:
            imgcont.style.left = '-4404px';
            break;
    }
}



body.addEventListener('click', ()=>{
    artiz1[0].style.display = 'none';
    artiz1[0].style.opacity = '0';
    artiz1[1].style.display = 'none';
    artiz1[1].style.opacity = '0';
    artiz1[2].style.display = 'none';
    artiz1[2].style.opacity = '0';
    artiz1[3].style.display = 'none';
    artiz1[3].style.opacity = '0';
})
arti3box[0].addEventListener('click', ()=>{
    setTimeout(()=>{   
    artiz1[0].style.display = 'flex';
    artiz1img[0].src = 'img/dancheong/dancheong_6-1.jpg';
    artiz1txt2[0].innerHTML = '고려사(유승단편)';
    artiz1txt3[0].innerHTML = '경도(서울)의 호수가 10만호에 이르렀으며, 거리에는 단청으로 채색한 큰집들이 줄을 이었다.';
    artiz1[0].style.left = '0px';
    setTimeout(()=>{ artiz1[0].style.left = '186px'; artiz1[0].style.opacity = '1'},1);},1)
})
arti3box[1].addEventListener('click', ()=>{
    setTimeout(()=>{   
        artiz1[0].style.display = 'flex';
        artiz1img[0].src = 'img/dancheong/dancheong_6-2.jpg';
        artiz1txt2[0].innerHTML = '사신도';
        artiz1txt3[0].innerHTML = '단청의 기원은 고구려 고분벽화에 있는 사신도에서도 찾아볼 수 있다. 사신도는 고분벽화에서 단청의 유품을 볼 수 있는 가장 오래된 예이기도 하다.';
        artiz1[0].style.left = '186px';
        setTimeout(()=>{ artiz1[0].style.left = '186px'; artiz1[0].style.opacity = '1'},1);},1)
})
arti3box[2].addEventListener('click', ()=>{
    setTimeout(()=>{   
        artiz1[0].style.display = 'flex';
        artiz1img[0].src = 'img/dancheong/dancheong_6-3.jpg';
        artiz1txt2[0].innerHTML = '고구려의 고분 벽화';
        artiz1txt3[0].innerHTML = '고대에는 벽화 내부에도 단청을 그렸다. 단청은 선조들이 생각한 우주, 천상 세계에 대한 표현이기도 했다. ';
        artiz1[0].style.left = '372px';
        setTimeout(()=>{ artiz1[0].style.left = '186px'; artiz1[0].style.opacity = '1'},1);},1)
})
arti3box[3].addEventListener('click', ()=>{
    setTimeout(()=>{   
    artiz1[1].style.display = 'flex';
    artiz1img[1].src = 'img/dancheong/dancheong_6-4.jpg';
    artiz1txt2[1].innerHTML = '삼국사기 <솔거조>';
    artiz1txt3[1].innerHTML = '사찰에도 단청을 했다. 삼국사기 <솔거조>를 보면, 색이 변한 단청을 승려들이 덧칠했다고 기록하고 있고, 오색 구름이 절을 덮은 듯 단청은 화려했다고 적혀있다.';
    artiz1[1].style.left = '0px';
    setTimeout(()=>{ artiz1[1].style.left = '186px'; artiz1[1].style.opacity = '1'},1);},1)
})
arti3box[4].addEventListener('click', ()=>{
    setTimeout(()=>{   
        artiz1[1].style.display = 'flex';
        artiz1img[1].src = 'img/dancheong/dancheong_6-5.jpg';
        artiz1txt2[1].innerHTML = '삼국유사 <탑상조>';
        artiz1txt3[1].innerHTML = '제석신이 흥륜사의 경루에 강림하여 10일 동안 머무르니 불전과 불탑 및 풀과 나무, 흙과 돌들이 이상한 향기를 풍기고 오색구름이 절을 덮었다.';
        artiz1[1].style.left = '186px';
        setTimeout(()=>{ artiz1[1].style.left = '186px'; artiz1[1].style.opacity = '1'},1);},1)
})
arti3box[5].addEventListener('click', ()=>{
    setTimeout(()=>{   
        artiz1[1].style.display = 'flex';
        artiz1img[1].src = 'img/dancheong/dancheong_6-6.jpg';
        artiz1txt2[1].innerHTML = '고려사/충혜왕 5년';
        artiz1txt3[1].innerHTML = '궁궐이 준공되자 각 도에서 칠을 거두어들였으며, 단청의 안료를 수송하는데 기한을 늦추면 몇 곱의 베를 벌로 받았다.';
        artiz1[1].style.left = '372px';
        setTimeout(()=>{ artiz1[1].style.left = '186px'; artiz1[1].style.opacity = '1'},1);},1)
})
arti3box[6].addEventListener('click', ()=>{
    setTimeout(()=>{   
    artiz1[2].style.display = 'flex';
    artiz1img[2].src = 'img/dancheong/dancheong_6-7.jpg';
    artiz1txt2[2].innerHTML = '보은군 고철 법주사';
    artiz1txt3[2].innerHTML = '단청은 고려시대 수덕사 대웅전의 동쪽 벽에 있는 청 글락조도나 서쪽 벽에 있는 백 극락조도와 같은 곳에서도 오채와 오행을 결부되어 나타나고 있음을 알 수 있다. 천오백년 전 지어진 고철 법주사 단청이 화려하기로 손꼽히는 절이다. 단청은 주로 궁궐과 사찰에 그려졌다';
    artiz1[2].style.left = '0px';
    setTimeout(()=>{ artiz1[2].style.left = '186px'; artiz1[2].style.opacity = '1'},1);},1)
})
arti3box[7].addEventListener('click', ()=>{
    setTimeout(()=>{   
        artiz1[2].style.display = 'flex';
        artiz1img[2].src = 'img/dancheong/dancheong_6-8.jpg';
        artiz1txt2[2].innerHTML = '이수신편(1774년)';
        artiz1txt3[2].innerHTML = '조선 후기의 학자인 황윤석이 편찬한 백과사전식 과학서이다.';
        artiz1[2].style.left = '186px';
        setTimeout(()=>{ artiz1[2].style.left = '186px'; artiz1[2].style.opacity = '1'},1);},1)
})
arti3box[8].addEventListener('click', ()=>{
    setTimeout(()=>{   
        artiz1[2].style.display = 'flex';
        artiz1img[2].src = 'img/dancheong/dancheong_6-9.jpg';
        artiz1txt2[2].innerHTML = '세병관';
        artiz1txt3[2].innerHTML = '세병관: 1603년 이순신의 전공을 기리기 위하여 세운 건축물. <br><br>세병관 단청의 특징이라 할 수 있는 것은 머리초와 머리초 사이 개풍이라는 곳에 사군자나 화조도나 여러 가지 풍경화를 선택해서 그려 놓었다는 것이다. 그 공간이 320개소가 된다.';
        artiz1[2].style.left = '372px';
        setTimeout(()=>{ artiz1[2].style.left = '186px'; artiz1[2].style.opacity = '1'},1);},1)
})
arti3box[9].addEventListener('click', ()=>{
    setTimeout(()=>{   
    artiz1[3].style.display = 'flex';
    artiz1img[3].src = 'img/dancheong/dancheong_6-10.jpg';
    artiz1txt2[3].innerHTML = '승정원일기(1626년)';
    artiz1txt3[3].innerHTML = '호조가 아뢰기를, 이번 동지사와 성절사 두 행차에 연례적으로 사 오는 상의원의 각종 당물중에 황금, 수은, 주홍, 삼청, 이청, 동황, 심중, 청홍, 상모, 비상, 하엽, 삼록 및 내의원의 약재로 사오는 용뇌, 수은등의 물건이 모두 본조에 비축된수량이 있습니다. 그러므로 사오지 않겠습니다. 감히 아룁니다. 하니, 알았다고 전교하였다.';
    artiz1[3].style.left = '0px';
    setTimeout(()=>{ artiz1[3].style.left = '186px'; artiz1[3].style.opacity = '1'},1);},1)
})
arti3box[10].addEventListener('click', ()=>{
    setTimeout(()=>{   
        artiz1[3].style.display = 'flex';
        artiz1img[3].src = 'img/dancheong/dancheong_6-11.jpg';
        artiz1txt2[3].innerHTML = '광해군일기(1617년)';
        artiz1txt3[3].innerHTML = '영건 도감이 아뢰기를 당주홍 6백근의 값을 헤아려보니 60동이나 되어 무역해오기가 아주 어렵습니다 우리나라의 주홍으로 칠을 하는 것이 어떻겠습니까? ';
        artiz1[3].style.left = '186px';
        setTimeout(()=>{ artiz1[3].style.left = '186px'; artiz1[3].style.opacity = '1'},1);},1)
})
arti3box[11].addEventListener('click', ()=>{
    setTimeout(()=>{   
        artiz1[3].style.display = 'flex';
        artiz1img[3].src = 'img/dancheong/dancheong_6-12.jpg';
        artiz1txt2[3].innerHTML = '세종실록(1420년)';
        artiz1txt3[3].innerHTML = '박서생이 또 일본에서의 심중청, 도은조지, 주홍경분등의 제조법을 갖추어 아뢰니, 모두 이를 머물러 두게 하였다. ';
        artiz1[3].style.left = '372px';
        setTimeout(()=>{ artiz1[3].style.left = '186px'; artiz1[3].style.opacity = '1'},1);},1)
})


let nn1 = document.querySelectorAll('.nn1');
let nn2 = document.querySelectorAll('.nn2');

body.addEventListener('click',()=>{
    console.log(window.pageYOffset);
})

nn1[0].addEventListener('click',()=>{
    window.scrollTo({top:400, left:0, behavior:'smooth'});
})
nn1[1].addEventListener('click',()=>{
    window.scrollTo({top:1300, left:0, behavior:'smooth'});
})
nn1[2].addEventListener('click',()=>{
    window.scrollTo({top:1900, left:0, behavior:'smooth'});
})

nn2[0].addEventListener('click',()=>{
    window.scrollTo({top:600, left:0, behavior:'smooth'});
})
nn2[1].addEventListener('click',()=>{
    window.scrollTo({top:600, left:0, behavior:'smooth'});
})
nn2[2].addEventListener('click',()=>{
    window.scrollTo({top:600, left:0, behavior:'smooth'});
})
nn2[3].addEventListener('click',()=>{
    window.scrollTo({top:2300, left:0, behavior:'smooth'});
})
nn2[4].addEventListener('click',()=>{
    window.scrollTo({top:2300, left:0, behavior:'smooth'});
})
nn2[5].addEventListener('click',()=>{
    window.scrollTo({top:2300, left:0, behavior:'smooth'});
})
nn2[6].addEventListener('click',()=>{
    window.scrollTo({top:2700, left:0, behavior:'smooth'});
})
nn2[7].addEventListener('click',()=>{
    window.scrollTo({top:2700, left:0, behavior:'smooth'});
})
nn2[8].addEventListener('click',()=>{
    window.scrollTo({top:2700, left:0, behavior:'smooth'});
})
nn2[9].addEventListener('click',()=>{
    window.scrollTo({top:3000, left:0, behavior:'smooth'});
})
nn2[10].addEventListener('click',()=>{
    window.scrollTo({top:3000, left:0, behavior:'smooth'});
})
nn2[11].addEventListener('click',()=>{
    window.scrollTo({top:3000, left:0, behavior:'smooth'});
})
nn2[12].addEventListener('click',()=>{
    window.scrollTo({top:3300, left:0, behavior:'smooth'});
})
nn2[13].addEventListener('click',()=>{
    window.scrollTo({top:3300, left:0, behavior:'smooth'});
})
nn2[14].addEventListener('click',()=>{
    window.scrollTo({top:3300, left:0, behavior:'smooth'});
})


let bar = document.querySelectorAll('.bar');
let logo =document.querySelector('#logo');
let maintitle =document.querySelector('#maintitle');
logo.addEventListener('click',()=>{
    location.href = 'index.html';
})
maintitle.addEventListener('click',()=>{
    location.href = 'index.html';
})
bar[0].addEventListener('click',()=>{
    location.href = 'index.html';
})

bar[1].addEventListener('click',()=>{
    location.href = 'index2.html';
})
bar[2].addEventListener('click',()=>{
    location.href = 'index3.html';
})
