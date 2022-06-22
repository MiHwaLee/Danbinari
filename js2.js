let header = document.querySelector('header');
let body = document.querySelector('body');
let headbox = document.querySelector('#headbox');
let nav = document.querySelector('#nav');




let box = document.querySelectorAll('.box1_01');
let box1_1 = document.querySelectorAll('.box1_1');
let box1_1img = document.querySelectorAll('.box1_1img');
let box1_1txt2 = document.querySelectorAll('.box1_1txt2');
let box1_1txt3 = document.querySelectorAll('.box1_1txt3');

body.addEventListener('click',()=>{
    box1_1[0].style.display = 'none';
    box1_1[0].style.opacity = '0';
    box1_1[0].style.left = '0px';

    box1_1[1].style.display = 'none';
    box1_1[1].style.opacity = '0';
    box1_1[1].style.left = '0px';

    box1_1[2].style.display = 'none';
    box1_1[2].style.opacity = '0';
    box1_1[2].style.left = '0px';

    box2_1[0].style.display = 'none';
    box2_1[0].style.opacity = '0';
    box2_1[0].style.marginLeft = '0px';

    box3_1[0].style.display = 'none';
    box3_1[0].style.opacity = '0';
    box3_1[0].style.left = '0px';

})
box[0].addEventListener('click',()=>{
    setTimeout(()=>{
        box1_1[0].style.display = 'flex';
        box1_1img[0].src = 'img/kind/kind_2-1.jpg';
        box1_1txt2[0].innerHTML = '가칠단청';
        box1_1txt3[0].innerHTML = '가칠단청은 선이나 무늬 등을 그리지 않고 바탕색만 칠하여 기본인 상태로 마무리하는 단청을 말한다. 가칠 자체가 마무리 칠이 되지만, 긋기, 모로, 금단청의 바탕칠이 될 때도 있다. 사찰의 요사체나 궁과 능의 협문, 일반 주택 등 위계가 낮은 건축물에 사용된다. 하지만 종묘 정전, 서울 문묘 대성전과 명륜당과 같은 위계가 높은 건물에서도 가칠단청이 사용되는 경우도 있다. 이는 엄숙한 제례를 행하는 건물 또는 유교 건축 등에서 의도적으로 가칠단청을 선택해 단아하고 엄숙한 의장을 유도한  것이다. <br> <br> 가칠색은 여러 가지가 쓰이는데, 보통은 뇌록가칠과 석간주 가칠이 주로 많이 쓰이며 백분가칠과 육색가칠, 삼청가칠 등도 쓰인다. 긋기, 모로, 금단청의 문양을 도채하는 창방 이상의 가로 부재에는 바탕칠할 때 뇌록이 쓰이며 기둥 등 수직부재에는 석간주를 도채한다. 연골이나 연개판 등에 백분가칠, 벽화를 그리는 벽면에는 정분가칠을 한다. 한 채의 건물에 주토 등 자홍 계통의 색만 쓰거나 혹은 뇌록 계통의 색만 쓰기도 한다. 백토, 황토, 청토, 토육색, 석간주를 주로 사용하여 오토단청이라고도 한다.';
        box1_1[0].style.left = '-294px'
        setTimeout(()=>{box1_1[0].style.left = '-94px'; box1_1[0].style.opacity = '1';},1);
    },2);
})
box[1].addEventListener('click',()=>{
    setTimeout(()=>{
        box1_1[0].style.display = 'flex';
        box1_1img[0].src = 'img/kind/kind_2-2.jpg';
        box1_1txt2[0].innerHTML = '긋기단청/모로 긋기단청';
        box1_1txt3[0].innerHTML = '긋기란 획의 옛말로 가칠단청을 칠한 위에 좁은 줄을 그어 단청하는 것을 말한다. 주로 사찰의 요사체나 향교와 서원의 부속건물, 궁궐의 회랑 등에 사용된다. 긋기단청은 먹선 분선 또는 각종 색선 등을 가칠 바탕위에 그어 채색할 수도 있다. 그에 따라 먹긋기, 분긋기와 색긋기로 구별된다. 먹긋기는 먹선을, 분긋기는 백분선을, 색긋기는 각종 색선을 말한다. 긋기는 경우에 따라 색을 한 두가지 더 사용하기도 하며 화반, 익공의 초각에는 그 형태에 따라 먹,분선 긋기로 문양을 넣기도 한다. <br> <br>긋기단청이라도 먹긋기나 색긋기만을 쓰지 않고 마무리 면에 예시로는 부연, 서까래, 출목등의 마구리에는 매화점이나 연화문 같은 간단한 문양을 넣을 때도 있다. 이런 것을 모로긋기단청이라고 한다.';
        box1_1[0].style.left = '194px'
        setTimeout(()=>{box1_1[0].style.left = '-94px'; box1_1[0].style.opacity = '1';},1);
    },2);
})
box[2].addEventListener('click',()=>{
    setTimeout(()=>{
        box1_1[1].style.display = 'flex';
        box1_1img[1].src = 'img/kind/kind_2-3.jpg';
        box1_1txt2[1].innerHTML = '모로단청';
        box1_1txt3[1].innerHTML = '모로단청은 가칠단청이나 긋기 단청과 달리 수평부재 양단부에 머리초를 그린 단청이다. 모로단청은 주로 궁궐단청으로 대표적인 단청으로 금단청보다 문양 자체는 단순하지만 강렬하고 웅건한 느낌을 준다. 주로 궁궐에서 사용되긴 하지만 유교건축이나  관아건축에서도 종종 쓰인다. <br><br>고려시대의 기록으로 보아 고려시대의 궁궐은 매우 화려하게 단청이 되었다는 기록이 있다. 그러나 조선은 유교를 국교로 삼았기 때문에 물질보다 정신을 중요하게 생각하는 유교적 이념에 따라 궁궐의 단청은 가장 화려한 금단청양식이 아닌 모로양식으로 행해졌다. <br><br>모로단청은 수평 부재의 양단부에 직휘를 두고, 머리초 문양을 채색하고 휘를 두른다. 중간 계풍에는 뇌록가칠을 하고, 먹분선으로 장획 긋기를 하는 단청이다. 직휘는 먹직휘 또는 색직휘를 하고 머리초는 연화와 주화등을 사용해 비교적 간단한 것으로 쓰며 빛은 2빛으로 도채한다. 머리초 끝부분에 도채하는 휘는 늘휘 또는 인휘로 하고 그 수도 보통 2~4휘 정도로 한다.<br><br>휘의 나비는 금단청보다 넓고 단순하게 한다. 머리초에 비례하여 부리초, 개판초도 간단하게 하며 뱃바닥은 2빛 색긋기 정도로 한다. 머리초와 휘를 합한 길이는 부재의 길이의 약 3분의 1정도로 잡는 것이 보통이나 주재가 대량처럼 길거나 짧을 경우는 머리초와 휘의 수를 가감해 그 길이에 알맞게 한다.';
        box1_1[1].style.left = '-294px'
        setTimeout(()=>{box1_1[1].style.left = '-94px'; box1_1[1].style.opacity = '1';},1);
    },2);
})
box[3].addEventListener('click',()=>{
    setTimeout(()=>{
        box1_1[1].style.display = 'flex';
        box1_1img[1].src = 'img/kind/kind_2-4.jpg';
        box1_1txt2[1].innerHTML = '금모로단청';
        box1_1txt3[1].innerHTML = '금모로단청은 모로단청을 매우 화려하게 한 단청이다. 머리초를 모로단청보다 화려하게 꾸민것은 얼금단청이랑 비슷하지만 계풍에 뇌록가칠만하여 얼금단청과는 약간 다르다. 머리초는 모로단청보다 다소 복잡하게 도안해 금단청과 거의 동등한 수준으로 출초하다.  <br><br> 휘 장식은 대개 인휘로 구성하는데 3~5휘가 보통이다. 경복궁 근정전, 창덕궁 인정전 등을 금모로단청으로 볼 수 있다.<br><br>얼금단청의 조형양식은 최고 등급인 금단청과 모로 단청의 절충형이다. 금모로 단청이랑 비슷하지만 약간 상위 등급으로 분류된다. 원래 ‘얼금’이란 이름은 계풍에 금문이나 당초문을 얼기설기 그려 넣기 때문에 붙여진 것이라는 설이 있다. 따라서 계풍에 뇌록가칠만하는 금모로단청양식과는 약간 차별성을 보인다.  <br><br> 머리초는 모로단청보다 다소 복잡하게 도안해 금단청과 거의 동등한 수준으로 출초한다. 휘 장식은 대개 인휘로 구성하는데 보통 3~5휘정도로 도채한다. 중간 계풍에는 계획된 출초 없이 즉석으로 간단한 당초문을 그리거나 단색계열 2빛의 금문을 넣기도 한다. 포벽에도 출초하지 않고 간단한 당초문을 장식한다.';
        box1_1[1].style.left = '194px'
        setTimeout(()=>{box1_1[1].style.left = '-94px'; box1_1[1].style.opacity = '1';},1);
    },2);
})
box[4].addEventListener('click',()=>{
    setTimeout(()=>{
        box1_1[2].style.display = 'flex';
        box1_1img[2].src = 'img/kind/kind_2-5.jpg';
        box1_1txt2[2].innerHTML = '금단청';
        box1_1txt3[2].innerHTML = '금단청은 최고 장엄양이다. 금단청에 ‘금’은 비단금자인데, 비단에 수를 놓은 듯이 모든 부재에 복잡한 문양과 화려한 채색을 장식하기 때문이다. 또 금단청에는 모든 계풍에 각종 금문이 화려하게 장식되어 금단청이라 불리게 되었다. 이러한 금단청양식은 대웅전, 대웅보전, 극락전, 비로전등 부처님을 모신 사찰의 법당에 주로 사용된다. <br><br> 금단청의 머리초문양은 모로단청보다 화려하고 도채색을 많이 쓴 것이 특징이다. 머리초에는 각종머리초를 사용하는데 병 머리초와 장구머리초, 겹장구머리초 등을 사용하며 번엽을 넣어주어 화려하게 한다. 또한 휘는 늘휘 인휘 바자휘 등을 모두 사용하고 빛은 2빛 3빛으로 하며 휘의수는 4~6개로 모로단청보다 많이 도채한다. <br><br>중간계풍에는 각종금문을 장식하고 중심부에 풍혈 또는 안상을 구획하여 그 안에 용, 봉황, 학, 화조, 산수, 사군자, 비천, 인물등의 별지화를 장식한다. 금단청의 경우 기둥에도 각종 주의초를 그려넣어 화려하게 장엄하고 전면 창호의 궁창에도 귀면문이나 연화문을 그려 넣어 장식한다. 또한 첨차나 소로, 살미 같은 작은 부재에도 각종 문양을 섬세하게 그려준다.  <br><br>포벽에는 각종 부처상, 나한상을 묘사하는데, 이것을 불벽포 라하며 보상화문을 도채한다. 또한 연암과 서까래 등에는 모로단청과 달리 앞목초 뿐 아니라 뒷목초도 그려준다. 문양전체의 황색에는 금박을 이용하여 화려하게 장식한다. 금단청은 섬세하고 화려하며 우아함은 다른 단청이 따를 수가 없으나 모로단청의 강렬한 색감에 비해 나약한 느낌이 든다.';
        box1_1[2].style.left = '-294px'
        setTimeout(()=>{box1_1[2].style.left = '-94px'; box1_1[2].style.opacity = '1';},1);
    },2);
})








