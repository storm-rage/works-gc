var vm = new Vue({
    el: "#app",
    data (){
        return {
            flag: false,
            id: '',
            name: '',
            books: [
                {
                    id:1,
                    name: '三国',
                    date: ''
                },{
                    id:2,
                    name: '水浒',
                    date: ''
                },
                {
                    id:3,
                    name: '红楼',
                    date: ''
                },
                {
                    id:4,
                    name: '西游',
                    date: ''
                },
                {
                    id:44,
                    name: '西游44',
                    date: ''
                },
                {
                    id:14,
                    name: '西游14',
                    date: ''
                }
            ]
        }
    },
    methods: {
        handle: function(){
            if(this.flag) {
                //添加图书
                //根据当前的id去更新数组中对应的数据
                this.books.some((item) => {
                    //箭头函数中的this指向定义该函数的父级作用域
                    if(item.id == this.id) {
                        item.name = this.name;
                        //完成更新操作之后，需要终止循环
                        return true;
                    }
                });
                this.flag = false;
            }else {
                //添加图书
                var book = {};
                book.id = this.id;
                book.name = this.name;
                book.date = '';
                this.books.push(book);
                //清空表单
                this.id = '';
                this.name = '';
            }
            this.id = '';
            this.name = '';
            
        },
        toEdit: function(id){
            //禁用修改id
            this.flag = true;
            console.log(id);
            //根据id查询出要编辑的数据
            var book = this.books.filter(function(item){
                return item.id == id;
            });
            console.log(book);
            //把获取到的信息填充到表单
            this.id = book[0].id;
            this.name = book[0].name;
        },
        toDelete: function(id){
            //根据id从数组中查找元素的索引
            // var index = this.books.findIndex(function(item){
            //     return item.id == id;
            // });
            // this.books.splice(index, 1);
            //方法二通过filter方法进行删除
            this.books = this.books.filter(function(item){
                return item.id != id;
            })
        },
        //排序方法
        resort: function(property){
            return function(a, b) {
                var value1 = a[property];
                var value2 = b[property];
                return value1 - value2;
            };
        }
    },
    
    watch: {
        //监听数组id进行排序
        bookSort: function(property){
            return function (a, b) {
                var value1 = a[property];
                var value2 = b[property];
                return value1 - value2;
            };
        }
    }
})