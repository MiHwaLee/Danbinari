let header = document.querySelector('header');
let body = document.querySelector('body');
let headbox = document.querySelector('#headbox');
let nav = document.querySelector('#nav');


let scene = 2;

headbox.addEventListener('mouseover', ()=>{
    scene = 0;
    headerFn();
})
headbox.addEventListener('mouseout',()=>{
    scene = 2;
    headerFn();
})
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset<100){
        scene = 2;
        headerFn();
        headbox.addEventListener('mouseover', ()=>{
            scene = 0;
            headerFn();
        })
        headbox.addEventListener('mouseout',()=>{
            scene = 2;
            headerFn();
        })
    }
    else if(window.pageYOffset>100){
        scene = 1;
        headerFn();
        headbox.addEventListener('mouseover', ()=>{
            scene = 0;
            headerFn();
        })
        header.addEventListener('mouseout',()=>{
            if(window.pageYOffset<100){
                scene = 2;
                headerFn();
            }
            else{            
                scene = 1;
                headerFn();}
        })
    }
})

function headerFn(){
    switch(scene){
        case 0:
            header.style.top = '0px';
            nav.style.top = '75px';
        break;
        case 1:
            header.style.top = '-75px';
            nav.style.top = '-120px';
        break;
        case 2:
            header.style.top = '0px';
            nav.style.top = '-120px';
        break;
    }
}


let box3 = document.querySelectorAll('.box3');
let box3_1 = document.querySelectorAll('.box3_1');

body.addEventListener('click',()=>{
    console.log(window.pageYOffset);
})

box3[0].addEventListener('click',()=>{
    window.scrollTo({top:2500, left:0, behavior:'smooth'});
})
box3[1].addEventListener('click',()=>{
    window.scrollTo({top:2800, left:0, behavior:'smooth'});
})
box3[2].addEventListener('click',()=>{
    window.scrollTo({top:3200, left:0, behavior:'smooth'});
})
box3[3].addEventListener('click',()=>{
    window.scrollTo({top:3600, left:0, behavior:'smooth'});
})
box3[4].addEventListener('click',()=>{
    window.scrollTo({top:3900, left:0, behavior:'smooth'});
})

box3_1[0].addEventListener('click',()=>{
    window.scrollTo({top:2100, left:0, behavior:'smooth'});
})
box3_1[1].addEventListener('click',()=>{
    window.scrollTo({top:2100, left:0, behavior:'smooth'});
})
box3_1[2].addEventListener('click',()=>{
    window.scrollTo({top:2100, left:0, behavior:'smooth'});
})
box3_1[3].addEventListener('click',()=>{
    window.scrollTo({top:2100, left:0, behavior:'smooth'});
})
box3_1[4].addEventListener('click',()=>{
    window.scrollTo({top:2100, left:0, behavior:'smooth'});
})


let box4 = document.querySelectorAll('.box4');
let box4_1 = document.querySelectorAll('.box4_1');
let box4_1txt1 = document.querySelectorAll('.box4_1txt1');
let box4_1txt2 = document.querySelectorAll('.box4_1txt2');
let box4_1img = document.querySelectorAll('.box4_1img');

