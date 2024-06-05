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

        const video = document.querySelector('video');

        // 비디오 한번 누르면 정지
        video.addEventListener('click', function () {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });

        const videotop = document.querySelector('.videotop');
        const videotop1 = document.querySelector('.videotop1');

        videotop.addEventListener('mouseenter', () => {
            videotop1.style.opacity = '1';
            videotop1.style.visibility = 'visible';
        });

        videotop.addEventListener('mouseleave', () => {
            videotop1.style.opacity = '0';
            videotop1.style.visibility = 'hidden';
        });
        // 박스 올라감
        AOS.init({
            duration: 1200 //aos 나타나는 속도
        });

        document.addEventListener('DOMContentLoaded', () => {
            const items = document.querySelectorAll('.briefmid1, .briefmid2');

            items.forEach(item => {
                item.addEventListener('click', () => {
                    items.forEach(i => i.classList.remove('active'));
                    item.classList.add('active');
                });
            });
        });
        // 클릭시 이동
        document.addEventListener('DOMContentLoaded', () => {
            const newBtn = document.getElementById('newBtn');
            const followingBtn = document.getElementById('followingBtn');
            const briefdiv1 = document.querySelector('.briefdiv1');
            const briefdiv2 = document.querySelector('.briefdiv2');

            newBtn.addEventListener('click', (event) => {
                event.preventDefault();
                briefdiv1.classList.add('active');
                briefdiv2.classList.remove('active');
            });

            followingBtn.addEventListener('click', (event) => {
                event.preventDefault();
                briefdiv1.classList.remove('active');
                briefdiv2.classList.add('active');
            });
        });

        document.addEventListener("DOMContentLoaded", function () {
            document.getElementById("newBtn").classList.add("hover");
        });

        // 슬라이드
        $(function () {
            var swiper = new Swiper('.flowslide_inner ', {
                slidesPerView: 3,//보여지는 갤러리 수
                spaceBetween: 60,//갤러리 사이 간격
                speed: 4000,//버튼을 슬라이드가 넘어가는 시간
                autoplay: {
                    delay: 0,//자동으로 넘어가기 전 머무르는 시간
                    disableOnInteraction: false,
                },
                loop: true,//슬라이드 무한반복
            });

            $('.flowslide .swiper-slide').on('mouseover', function () {
                swiper.autoplay.stop();
            });
            $('.flowslide .swiper-slide').on('mouseout', function () {
                swiper.autoplay.start();
            });
        });