let box2_01 = document.querySelectorAll('.box2_01');
let box2_1 = document.querySelectorAll('.box2_1');
let box2_1img = document.querySelectorAll('.box2_1img');
let arttit2 = document.querySelector('#arttit2');
let box2_1txt = document.querySelectorAll('.box2_1txt');


box2_01[0].addEventListener('click',()=>{
    setTimeout(()=>{
        box2_1[0].style.display = 'block';
        box2_1img[0].src = 'img/kind/kind_6-1.jpg';
        arttit2.innerHTML = '궁궐단청';
        box2_1txt[0].innerHTML = '궁궐에는 정전 ·대문 ·펀전·내전·누각 등 다양한 건물이 존재한다. 그 건축물에는 용도와 중요도에 따라 각기 품격에 적합한 양식의 단청을 채색하게 된다.  정전은 국왕이 정사를 보는 가장 상징적이고도 웅장한 건물이다. 경복궁_근정전, 창덕궁_인정전, 창경궁_명정전, 경희궁_숭정전, 덕수궁_중화전이 조선시대 5대궁의 정전들이다. 정전에는 국왕의 위엄과 권위를 상징하는 문양들이 경건하고 엄숙하게 표현되어 있다.주로 정전의 단청양식은 정적이고 웅건한 멋을 느끼게 하는 의장적 특성을 지닌다. 독특하고 권위적인 상징무늬와 색채가 호화로우면서도 은근한 기품을 보여준다.<br><br>궁궐 정전의  외부단청은 금문과 별화를 장식하지 않고, 머리초를 중심으로 채화하는 모로단청 양식으로 장식한다. 따라서 지나친 장식을 지양하고 검약과 질서의 미를 느낄 수 있다. 궁궐 건축 내부는 왕실의 권위적인 상징무늬와 다산과 부귀를 나타내는 문양을 주로 사용하여 귀족적인 의장적 특성을 나타낸다. 장식되는 문양의 종류를 간략히 살펴보면 머리초는 연화, 주화, 모란, 국화등을 모두 사용할 수 있다. 그 상징 의미는 각각 군자, 만사형통, 부귀, 장수이다. 연꽃은 원래 불교에서 연화화생을 의미하는 상징화로 알려져 있다. 하지만 유교에서는 군자를 상징하며, 동시에 많은 아들을 낳기를 기원하는 의미가 담겨져 있기 때문에 궁궐의 단청에서도 즐겨 사용되는 문양이다. 정전 내부의 천장에는 용, 봉황, 학, 모란, 국화 등의 각종 무늬가 장식되는데, 용과 봉황은 왕권을 상징하며, 학은 국화와 마찬가지로 국왕의 무병장수를 의미한다. 왕실의 안위, 권위, 부귀, 장수 등 기복의 의미가 담긴 길상문의 절제된 도상과 수려한 장식성은 사칠의 종교적 장엄에 못지 않은 수려함을 느낄 수 있다.<br><br>조선시대 궁궐의 주요 전각의 단청은 주로 모로 단청으로 장엄되었다. 위계에 따라 위계가 높은 정전의 경우 금모로 단청을 사용하여 장엄하고 위계가 낮은 건물에는 긋기 단청 등을 하여 장식하여 단청만으로 그 위계가 드러나도록 장엄하였다. 조선의 궁궐사찰에 많이 사용되는 금단청이 장엄하지 않는 이유는 조선의 건국이념이자 주류 사상인 유교의 영향으로 물질보다 정신을 중요시한 선비정신을 반영한 것으로 보인다. 또한 조선시대의 단청안료는 대부분 중국에서 수입되어 금, 은과 맞바꿀 정도로 고가였다. 『조선왕조실록』에 단청 관련 기록 중에는 단청을 금하거나, 진채가 부족해 궁궐의 단청 작업이 중단되는 상황을 언급한 내용도 있다. 그러나 궁궐은 사찰처럼 밀도가 높은 단청을 시문하지 않았을 뿐 문양의 구성이나 색상은 매우 독창적이고 화려하며 조형성이 뛰어난 단청을 보인다.';
        box2_1[0].style.marginLeft = '-87px';
        setTimeout(()=>{box2_1[0].style.marginLeft = '0px'; box2_1[0].style.opacity = '1';},1);
    },1);
})
box2_01[1].addEventListener('click',()=>{
    setTimeout(()=>{
        box2_1[0].style.display = 'block';
        box2_1img[0].src = 'img/kind/kind_6-2.jpg';
        arttit2.innerHTML = '사찰단청';
        box2_1txt[0].innerHTML = '사찰의 단청은 오늘날 한국단청의 명맥을 이어오는 중요한 보고이다. 사찰단청은 고대 삼국시대에 처음 한반도에 전래 된 이래에 계속적으로 국교로 채택되어 많은 사찰들이 지어졌다. 통일신라 말에 전래된 선종의 영향으로 이전에 도성에 지어지던 사찰은 점차 산지 사찰로 대체되며 한국의 독자적인 사찰양식이 만들어졌다. 그 후로 고려 때까지 점차 발전하였으나 조선시대에 유교를 국교로 채택하며 억불정책을 통해 사찰을 억압했고 이전의 후원을 받지 못하고 점차 쇠퇴되었다. 그러나 왜란과 호란이후 호국불교의 절실함을 느낀 왕실은 불사재건을 활발히 하며 사찰단청은 이때부터 복원의 길로 접어든다. 또한 17~18c 이후 성장한 많은 부농들의 시주를 통해 화려함이 더욱 가중되어 극도로 화려한 금단청이 이 시기부터 성립된 것으로 추정한다. 현재 남아 있는 대부분의 불교사찰 목조건물은 임진왜란 이후 재건된 것으로, 단청의 유구가 풍부하게 전해지고 있다.<br><br> 사찰의 건물은 대불전(대웅전, 대웅보전, 대적광전, 비로전, 극락전, 무량수전 등), 보살전(원통전, 명부전, 용화전, 미륵전 등) 영산전, 팔상전, 조사전, 판전, 삼성각, 종루, 요사채등으로 매우 다양합니다. 바로 이러한 건물들에 한국 단청의 모든 조형 양식이 장엄되고 있다. <br><br>사찰의 경우 불교의 신전으로 불상을 봉안하고 예배하고 불보살의 거주처인 정토를 가시적으로 형상화한 곳이다. 궁궐단청과 달리 권위를 나타내기 보다는 신앙심을 북돋워주는데 훨씬 비중을 두어야 하여 단청의 문양도 궁궐과는 다르게 나타난다. 사찰은 불교 세계를 현세에 함시하며 부처의 가르침을 도상적으로 나타내고 당시 궁궐에 버금가는 최고의 건축으로서 엄격한 권위성을 표출하고자 하였다. 시대에 따라 도심에도, 산지에도 지어지면서 한국의 자연지세에 어울리게 건물을 배치하고 지붕곡과 건축의장 등을 설정하여 다양한 건축미를  복합적으로 적용하고 내외부 공간의  연출을 달리하여 왔다. <br><br>사찰단청의 의장적 특징으로 가장 궁궐, 서원단청과 구별되는 것은 화려한 금문의 사용과 별화가 사용된다는 점이다. 문양은 불교를 상징하는 이미지를 모두 사용하고 심지어 기둥에 까지 주의초를 그려넣어 화엄장엄의 세계를 구현하고 있다. 색채 또한 매우 원색적이고 표현적이며 대채로운 특성을 띄는 특징을 보이며 밀도 높은 문양을 치장하여 매우 섬세하고 화려하게 장엄하고 있다.팔상전, 조사전, 판전, 삼성각, 종루, 요사채등으로 매우 다양합니다. 바로 이러한 건물들에 한국 단청의 모든 조형 양식이 장엄되고 있다. ';
        box2_1[0].style.marginLeft = '0px';
        setTimeout(()=>{box2_1[0].style.marginLeft = '0px'; box2_1[0].style.opacity = '1';},1);
    },1);
})
box2_01[2].addEventListener('click',()=>{
    setTimeout(()=>{
        box2_1[0].style.display = 'block';
        box2_1img[0].src = 'img/kind/kind_6-3.jpg';
        arttit2.innerHTML = '유교단청';
        box2_1txt[0].innerHTML = '능원은 역대 왕족의 무덤으로 제왕, 후비의 무덤인 ‘능’과 왕세자, 왕세자비 및 왕의 사친의 무덤인 ‘윈’을 함께 일컫는 말이다. 현재 서울 근교에 온전하게 남아 있는 조선시대 능원은 왕릉 40기, 원13기이다. 능원에는 정자각과 비각이 건축물로 조성되어 있으며 그 건축에 단청을 장식하고 있다. 능원단청은 궁궐 양식으로 볼 수 있으나 능원만의 독특한 단청 양식을 확인 할 수 있습니다. 특히 제의식의 공간인 정자각은 우리나라 왕릉건축에서만 조성된 독특한 건축으로 정자각의 단청은 모로단청을 기본으로 장식되어 있습니다. 엄숙한 제의식을 위한 건축에 걸맞게 단아하고 절제된 단청이 특징이다. 간혹 홍릉의 정자각과 같이 규모도 크고 문채도 다채로운 사례도 나타나기도한다. 하지만 대부분의 능원 단청은 제의식의 엄숙함을 우선 고려하여 지나친 장식을 배제하고 사후세계의 기복을 염원하는 간소힌 길상문양만을 상징적으로 채화된 것이 능원단청의 특징이라 할 수 있다.<br><br>조선시대에 오면서 숭유억불 정책으로 인해 불교사찰의 건축은 줄어들고 대신 공자와 그의 제자 그리고 역대 성현들을 모시고 그들의 가르침을 공부하는 향교와 서원이 활발하게 건축된다. 따라서 공자와 역대 성현들의 위패를 모신 제향공간과 이들의 가르침을 학습하는 강학공간으로 구분되는 특징을 지닌다. 물질보다 정신을 중요하게 생각한 유교 건축의 단청 양식은 검소하고 검양하면서도 웅미, 건실한 의장적 특징을 보여준다. 주로 긋기단청으로 고상하게 장식하고 선전의 기품을 나타내기 위해 부분적으로 모로 단청을 첨가해 의례적인 정신을 강조한다. <br><br>한편 유교단청에도 연화 주화 여의두 등으로 조합된 간단한 머리초를 장식하는 경우가 있다. 연꽃은 불교의 절대적 상징화이기도 하지만, 유교에서는 군자를 상징하며 동시에 속세를 떠나 유유자적하게 살아가는 은일지사의 의미 또한 함축한다. 따라서 단순한 연꽃을 머리초의 주 문양으로 이용해 장식하기도한다. 또한 주화문은 만사형통을 의미하며 여의두 무늬는 평안하며 일이 뜻대로 잘 풀리기를 기원하는 의미로 상서로움을 상징한다. <br><br>유교건축의 단청은 검소하면서도 건실한 의장적 특정을 보여준다. 향교의 대성전과 서원의 사당을 중심으로 모로단청과 긋기단청이 주류를 이룬다. 성인과 군자의 기품과 도리를 표방하기 위한 단청장식이 특징으로 의례적인 정제의 미가 돋보인다.';
        box2_1[0].style.marginLeft = '87px';
        setTimeout(()=>{box2_1[0].style.marginLeft = '0px'; box2_1[0].style.opacity = '1';},1);
    },1);
})


