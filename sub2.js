
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


        $(window).scroll(function () {
            var height = $(window).scrollTop();
            var windowHeight1 = $('.about2').height();
            if ((height >= 0) && (height < 300)) {
                $('.about1 a:nth-child(1)').addClass('bold');
            } else {
                $('.about1 a:nth-child(1)').removeClass('bold');
            }
            if ((height >= 500) && (height < 1250)) {
                $('.about1 a:nth-child(2)').addClass('bold');
            } else {
                $('.about1 a:nth-child(2)').removeClass('bold');
            }

            if ((height >= 1251) && (height < 1750)) {
                $('.about1 a:nth-child(3)').addClass('bold');
            } else {
                $('.about1 a:nth-child(3)').removeClass('bold');
            }
            if ((height >= 1751) && (height < 3000)) {
                $('.about1 a:nth-child(4)').addClass('bold');
            } else {
                $('.about1 a:nth-child(4)').removeClass('bold');
            }
            console.log(height);
        });

        AOS.init({
            duration: 1200 //aos 나타나는 속도
        });

        window.addEventListener('scroll', function() {
            var header = document.querySelector('header');
            if (window.scrollY > 50) { // 스크롤 위치가 50px 이상일 때
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });