new Vue({
    el: "#app",
    data (){
        return {
            currentIndex: 0,
            imgList: [
                {
                    id: 1,
                    title: 'apple',
                    path: 'images/apple.jpg'},
                {
                    id: 2,
                    title: 'orange',
                    path: 'images/orange.jpg'},
                {
                    id: 3,
                    title: 'lemon',
                    path: 'images/lemon.jpg'},
            ]
        }
    },
    methods: {
        change: function (index) {
            this.currentIndex = index;
        }
    }
})