"use strict";

const courses = [
    {
        code: "HTML",
        title: "Курс по вёрстке сайтов и веб-разработке",
        prices: {
            maximum: 36900,
            medium: 19900,
            minimum: 16900
        }
    },

    {
        code: "JS",
        title: "Курс по JavaScript",
        prices: {
            maximum: 36900,
            medium: 19900,
            minimum: 16900
        }
    },

    {
        code: "PHP",
        title: "Курс по PHP (уровень 1)",
        prices: {
            maximum: 18900,
            medium: 12900,
            minimum: 9900
        }
    },

    {
        code: "PHP2",
        title: "Курс по PHP (уровень 2)",
        prices: {
            maximum: 36900,
            medium: 24900,
            minimum: 19900
        }
    },

    {
        code: "PS",
        title: "Курс по Adobe Photoshop",
        prices: {
            maximum: 12900,
            medium: 7900,
            minimum: 5900
        }
    },
];

const coupons = {
    "LETO": 0.8,
    "STUDENT": 0.95
};

window.addEventListener('load', function(){

    const app = new Vue({
        el: '#discounts',

        data: {
            courses,
            selectedCourses: []
        },

        methods: {

            chooseCourse(course, tax){

                let inList = false;

                // Переформирование массива с выбранными курсами:
                // возвращаем только те курсы, которые не совпадают
                // с вновь выбранным по коду
                this.selectedCourses = this.selectedCourses.filter(item => {

                    if (item.course.code === course.code && item.tax === tax) {
                        inList = true;
                    }
                    return item.course.code !== course.code;
                });

                // Добавляем вновь выбранный курс только,
                // если не было полного совпадения (включая тип цены)
                if (!inList) {

                    this.selectedCourses.push({
                        course,
                        tax,
                        price: course.prices[tax],
                        discountPrice: course.prices[tax]
                    });
                }
            },

            getSelectedClass(course, tax) {
                let inList = this.selectedCourses.some(item => item.course.code === course.code && item.tax === tax);

                return {
                    'bg-success text-white': inList
                }
            }
        }
    });
});
