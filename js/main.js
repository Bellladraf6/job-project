$(document).ready(function () {
    const slider = $('.slider');

    slider.slick({
        arrows: false,
        dots: true,
        customPaging: function () {
            return '';
        },
        accessibility: true,
        adaptiveHeight: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        initialSlide: 0,
    });

    // Создаем обертку для кнопок и точек пагинации
    const controlsWrapper = $('<div class="slider-controls-wrapper"></div>');

    // Создаем контейнер для кнопок
    const controlsContainer = $('<div class="slider-controls"></div>');

    // Создаем кнопку "Предыдущий"
    const prevButton = $('<a class="prev-slide">Предыдущий</a>');

    // Создаем кнопку "Следующий"
    const nextButton = $('<a class="next-slide">Следующий</a>');

    // Добавляем кнопки в контейнер
    controlsContainer.append(prevButton).append(nextButton);

    // Получаем ссылку на точки пагинации
    const dots = $('.slick-dots');

    // Перемещаем контейнер с кнопками перед точками пагинации
    controlsWrapper.append(controlsContainer);
    controlsWrapper.append(dots);

    // Перемещаем обертку с кнопками и точками пагинации перед слайдами
    $('.slick-list.draggable').before(controlsWrapper);

    // Назначаем обработчики событий для кнопок
    $('.prev-slide').click(function () {
        slider.slick('slickPrev');
    });

    $('.next-slide').click(function () {
        slider.slick('slickNext');
    });
});
