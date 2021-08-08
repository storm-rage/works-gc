var app = new Vue({
    el: "#app",
    data (){
        return {
            msg: "123",
            testnum: "11",
            uTitle: "用户名",
            uName: "",
            tip: ""
        }
    },
    
    methods: {
        /* 
            侦听器
            1、采用侦听器监听用户名的变化
            2、调用后台接口进行验证
            3、根据验证的结果调整提示信息
        */
        checked: function(uName) {
            //调用接口，但是可以使用定时任务的方式模拟接口调用
            var that = this;
            setTimeout(function() {
                if(uName == 'admin') {
                    that.tip = '用户名已经存在，请跟换一个';
                }else if(uName == ''){
                    that.tip = '请输入用户名';
                }else {
                    that.tip = '用户名可以使用';
                }
            },2000);
        }
    },
    watch: {
        uName: function(val) {
            //调用后台接口验证用户名的合法性
            this.checked(val);
            //修改提示信息
            this.tip = '正在验证···';
        }
    }
})