var app = new Vue({
    el: "#app",
    data (){
        return {
            msg: 123,
            change: "changeMsg",
            rest: "rest",
            taskListName: "-任务清单-",
            ifclass: 1,
            isShow: true,
            currentdate: '当前时间是：'+ new Date().toLocaleString(),
            showDataType: 'showDataType',
            changeDataInfo: '',
            task: [
                "vue文档通读",
                "看完vue基础教程视频",
                "vue项目制作",
                "搞清楚前端开发的环节与步骤",
                "巩固js开发知识点：数据类型，几种转换方式的差别，内存垃圾回收机制，堆栈等"
            ]
        }
    },
    // computed: {
    // },
    
    mounted: function(){
        //console.log(this.currentdate);
    },
    methods: {
        changeType() {
            var dataType = typeof(this.msg);
            console.log(dataType);
        },
        changeMsg() {
            // this.msg =  this.rest;
        },
        //转化为年月日
        getNowFormatDate() {
            var date = new Date();
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
            console.log(currentdate);//打印当前年月日
            return currentdate;
        },
        //转化为年月日时分秒
        getNowTime() {
            var date = new Date();
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
            var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
            var currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate
                    + " "  + date.getHours()  + seperator2  + date.getMinutes()
                    + seperator2 + date.getSeconds();
            return currentdate;
        }
    },
})