window.addEventListener("load", function() {

    Vue.component('alert', {

        template: '#alert-template',

        props: ['type', 'text'],

        computed: {

            alertClass(){
                return {
                    'alert-success': this.type === 'success',
                    'alert-info': this.type === 'info',
                    'alert-danger': this.type === 'danger'
                }
            }
        }

    });

    new Vue({
        el: "#app",

        components: {
            datepicker: vuejsDatepicker,
            tinymce: Editor
        },

        data: {
            posts: [],
            formIsVisible: false,
            authorName: "",
            publishDate: "",
            postContent: "",
            formHasError: false,
            validationError: ""
        },

        methods: {

            toggleFormVisibility() {
                this.formIsVisible = !this.formIsVisible;
                this.authorName = "",
                this.publishDate = "",
                this.postContent = ""
            },

            addPost() {

                if (this.validateForm()) {
                    this.posts.push({
                        author: this.authorName,
                        date: this.publishDate,
                        content: this.postContent
                    });

                    this.formIsVisible = false;
                    this.formHasError = false;
                    this.validationError = '';
                } else {
                    this.formHasError = true;
                    this.validationError = 'Все поля обязательны для заполнения!';
                }
            },

            validateForm () {
                return this.authorName && this.publishDate && this.postContent;
            }
        },

        computed: {

            buttonCaption() {

                if (this.formIsVisible) {
                    return "Скрыть форму";
                }

                return "Добавить публикацию";
            },

            buttonClass(){
                // if(this.formIsVisible) {
                //     return {"btn-secondary": true};
                // }
                //
                // return {"btn-primary": true};

                return {
                    "btn-secondary": this.formIsVisible,
                    "btn-primary": !this.formIsVisible
                };
            }
        }

    })
});
