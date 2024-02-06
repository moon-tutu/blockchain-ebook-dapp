import axios from 'axios'
import VueRouter from "vue-router";
Vue.use(VueRouter);



//获取kookit.umd.js并把他加载到window对象上,借用其划分章节的功能
const {
  MobiRender,
  Azw3Render,
  EpubRender,
  TxtRender,
  StrRender,
  ComicRender,
} = window.Kookit;

// 该函数输入一个字符串（小说），返回小说的章节及对应内容
async function handleTxt(result){
  // 新建一个txt渲染对象
  let rendition = new TxtRender(
    result,
    "scroll",
    "utf8",
    true
  );
  // 获取元素
  let e=document.getElementsByClassName("book_content")[0];
  //原函数是渲染到页面使用react，我修改为返回book的章节和章节内容
  let book=await rendition.renderTo(e);
  return book;
};

//页面加载完成执行 
window.addEventListener("load", function () {
  // ipfs本地地址
  const httpGateWay = "http://127.0.0.1:8080";
  // 获取书籍的hash值
  const hash = this.location.href.split('?').pop();
  // 拼接出书籍的完整路径
  const href = `${httpGateWay}/ipfs/${hash}`;
//  vue-router
 // 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  // { path: '/foo', component: ChapterContent },
  // { path: '/bar', component: Bar },
  // { path: '/:chapter_id', component: ChapterContent }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

   // 定义vue
  var chapter=new Vue({
    el:"#chapter",
    router,
    data:{
      chapters:[],
      chapters_detail:[],
      current_chapter:0,
      catlog_show:false
    },
    methods: {
      // 点击章节时，改变当前章节index
     goto:function(key){
      this.current_chapter=key;
      window.scrollTo(0,0);
    },
    // 点击目录按钮 控制目录是否展示
    show_catalog:function(){
      this.catlog_show=!this.catlog_show;
    }
    },
    mounted:async function(){
      var that=this;
      // 通过路径获取内容然后对结果进行操作
      axios.get(href).then(async (res)=> {
        let book=await handleTxt(res.data);
        that.chapters=book[0];
        that.chapters_detail=book[1];
        console.log(book[0]);
        console.log(book[1]);
      })
    }
  })
});




//  自己尝试划分，失败
// let getExecStrs = function (str) {

//   let list1 = [];//章节
//   let list2=[];//每章的内容
//   let result1 = null,result2=null;  
//   result1 = str.match(reg);
//   result1 && list1.push(...result1);//res不为空执行push
//   result2 =str.split(/(\s|\n)(第)([\u4e00-\u9fa5a-zA-Z0-9]{1,7})[章][^\n]{1,35}(|\n)/);
  
//   for(let i=0;i<result2.length;i++){//把章节内容存到res2
//     if(result2[i]){
//       let tmp=result2[i]
//     if(tmp.length>100)
//     list2.push(tmp);
//     }
//   }
//   result2= list2;
  // let res=list2.filter(function(word){return word.length > 6});
  // result2=result2.filter(item=>item.length>100);
  // console.log(res);
//   for (let i = 0; i < list1.length; i++) {
//     list1[i] = list1[i].split("\n").join("");
//     list1[i] = list1[i].split("\r").join("");
//     list1[i] = list1[i].split("\t").join("");
//   }
//   return {
//     chapter:result1,
//     content:result2
//   };
// }


// window.onload=function(){
//   var chapter=new Vue({
//     el:"#chapter",
//     data:{
//       hello:"hello world",
//       chapters:[],
//       chapters_detail:[],
//       current_chapter:""
//     },

//     methods: {
//     },
//     mounted:async function(){
//       var that=this;
//       let fileInput = document.getElementById('file-input');
//       // 原来是上传一个文件进行章节划分
//         fileInput.addEventListener('change', function() {
//           let file = fileInput.files[0];
//           let reader = new FileReader();
//           reader.onload = async ()=> {
//             let content = reader.result;
//             let books=await handleTxt(content);
//             console.log(books[0]);
//             that.chapters=books[0];
//             that.chapters_detail=books[1];
//           };
//           reader.readAsArrayBuffer(file);
//         });
//     }
//   })
// }

// if (format === "TXT") {
//   this.handleTxt(result as ArrayBuffer);
// let rendition = new TxtRender(
//   result,
//   this.state.readerMode,
//   this.props.currentBook.charset || charset || "utf8",
//   StorageUtil.getReaderConfig("isSliding") === "yes" ? true : false
// );
