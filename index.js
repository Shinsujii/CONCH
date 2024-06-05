$(function () {
    // 슬라이드
    var swiper = new Swiper('.slide ', {
        speed: 2000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 3000,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        effect: "fade",
        loop: true,//슬라이드 무한반복
        // navigation: {//화살표 버튼
        //     nextEl: '.slide .swiper-button-next',
        //     prevEl: '.slide .swiper-button-prev',
        // },
    });
});

// 마우스
const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);

function getAngle(diffX, diffY) {
    return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
    const distance = Math.sqrt(
        Math.pow(diffX, 2) + Math.pow(diffY, 2)
    );
    const maxSqueeze = 0.15;
    const accelerator = 1500;
    return Math.min(distance / accelerator, maxSqueeze);
}

const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const angle = getAngle(diffX, diffY);
    const squeeze = getSqueeze(diffX, diffY);

    const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) + ')';
    const rotate = 'rotate(' + angle + 'deg)';
    const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

    cursor.style.transform = translate;
    cursorCircle.style.transform = rotate + scale;
};

function loop() {
    updateCursor();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

const cursorModifiers = document.querySelectorAll('a');

cursorModifiers.forEach(curosrModifier => {
    curosrModifier.addEventListener('mouseenter', function () {
        cursor.classList.add('mousehover');
    });

    curosrModifier.addEventListener('mouseleave', function () {
        cursor.classList.remove('mousehover');
    });
});

// 탑버튼
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});

$('.top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
});

AOS.init({
    duration: 1200 //aos 나타나는 속도
});
