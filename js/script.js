// JavaScript functionality goes here
let lastScrollTop = 0;
        const navbar = document.getElementById('mainNavbar');
        window.addEventListener('scroll', function() {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop){
                navbar.style.top = '-80px'; // hide
            } else {
                navbar.style.top = '0'; // show
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }, false);

// Smooth scrolling for anchor links
 document.addEventListener('DOMContentLoaded', function () {
        new Swiper('.mySwiper', {
            slidesPerView: 3,
            spaceBetween: 32,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                }
            }
        });
    });

     // Bootstrap validation
            (function () {
                'use strict';
                var forms = document.querySelectorAll('.needs-validation');
                Array.prototype.slice.call(forms).forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            })();

 document.addEventListener('DOMContentLoaded', function () {
            new Swiper('.testimonialSwiper', {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: true,
                loop: true,
                autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                },
                pagination: {
                el: '.testimonialSwiper .swiper-pagination',
                clickable: true,
                },
                breakpoints: {
                768: {
                    slidesPerView: 1.3,
                    spaceBetween: 0,
                },
                992: {
                    slidesPerView: 1.5,
                    spaceBetween: 0,
                }
                }
            });
            });