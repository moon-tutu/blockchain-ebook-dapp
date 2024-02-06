//SPDX-License-Identifier: SimPL-2.0
pragma solidity ^0.8.0;

contract Ebook {
    uint256 res;

    // function add(uint256 a, uint256 b) public {
    //     res = a + b;
    // }

    // function add_result() public view returns (uint256) {
    //     return res;
    // }

    address owner; //合约部署者
    uint256 book_id; //书籍id
    uint256 user_id; //用户id
    mapping(address => user) public users;
    user[] public users_list;
    book[] public book_list;
    struct book {
        uint256 book_id; //图书编号
        string book_name; //图书名字
        string book_image; //图书图片
        string book_content; //书籍内容
        address payable uploader; //上传者
        bool isdelete;
        bool onsale;
        uint price;
    }
    struct user {
        uint256 user_id; //用户编号
        address user_address; //用户地址
        string user_name; //用户名字
        uint256[] upload_books; //上传的书籍
        uint256[] book_shelf; //书架-在读的书籍
    }

    constructor() {
        owner = msg.sender;
    }

    //添加用户 用户地址，名字  功能：初始化用户
    function adduser(address _user, string memory _user_name) public {
        uint256[] memory upload_books = new uint256[](0);
        uint256[] memory book_shelf = new uint256[](0);
        user memory new_user = user(
            user_id,
            _user,
            _user_name,
            upload_books,
            book_shelf
        );
        users_list.push(new_user);
        users[_user] = new_user;
        user_id += 1;
    }

    //上传图书  参数：用户地址，图书名字，图片，内容
    //功能：book_list添加一本书
    // 用户上传的书籍添加一本书id
    // 在读的书籍添加一本书id
    function upload_book(
        string memory book_name,
        string memory book_image,
        string memory book_content,
        address payable _uploader
    ) public {
        book memory new_book = book(
            book_id,
            book_name,
            book_image,
            book_content,
            _uploader,
            false,
            false,
            0
        );
        book_list.push(new_book);
        users[_uploader].upload_books.push(book_id);
        users[_uploader].book_shelf.push(book_id);
        book_id += 1;
    }

    //删除书籍，实际只是不进行展示
    function delete_book(uint256 _book_id) public {
        require(
            msg.sender == book_list[_book_id].uploader,
            "Only uploader can delete books!"
        );
        book_list[_book_id].isdelete = true;
    }

    //修改在售状态
    function book_onsale(uint256 _book_id) public {
        require(
            msg.sender == book_list[_book_id].uploader,
            "Only uploader can delete books!"
        );
        book_list[_book_id].onsale = !book_list[_book_id].onsale;
    }

    //修改书籍价格
    function change_price(uint _book_id, uint price) public {
        require(
            msg.sender == book_list[_book_id].uploader,
            "Only uploader can sale book"
        );
        require(book_list[_book_id].isdelete == false);
        book_list[_book_id].price = price;
    }

    //判断是否已经购买 返回false认为某人未购买某书，防止重复购买
    function isbought(
        uint _book_id,
        address _user
    ) public view returns (bool bought) {
        bool is_bought = false;
        for (uint i = 0; i < users[_user].book_shelf.length; i++) {
            if (users[_user].book_shelf[i] == _book_id) {
                is_bought = true;
                return is_bought;
            }
        }
    }

    function buy_books(uint _book_id) public payable {
        uint256 price = (book_list[_book_id].price) * 1e18;
        require(
            price == msg.value,
            "Payment must be equal to price of the book"
        );
        require(
            book_list[_book_id].uploader != msg.sender,
            "Cannot buy your own book"
        );
        require(book_list[_book_id].onsale == true, "Book must be onsale");
        require(
            isbought(_book_id, msg.sender) == false,
            "You had processed this book"
        );

        book_list[_book_id].uploader.transfer(price);

        users[msg.sender].book_shelf.push(_book_id);
    }

    function show_books(uint256 _book_id) public view returns (book memory) {
        return book_list[_book_id];
    }

    function books_sum() public view returns (uint256) {
        return book_id;
    }

    function user_sum() public view returns (uint256) {
        return user_id;
    }

    function my_upload_books(
        address _user
    ) public view returns (uint256[] memory) {
        return users[_user].upload_books;
    }

    function my_book_shelf(
        address _user
    ) public view returns (uint256[] memory) {
        return users[_user].book_shelf;
    }
}