let box3_01 = document.querySelectorAll('.box3_01');
let box3_1 = document.querySelectorAll('.box3_1');
let box3_1img = document.querySelectorAll('.box3_1img');
let box3_1txt2 = document.querySelectorAll('.box3_1txt2');
let box3_1txt3 = document.querySelectorAll('.box3_1txt3');

box3_01[0].addEventListener('click',()=>{
    setTimeout(()=>{
        box3_1[0].style.display = 'flex';
        box3_1img[0].src = 'img/kind/kind_5-1.jpg';
        box3_1txt2[0].innerHTML = '중국 단청';
        box3_1txt3[0].innerHTML = '중국단청의 문양장식수법은 크게 두 종류로 구분된다. 그 하나는 청대부터 크게 유향하기 시작한 궁궐단청양식이며, 두 번째는 소주지역을 중심으로 발달하기 시작한 소식단청이다. 중국의 궁궐단청은 청록바탕에 도드라진 문양을 금색으로 채색하는 수법이 주를 이루어 시각적으로 매우 화려함을 보여주지만, 색상대비의 효과가 감소되어 단조로운 느낌을 자아낸다. 또한 소식단청은 패턴문양을 줄이고 각종의 산수화, 화조화, 고사인물도 등을 그려 넣는 수법으로 전통적으로 회화적 경향이 강한 특성을 보여준다.<br><br>중국 단청은 청록바탕에 도드라진 문양을 금색으로 채색해 화려한 이미지가 강하다. 비단무늬도 한국의 경우처럼 상서로운 의미가 가미되어 다양한 조형양식으로 발달하지 못하고 다만 북송 떄에 완성되었던 송금문이 그 명맥을 유지할 정도의 일부가 전해지고 있을 따름이다.<br><br>이밖에도 우리의 머리초와 같은 유형의 선자머리초와 금문이 사찰을 중심으로 전해지고 있다. 머리초의 경우 중국에서는 송대 이후 명나라 초기까지 이어진 전통양식이 단절되고 청나라 이후부터 사용하기 시작한 선자머리초가 오늘에까지 이어진 것이다.';
        box3_1[0].style.left = '-100px';
        setTimeout(()=>{box3_1[0].style.left = '0px'; box3_1[0].style.opacity = '1';},1);
    },1)
})
box3_01[1].addEventListener('click',()=>{
    setTimeout(()=>{
        box3_1[0].style.display = 'flex';
        box3_1img[0].src = 'img/kind/kind_5-2.jpg';
        box3_1txt2[0].innerHTML = '일본 단청';
        box3_1txt3[0].innerHTML = '일본의 건축단청은 오늘날 남아있는 전통목조건축의 규모나 숫자 면에서 가장 풍부함에도 불구하고 한국 중국에 비하여 매우 빈약한 양상을 나타낸다. 이것은 일본의 건축단청이 한국과 중국의 영향을 받았음에도 불구하고 크게 유행되거나 일반화되지 않았음을 보여주는 것이다.<br><br>오늘날 드물게 전해지는 일본단청의 문양장식수법은 별화나 벽화 등의 회화적 요소가지극히 미약하고 금문과 같은 디자인적 패턴문양이 주류를 이루고 있다. 색조 또한 강렬한 보색대비를 지양하고 지나치게 단순한 색상대비를 사용하여 부드러움은 강조되었지만 전반적으로 미양한 분위기가 두드러진다. <br><br>일본단청의 특색은 한국과 중국의 다양한 문양장식과 강렬한 색조대비와는 달리 차분한 분위기를 보여주는 남방계통의 조형적 특성을 보여주고 있다. 또한 한국과 중국단청과는 다르게 머리초를 전혀 사용하지 않고, 단순히 반복되는 무늬로 장식하는 방법을 사용한다. 색조 또한 강렬한 보색대비를 지양하고 지나치게 단순한 색상대비를 사용하여 부드러움은 강조한다.';
        box3_1[0].style.left = '100px';
        setTimeout(()=>{box3_1[0].style.left = '0px'; box3_1[0].style.opacity = '1';},1);
    },1)
})




