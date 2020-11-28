
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Cơm Rang',
      description: "Cơm chiên hay cơm rang là một món cơm nấu đã được chế biến trong chảo hoặc chảo rán và thường được trộn với các thành phần khác như trứng, rau, hải sản hoặc thịt. Nó thường được ăn riêng lẻ hoặc như một món ăn kèm cho món ăn khác. Cơm chiên là một thành phần phổ biến của các món ăn Đông Á, Đông Nam Á và một số món ăn Nam Á.Cơm chiên thường được làm với các thành phần còn sót lại từ các món ăn khá",
      url : "https://media.cooky.vn/recipe/g2/14719/s320x320/recipe14719-635690328733826072.jpg"
      
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Phở Bò',
      description: "Phở là một món ăn truyền thống của Việt Nam, được cho là có nguồn gốc từ Nam Định, cũng có thể xem là một trong những món ăn tiêu biểu cho nền ẩm thực Việt Nam. Thành phần chính của phở là bánh phở và nước dùng cùng với thịt bò hoặc thịt gà cắt lát mỏng. Ngoài ra còn kèm theo các gia vị như: tương, tiêu, chanh, nước mắm, ớt... ",
      url :"https://img-cache.coccoc.com/image?url=https://upload.wikimedia.org/wikipedia/commons/5/53/Pho-Beef-Noodles-2008.jpg&f=w"
    },
    {
      id: '58694a0f-3da1-471f7-bd96-145571e29d2',
      title: 'Nem Chua',
      description: "Nem chua hay nem là một món ăn sử dụng thịt lợn, lợi dụng men của lá chuối và thính gạo để ủ chín, có vị chua ngậy. Nổi tiếng ở Việt Nam như một sản vật phổ biến tại nhiều địa phương, tuy không rõ nem chua được người dân vùng nào làm ra đầu tiên.",
      url: "https://img-cache.coccoc.com/image?url=https://upload.wikimedia.org/wikipedia/commons//c/cf/Nem_chua.jpg&f=w"
    },
    {
      id: '58694a0f-3da1-471f5-bd96-15571e29d72',
      title: 'Bánh Mì',
      description: "Bánh mì Việt Nam hoặc đơn giản là bánh mì là một loại thức ăn đường phố của Việt Nam bao gồm vỏ là một ổ bánh mì nướng có da giòn, ruột mềm; bên trong là phần nhân. Tuỳ hương vị vùng miền hoặc sở thích cá nhân mà người ta sẽ tạo thành những kiểu nhân khác nhau Loại bánh mì làm vỏ thực tế là kiểu baguette do người Pháp đem vào Miền Nam Việt Nam từ những thế kỷ trước đây, sau này, lan ra khắp Miền Trung và Miền Nam, đặc biệt thịnh hành ở Sài Gòn. Trong quá trình cải tiến, người Sài Gòn đã chế biến baguette lại thành kiểu bánh mì nhỏ và ngắn hơn chỉ còn khoảng 30–40 cm, và ruột thì rỗng hơn để có thể đưa phần nhân vào đó. Tùy thuộc vào thành phần nhân được kẹp bên trong mà bánh mì kẹp có tên gọi khác nhau",
      url : "https://img-cache.coccoc.com/image?url=https://upload.wikimedia.org/wikipedia/commons/6/6c/Bánh_mì_thịt_nguội.jpg&f=w"
    },
    {
      id: '58694a0f-3da1-471f-bd966-45571e29d72',
      title: 'Thịt Kho',
      description: "Thịt kho hột vịt là một món ăn phổ biến tại miền Nam Việt Nam. Món ăn này đặc biệt thường được chế biến để dùng trong các ngày Tết Nguyên đán vì có thể làm sẵn, giữ được lâu ngày, nên tiện khi dùng bữa thì dọn ra ăn ngay với cơm và người nhà không phải bận công nấu nướng trong khi vui Tết.",
      url :"https://img-cache.coccoc.com/image?url=https://upload.wikimedia.org/wikipedia/commons/5/5b/Caramelized_Pork_and_Eggs.jpg&f=w"
    },
    {
      id: '58694a0f-3da1-471f-77bd96-15571e29d72',
      title: 'Nem nướng',
      description: "Nem nướng (literally 'grilled sausage'), is Vietnamese grilled pork sausage or grilled meatball, and a popular Vietnamese food item, sometimes served as an individual appetizer or snack, or served with rice noodles or rice as a main course. Nem nướng is a specialty of Province.",
      url :"https://img-cache.coccoc.com/image?url=https://upload.wikimedia.org/wikipedia/commons//a/a8/Nem_chua_nuong.JPG&f=w"
    },
    {
      id: '58694a0f-3da1-471f-bd5596-15571e29d72',
      title: 'Shushi Cá Hồi',
      description: "Sushi là một món ăn Nhật Bản gồm cơm trộn giấm (shari) kết hợp với các nguyên liệu khác (neta). Neta và hình thức trình bày sushi rất đa dạng, nhưng nguyên liệu chính mà tất cả các loại sushi đều có là shari. Neta phổ biến nhất là hải sản. Thịt sống cắt lát gọi riêng là sashimi.",
      url :"https://img-cache.coccoc.com/image?url=https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg&f=w"
    },
    {
      id: '58694a0f-3da1-47f-bd6596-145571e29d72',
      title: 'Xôi',
      description: "Xôi là đồ ăn thông dụng được làm từ nguyên liệu chính là gạo nếp, đồ/hấp chín bằng hơi nước, thịnh hành trong ẩm thực của nhiều nước châu Á.",
      url: "https://img-cache.coccoc.com/image?url=https://upload.wikimedia.org/wikipedia/commons//f/f9/Xôi_xéo.jpg&f=w"
    },
    {
      id: '58694a0f-3d45a1-471f-bd96-14557129d72',
      title: 'Bún Chả',
      description: "Bún chả là món ăn với bún, chả thịt lợn nướng trên than hoa và bát nước mắm chua cay mặn ngọt. Món ăn xuất xứ từ miền Bắc Việt Nam, là thứ quà có sức sống lâu bền nhất của Hà Nội, nên có thể coi đây là một trong những đặc sản đặc trưng của ẩm thực Hà thành. Bún chả có nét tương tự món bún thịt nướng ở miền Trung và miền Nam, nhưng nước mắm pha có vị thanh nhẹ hơn",
      url: "https://img-cache.coccoc.com/image?url=https://upload.wikimedia.org/wikipedia/commons/4/46/Bún_Chả.jpg&f=w"
    },

  ];
  module.exports = DATA