const searchEl = document.querySelector('.search');
const searchInput = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
    searchInput.focus();
});

searchInput.addEventListener('focus', () => {
    searchEl.classList.add('focused');
    searchInput.setAttribute('placeholder', '통합검색');
});

searchInput.addEventListener('blur', () => {
    searchEl.classList.remove('focused');
    searchInput.removeAttribute('placeholder');
})

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(() => {
    // console.log(window.scrollY);
    if (window.scrollY > 500) {
        // 배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: 'none',
        });
    } else {
        // 배지 보이기
        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: 'block',
        });
    }
}, 300));

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, index) => {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 0.7, 1.4, 2.1...
        opacity: 1,
    });
});

new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
});

new Swiper('.promotion .swiper', {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 간격(px 단위)
    centeredSlides: true, // 가운데 슬라이드를 먼저 보여줄 것인지
    loop: true,
    // autoplay: {
    //     delay: 500,
    // }
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true,
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});