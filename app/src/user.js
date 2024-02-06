import Web3 from "web3";
import digital_artifacts from "../../build/contracts/Ebook.json";
import $ from 'jquery'
import { create } from 'ipfs-http-client'
const ipfs = create({ host: 'localhost', port: '5001', protocol: 'http' });

// console.log($);
//创建vue实例，挂载到app标签上
var new_books=new Vue({
  el:"#new_books",
  data:{
    books_sum: 0,
    books:[],
    reader:"reader.html?"
  }
})
var my_books=new Vue({
  el:"#my_books",
  data:{
    books_sum: 0,
    books:[],
    reader:"reader.html?",
    book_img:"11",
    book_name:"点击上传书籍内容"
  },
  methods:{
    changeimg:function(){
      let that=this;
      let reads= new FileReader();
      let f=document.getElementById('book_img').files[0];
      reads.readAsDataURL(f);
      reads.onload=function (e) {
        console.log(e.result);
        console.log(that.book_img);
        that.book_img=this.result;
      };
    },
    change_book_name:function(){
      let f=document.getElementById('book_content').files[0];
      this.book_name=f.name;
    }
  }
})
var search=new Vue({
  el:"#search",
  data:{
    inputValue:"",
    reader:"reader.html?",
    search_res:[],
    searching:""//动态样式
  },
  methods:{
   
    changeCss(){
      this.searching="searching";
      document.body.style.overflow = "hidden";
      let _body=document.querySelector("body");
      _body.onclick=()=>{
        this.searching="search";
        this.search_res=[];
        document.body.style.overflow = "auto";
      }
    },
    async search(){//要使用App.all_books_list,所以声明成异步函数
      
      this.search_res=[];
      let value=this.inputValue.trim();//去掉前后的空格
      // 初始化正则表达式
      let regStr = '';
      for(let i=0; i<value.length; i++){
        regStr = regStr + '(' + value[i] + ')([\\s]*)'; //跨字匹配
      }
      let reg = new RegExp(regStr);
      let bookList=await App.all_books_list();
      // console.log(bookList);
      for(let i=0; i<bookList.length; i++){
        let name = bookList[i].book_name; //按照名字匹配
        let regMatch = name.match(reg);
        if(null !== regMatch) {
           bookList[i].book_content=bookList[i].book_content.split('/').pop();
           this.search_res.push(bookList[i]);// 将匹配的数据放入结果列表中
        }
      }
    }
  }
})
const App = {
    web3: null,
    account: null,
    meta: null,
    start: async function() {
        const { web3 } = this;
        console.log("start函数执行");
        try {
            // 获得合约事例
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = digital_artifacts.networks[networkId];
            // console.log(deployedNetwork);
            this.meta = new web3.eth.Contract(
                digital_artifacts.abi,
                deployedNetwork.address
            );
            const accounts = await web3.eth.getAccounts();
            this.account = accounts[0];
            const numbers = await web3.eth.getBlockNumber()
            const balance = await web3.eth.getBalance(this.account)
            const Protocol = await web3.eth.getProtocolVersion();
            const Block = await web3.eth.getBlock(numbers,true);
            // console.log(Block)
			let acc = "账户为："+this.account +'\n'+'\n'+"当前区块号："+numbers+'\n'+'\n'+"当前账户余额："+balance+'\n'+'\n'+"当前协议版本："+Protocol+'\n'+'\n'+"区块哈希："+Block.hash+'\n'+'\n'+"出块的unix时间戳："+Block.timestamp+'\n'+'\n'+"块中所有交易使用的gas总量："+Block.gasUsed+'\n'+'\n'+"区块大小（字节）："+Block.size;
            console.log("当前用户："+this.account);
            this.sign_up();//注册
            this.new_book();
            this.log_in();
            this.my_book();

        } catch (error) {
            console.log(error);
            //需要事先添加测试网络，没添加会提示连接不上，因为开始默认是eth主网络
            console.error("Could not connect to contract or chain.");
        }
    },
    //sign_up 注册，页面刷新时调用，
    // 功能：检查当前用户是否注册过，没注册过则添加用户
    sign_up: async function(){
      const {users,adduser,user_sum,users_list}=this.meta.methods;
      let user=await users(this.account).call();//获得mapping users[this.account]
      let user_id=await user_sum().call();//获得用户总数
      // console.log(user[1]==0);用户地址==0 说明users这个hash表的键不包含当前用户的地址
      if(user[1]==0){//如果当前用户未注册，进行注册
         await adduser(this.account,"小书虫").send({from:this.account});//添加用户
         alert("恭喜你成为第"+user_id+"名用户");      
      }
      // 显示所有用户
      // for(let i=0;i<user_id;i++){
      //   let tmp=await users_list(i).call();
      //   console.log(i);
      //   console.log(tmp);
      // }
    },

    //登录
    log_in: async function(){
      // alert("欢迎你："+this.account);
      let _address=document.querySelector("#address");
      _address.innerText=this.account;
    },
    //上传文件到ipfs
    save_on_ipfs: function(input) {
      return new Promise(async(resolve, reject) => {
          try {
              const httpGateway = 'http://127.0.0.1:8080'

              //ipfs的add方法是将东西添加到ipfs网络上
              let results = await ipfs.add(input);
              let hash = results.path;
              let res = `${httpGateway}/ipfs/${hash}`
              resolve(res);//异步函数返回 文件的ipfs地址
          } catch (err) {
              console.error(err);
              reject(err);
          }
      })
    },
    //上传图书 
    upload_book:async function(){
        let book_name=$(".book_name").val();
        let book_img = document.querySelector("#book_img").files[0];
        let book_content=document.querySelector(".book_content").files[0];
        console.log(book_content)
        book_img=await this.save_on_ipfs(book_img)
        book_content=await this.save_on_ipfs(book_content)
        // console.log(book_img,book_content);
        const{upload_book}=this.meta.methods;
        await upload_book(book_name,book_img,book_content,this.account).send({from:this.account});
        location.reload();
    },
    // 展示最新上传的图书
    new_book:async function(){
      const{book_list,books_sum}=this.meta.methods;
      let num=await books_sum().call();
      new_books.books_sum=num;
      for(let i=1;i<=4;i++){
        let book=await book_list(num-i).call();
        // console.log(book);
        let book_herf=book.book_content.split('/').pop();
        new_books.books.push({
          book_name:book.book_name,
          book_image:book.book_image,
          book_content:book_herf
        })
      }
    },
// 我的书架
    my_book:async function(){
      const{book_list,my_book_shelf,users}=this.meta.methods;
      let books=await my_book_shelf(this.account).call();//调用合约中我的书架函数，返回一个数组
      // let res=await my_upload_books().call();      
      // console.log(books); 输出我的书架数组  数组中是书的id
      my_books.books_sum=books.length;//修改vue实例中的数据
      let n=Math.min(4,books.length);//取较小值
      for(let i=n-1;i>=0;i--){
        let book=await book_list(books[i]).call();
        // console.log(book);
        let book_herf=book.book_content.split('/').pop();
        my_books.books.push({
          book_name:book.book_name,
          book_image:book.book_image,
          book_content:book_herf
        })
      }
    },
    // 返回图书列表，传给vue实例search ，以便vue实例中进行搜索 
    all_books_list:async function(){
      const{books_sum,book_list}=this.meta.methods;
      let n=await books_sum().call();
      let all_books=[];
      for(let i=0;i<n;i++){
        let book=await book_list(i).call();
        all_books.push(book);
      }
      return all_books;
    },
    

    // 测试合约add函数
    // add: async function() {
    //     let a = $(".a").val();
    //     console.log(a);
    //     let b = $(".b").val();
    //     console.log(b);
    //     const { add } = this.meta.methods;
    //     await add(a,b).send({ from: this.account });  
    // },
    // show: async function(){
    //     const { add_result } = this.meta.methods;
    //     let res =await add_result().call();
    //     $(".res").attr('value',res);
    //     console.log(res);
    // },

};
window.App = App;

//MetaMask在网页页面中注入了自己的web3实例，所以我们先做一个检查，通常这个检查在页面加载之后进行，检查方法如下：
window.addEventListener("load", function() {
    if (window.ethereum) {
        // use MetaMask's provider
        console.log("页面加载");
        App.web3 = new Web3(window.ethereum);
        window.ethereum.enable(); // get permission to access accounts
    } else {
        console.warn(
            "No web3 detected. Falling back to http://101.132.69.240:8545. You should remove this fallback when you deploy live"
        );
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        App.web3 = new Web3(
            new Web3.providers.HttpProvider("http://127.0.0.1:8545")
        );
    }
    App.start();
});