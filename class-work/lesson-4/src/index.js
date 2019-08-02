import Vue from "vue";
import App from "./components/App.vue"

const app = new Vue ({
    el: '#app',
    // указываем, что для отрисовки основного компонента необходимо выполнять render-функцию
    // в аргумент h попадает функция для создания vDOM элементов, мы ее вызываем, передавая загруженный ранее
    // компонент App.
    render: h => h(App)
});
