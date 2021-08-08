var app = new Vue({
    el: "#app",
    data (){
        return {
            uname: 0,
            gender: 1,
            hobby: ['2','3'],
            occupation: 2,
            // occupation: ['2','3'],
        }
    },
    computed: {
        //reverseMsg数据绑定
        reverseMsg: function() {
            return this.gender;
        }
    },
    methods: {
        handle: function () {
            // console.log(this.uname);
            // console.log(this.gender);
            // console.log(this.hobby.toString());
            console.log(this.occupation);
            // return this.gender;
            
        }
    }
})