body.addEventListener('click',()=>{
    box4_1[0].style.display = 'none';
    box4_1[0].style.opacity = '0';
    box4_1[1].style.display = 'none';
    box4_1[1].style.opacity = '0';
    box4_1[2].style.display = 'none';
    box4_1[2].style.opacity = '0';
})
box4[0].addEventListener('click',()=>{
    setTimeout(()=>{
        box4_1[0].style.display = 'flex';
        box4_1[0].style.left = '0px';
        box4_1img[0].src = 'img/form/form_7-1.jpg';
        box4_1txt1[0].innerHTML = '파련';
        box4_1txt2[0].innerHTML = '파련은 꽃잎 끝이 버선본 모양으로 변형된 것과 오그라든 상태의 오금곡선으로 된 것이 있다. 불로초를 닮은 모양과 미묘한 율동감을 가진 파련은 길상 상징 문양으로 궁실 전각에 널리 쓰였다. ';
        setTimeout(()=>{box4_1[0].style.left = '186px';box4_1[0].style.opacity = '1';},2)
    },1)
})
box4[1].addEventListener('click',()=>{
    setTimeout(()=>{
        box4_1[0].style.display = 'flex';
        box4_1[0].style.left = '186px';
        box4_1img[0].src = 'img/form/form_7-2.jpg';
        box4_1txt1[0].innerHTML = '웅련';
        box4_1txt2[0].innerHTML = '웅련은 연꽃잎이 오므라들거나 방긋 벌어지는 상태를, 위에서 내려다본 모습을 묘사한 것이다. 이 매력적인 연꽃 문양은 형태가 미묘하고 색채도 다양해서 건물을 웅위롭게 장엄하는 데 많이 쓰이고 있다.';
        setTimeout(()=>{box4_1[0].style.left = '186px';box4_1[0].style.opacity = '1';},2)
    },1)
})
box4[2].addEventListener('click',()=>{
    setTimeout(()=>{
        box4_1[0].style.display = 'flex';
        box4_1[0].style.left = '372px';
        box4_1img[0].src = 'img/form/form_7-3.jpg';
        box4_1txt1[0].innerHTML = '보상화문';
        box4_1txt2[0].innerHTML = '연꽃 봉오리 문양에도 평면형과 입체형이 있다. 연꽃 문양의 보조 문양으로 사용된다. 그리고 보상화문이라는 것이 있는데, 이것은 권초문을 주제로 한 가상적인 꽃으로, 매우 복잡하고 화려한 것이 특징이다.';
        setTimeout(()=>{box4_1[0].style.left = '186px';box4_1[0].style.opacity = '1';},2)
    },1)
})
box4[3].addEventListener('click',()=>{
    setTimeout(()=>{
        box4_1[1].style.display = 'flex';
        box4_1[1].style.left = '0px';
        box4_1img[1].src = 'img/form/form_7-4.jpg';
        box4_1txt1[1].innerHTML = '녹화';
        box4_1txt2[1].innerHTML = '연꽃 다음으로 많이 볼 수 있는 것이 녹화이다. 소용돌이(곱팽이) 2개가 등을 맞대고 있는 사이에 반원 모양의 딱지가 붙어 있는 모양이다.';
        setTimeout(()=>{box4_1[1].style.left = '186px';box4_1[1].style.opacity = '1';},2)
    },1)
})
box4[4].addEventListener('click',()=>{
    setTimeout(()=>{
        box4_1[1].style.display = 'flex';
        box4_1[1].style.left = '186px';
        box4_1img[1].src = 'img/form/form_7-5.jpg';
        box4_1txt1[1].innerHTML = '쇠코화';
        box4_1txt2[1].innerHTML = '쇠코화는 좌우에 감긴 곱팽이가 있고 중간이 볼록하게 된 녹화형의 꽃 문양으로, 단독 또는 여럿이 문양을 이루기도 한다. 모양이 소의 코를 닮았다고 해서 생긴 이름이다.';
        setTimeout(()=>{box4_1[1].style.left = '186px';box4_1[1].style.opacity = '1';},2)
    },1)
})
box4[5].addEventListener('click',()=>{
    setTimeout(()=>{
        box4_1[1].style.display = 'flex';
        box4_1[1].style.left = '372px';
        box4_1img[1].src = 'img/form/form_7-6.jpg';
        box4_1txt1[1].innerHTML = '주화';
        box4_1txt2[1].innerHTML = '주화는 4개의 꽃잎을 가지고 있고, 꽃 주변에 둥그스름한 오금이 있는 꽃이다. 주로 붉은색 계통으로 칠해지기 때문에 생긴 이름이지만 청색, 또는 녹색으로 채색되기도 한다. 홑과 겹의 두 종류가 있다.';
        setTimeout(()=>{box4_1[1].style.left = '186px';box4_1[1].style.opacity = '1';},2)
    },1)
})
box4[6].addEventListener('click',()=>{
    setTimeout(()=>{
        box4_1[2].style.display = 'flex';
        box4_1[2].style.left = '0px';
        box4_1img[2].src = 'img/form/form_7-7.jpg';
        box4_1txt1[2].innerHTML = '매화점';
        box4_1txt2[2].innerHTML = '매화점은 먹 바탕에 5~8개의 흰 점을 찍어 놓은 모양이다.';
        setTimeout(()=>{box4_1[2].style.left = '186px';box4_1[2].style.opacity = '1';},2)
    },1)
})
box4[7].addEventListener('click',()=>{
    setTimeout(()=>{
        box4_1[2].style.display = 'flex';
        box4_1[2].style.left = '186px';
        box4_1img[2].src = 'img/form/form_7-8.jpg';
        box4_1txt1[2].innerHTML = '태평화';
        box4_1txt2[2].innerHTML = '태평화는 먹 또는 뇌록색 가칠 바탕에 분 또는 단색으로 태평을 상징하여 그린 문양이다.';
        setTimeout(()=>{box4_1[2].style.left = '186px';box4_1[2].style.opacity = '1';},2)
    },1)
})


