//过滤器应该先执行，写在上面，再绑定vue实例
/*
Vue.filter('upper',function(val){
    return val.charAt(0).toUpperCase() + val.slice(1);
});
Vue.filter('lower',function(val){
    return val.charAt(0).toLowerCase() + val.slice(1);
});
*/
//格式化日期
//value对应date， arg对应yyyy-MM-dd
Vue.filter('format',function(value, arg) {
    if(arg == 'yyyy-MM-dd') {
        var ret = '';
        ret += value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate();
        var ret1 = '';
        ret1 += ' ' + value.getHours() + ':' + value.getMinutes() + ':' + value.getSeconds();
        return ret+ret1;
    }
    return value;
});
var vm = new Vue({
    el: "#app",
    data (){
        return {
            msg: 0,
            date: new Date()
            
        }
    }
    
})

// Vue.filter('format',function(value, arg){
//     return val.charAt(0).toLowerCase() + val.slice(1);
//     if(arg == 'yyyy-MM-dd') {
//         var set = '';
//         ret += value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate();
//         return ret;
//     }
// });
