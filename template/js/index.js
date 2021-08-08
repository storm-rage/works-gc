new Vue({
    el: "#app",
    data (){
        return {
            msg: "123",
            testnum: "11",
            taskListName: "-任务清单-",
            ifclass: "1",
            task: [
                "vue文档通读",
                "看完vue基础教程视频",
                "vue项目制作",
                "搞清楚前端开发的环节与步骤",
                "巩固js开发知识点：数据类型，几种转换方式的差别，内存垃圾回收机制，堆栈等"
            ]
        }
    },
    methods: {
        //转化为年月日
        //转化为年月日时分秒
    }
})