let art5txt = document.querySelector('#art5txt');
let art2txtbox = document.querySelector('#art2txtbox');

let scene5 = 0;
let scene2 = 0;



let nn1 = document.querySelectorAll('.nn1');
let nn2 = document.querySelectorAll('.nn2');

body.addEventListener('click',()=>{
    console.log(window.pageYOffset);
})

nn1[0].addEventListener('click',()=>{
    window.scrollTo({top:100, left:0, behavior:'smooth'});
})
nn1[1].addEventListener('click',()=>{
    window.scrollTo({top:2100, left:0, behavior:'smooth'});
})
nn1[2].addEventListener('click',()=>{
    window.scrollTo({top:4500, left:0, behavior:'smooth'});
})
nn1[3].addEventListener('click',()=>{
    window.scrollTo({top:6100, left:0, behavior:'smooth'});
})

nn2[0].addEventListener('click',()=>{
    window.scrollTo({top:2550, left:0, behavior:'smooth'});
})
nn2[1].addEventListener('click',()=>{
    window.scrollTo({top:2550, left:0, behavior:'smooth'});
})
nn2[2].addEventListener('click',()=>{
    window.scrollTo({top:2900, left:0, behavior:'smooth'});
})
nn2[3].addEventListener('click',()=>{
    window.scrollTo({top:3300, left:0, behavior:'smooth'});
})
nn2[4].addEventListener('click',()=>{
    window.scrollTo({top:3600, left:0, behavior:'smooth'});
})
nn2[5].addEventListener('click',()=>{
    window.scrollTo({top:4000, left:0, behavior:'smooth'});
})
nn2[6].addEventListener('click',()=>{
    window.scrollTo({top:4000, left:0, behavior:'smooth'});
})
nn2[7].addEventListener('click',()=>{
    window.scrollTo({top:4800, left:0, behavior:'smooth'});
})
nn2[8].addEventListener('click',()=>{
    window.scrollTo({top:4800, left:0, behavior:'smooth'});
})
nn2[9].addEventListener('click',()=>{
    window.scrollTo({top:4800, left:0, behavior:'smooth'});
})
nn2[10].addEventListener('click',()=>{
    window.scrollTo({top:5200, left:0, behavior:'smooth'});
})
nn2[11].addEventListener('click',()=>{
    window.scrollTo({top:5200, left:0, behavior:'smooth'});
})
nn2[12].addEventListener('click',()=>{
    window.scrollTo({top:5200, left:0, behavior:'smooth'});
})
nn2[13].addEventListener('click',()=>{
    window.scrollTo({top:5500, left:0, behavior:'smooth'});
})
nn2[14].addEventListener('click',()=>{
    window.scrollTo({top:5500, left:0, behavior:'smooth'});
})


let bar = document.querySelectorAll('.bar');
let ulbox = document.querySelectorAll('.ulbox');

bar[0].addEventListener('click',()=>{
    console.log('hello');
    location.href = 'index.html';
})
bar[1].addEventListener('click',()=>{
    location.href = 'index2.html';
})
bar[2].addEventListener('click',()=>{
    location.href = 'index3.html';
})