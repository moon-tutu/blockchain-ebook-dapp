"# blockchain-ebook-dapp" 

1安装node.js  服务器端js解释器
"node -v”和“npm -v”有结果即可

2.安装truffle框架 npm install truffle -g  以太坊开发环境

3.Ganache 安装 用于开发和测试的本地区块链

4.MetaMask 安装 开源以太坊钱包，是一个浏览器扩展

5.IPFS安装  用于存放书籍

运行步骤 
1.首先cmd里输入ipfs daemon 开启IPFS，该窗口需一直运行

2.另开一个cmd，在dapp文件夹下输入truffle compile 编译合约
输入truffle migrate将合约部署到Ganache上

3.将Ganache的私钥导入Metamask钱包

4.在app文件夹下 cmd 运行 npm run dev ，打开浏览器上传图书
