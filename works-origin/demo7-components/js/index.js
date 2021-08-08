//全剧组件，可在所有地方使用
Vue.component('test-com',{
    data: function(){
        return {
            msg: 'test123'
        }
    },
    template: '<div>{{msg}}</div>'
})

//局部组件的注册
//局部组件只能在注册它的父组件中使用
//data是一个函数会形成一个闭包的环境，可以保证每个组件都有一份独立的数据
var helloJerry = {
    data: function(){
        return  {
            msg: 'helloJerry'
        }
    },
    template: '<div>{{msg}}</div>'
};
var helloTom = {
    data: function(){
        return  {
            msg: 'helloTom'
        }
    },
    template: '<div>{{msg}}<test-com></test-com></div>'
};
var hello = {
    data: function(){
        return  {
            msg: 'hello'
        }
    },
    template: '<div>{{msg}}</div>'
};

var vm = new Vue({
    el: "#app",
    data: function(){
        return {
            
        }
    },
    methods: {
        //转化为年月日
    },
    //components可以注册一系列局部组件
    components: {
        'hello-jerry': helloJerry,
        'hello-tom': helloTom,
        'hello': hello
    }
});