let nn1 = document.querySelectorAll('.nn1');
let nn2 = document.querySelectorAll('.nn2');

body.addEventListener('click',()=>{
    console.log(window.pageYOffset);
})

nn1[0].addEventListener('click',()=>{
    window.scrollTo({top:100, left:0, behavior:'smooth'});
})
nn1[1].addEventListener('click',()=>{
    window.scrollTo({top:1600, left:0, behavior:'smooth'});
})
nn1[2].addEventListener('click',()=>{
    window.scrollTo({top:2300, left:0, behavior:'smooth'});
})

nn2[0].addEventListener('click',()=>{
    window.scrollTo({top:200, left:0, behavior:'smooth'});
})
nn2[1].addEventListener('click',()=>{
    window.scrollTo({top:200, left:0, behavior:'smooth'});
})
nn2[2].addEventListener('click',()=>{
    window.scrollTo({top:600, left:0, behavior:'smooth'});
})
nn2[3].addEventListener('click',()=>{
    window.scrollTo({top:600, left:0, behavior:'smooth'});
})
nn2[4].addEventListener('click',()=>{
    window.scrollTo({top:800, left:0, behavior:'smooth'});
})
nn2[5].addEventListener('click',()=>{
    window.scrollTo({top:1800, left:0, behavior:'smooth'});
})
nn2[6].addEventListener('click',()=>{
    window.scrollTo({top:1800, left:0, behavior:'smooth'});
})
nn2[7].addEventListener('click',()=>{
    window.scrollTo({top:1800, left:0, behavior:'smooth'});
})
nn2[8].addEventListener('click',()=>{
    window.scrollTo({top:2300, left:0, behavior:'smooth'});
})
nn2[9].addEventListener('click',()=>{
    window.scrollTo({top:2300, left:0, behavior:'smooth'});
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
    console.log('hello');
    location.href = 'index.html';
})
bar[1].addEventListener('click',()=>{
    location.href = 'index2.html';
})
bar[2].addEventListener('click',()=>{
    location.href = 'index3.html';
})
