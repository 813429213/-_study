Page({
  data: {
    spot: {},
    isLoggedIn: false
  },

  onLoad(options) {
    const spotId = options.id; // 获取传递的景点ID
    this.fetchSpotDetails(spotId);
    
    // 检查登录状态
    const isLoggedIn = wx.getStorageSync('isLoggedIn') || false;
    this.setData({ isLoggedIn });
  },

  // 模拟请求数据
  fetchSpotDetails(spotId) {
    const spotData = {
      1001: {
        name: "江西师范大学",
        description: "静思笃行、持中秉正",
        image: "https://ts1.cn.mm.bing.net/th/id/R-C.9eb288fea7334837540e8dd81187ed27?rik=1ySnWdYgnrD07A&riu=http%3a%2f%2fwww.jdxzz.com%2fuploads%2fallimg%2f200410%2f7-200410162035-50.jpg&ehk=Qla2nkkgUrDCRmqni0F5RjcCAiMEh%2bPHrhm9qh4kjl8%3d&risl=&pid=ImgRaw&r=0",
        openingHours: "00:00 - 24:00",
        address: "江西省南昌县紫阳大道99号",
        ticketPrice: "免费",
        latitude: 28.6659,
        longitude: 115.8595
      },
      1002: {
        name: "八一起义纪念馆",
        description: "为纪念南昌起义而设立的专题纪念馆",
        image: "https://kimi-img.moonshot.cn/webimg2/img95.699pic.com/f7c6bfed224b437219b414a07e123f9549314fdb",
        openingHours: "周二至周日9:00-17:00",
        address: "江西省南昌市中山路380号",
        ticketPrice: "免费",
        latitude: 28.6847,
        longitude: 115.8925
      },
      1003: {
        name: "滕王阁",
        description: "赣江东岸，被誉为江南三大名楼之一",
        image: "https://kimi-img.moonshot.cn/webimg2/p1.ssl.qhmsg.com/e3329c5afc559817c94d3459d17fc8137a9bf893",
        openingHours: "08:00-18:30",
        address: "江西省南昌市东湖区仿古街58号",
        ticketPrice: "50元",
        latitude: 28.6827,
        longitude: 115.8923
      },
      1004: {
        name: "梅岭",
        description: "是中国古典音律和道教净明宗的发源地之一",
        image: "https://kimi-img.moonshot.cn/webimg2/pic1.k1u.com/cd81017ba1466bdf010a2ed931eeb7a9b4fd3afe",
        openingHours: "9：00-17：00",
        address: "江西省南昌市湾里区梅岭镇",
        ticketPrice: "狮子峰：25.00元 \n神龙潭：15.00元\n 梅岭漂流：88.00元",
        latitude: 28.6827,
        longitude: 115.8923
      },
      1005: {
        name: "绳金塔",
        description: "南昌人心中的镇城之宝",
        image: "https://kimi-img.moonshot.cn/webimg2/img1.qunarzz.com/015543143f8ae8398d64fc7788a813b17d4fac42",
        openingHours: "周二至周日9:00-17:00",
        address: "江西省南昌市中山路380号",
        ticketPrice: "免费"
      },
      1006: {
        name: "南昌之星摩天轮",
          description: "世界上第三高的摩天轮",
          image: "https://kimi-img.moonshot.cn/webimg2/pic1.k1u.com/37be6d1dca1467874d48d93fb6ca8b5b860bf382",
        openingHours: "周二至周日9:00-17:00",
        address: "江西省南昌市中山路380号",
        ticketPrice: "免费"
      },
      1007: {
        id: 1007,
          name: "八一广场",
          description: "江西省的著名山脉，拥有丰富的自然景观。",
          image: "https://kimi-img.moonshot.cn/webimg2/so1.360tres.com/5ff8224193d886e8f778203b03a93b7036a93a0a",
        openingHours: "周二至周日9:00-17:00",
        address: "江西省南昌市中山路380号",
        ticketPrice: "免费"
      },
      2001: {
        name: "景德镇陶瓷博物馆", description: "展示景德镇的陶瓷文化和历史", image: "https://p1.ssl.qhmsg.com/t01d9006abf9235d52b.jpg",openingHours: "9：00-17：00",address: "江西省景德镇市昌江区紫晶北路1号", ticketPrice: "免费"
      },
      2002:{
        name:"历史古窑展示区", description:"全国唯一一家以陶瓷文化为主题的国家AAAAA级旅游景区", image:"https://kimi-img.moonshot.cn/webimg2/www.chinaguyao.com/3abe83fa3c4e9ba03025bba84e77bfe8f962d3df",openingHours: "08:00-17:30",address: "景德镇市瓷都大道古窑路1号", ticketPrice: "95元"
      },
      2003:{
        name:"历史古窑展示区", description:"全国唯一一家以陶瓷文化为主题的国家AAAAA级旅游景区", image:"https://kimi-img.moonshot.cn/webimg2/www.chinaguyao.com/3abe83fa3c4e9ba03025bba84e77bfe8f962d3df",openingHours: "08:00-17:30",address: "景德镇市瓷都大道古窑路1号", ticketPrice: "95元"
      },
      2004:{
        name:"历史古窑展示区", description:"全国唯一一家以陶瓷文化为主题的国家AAAAA级旅游景区", image:"https://kimi-img.moonshot.cn/webimg2/www.chinaguyao.com/3abe83fa3c4e9ba03025bba84e77bfe8f962d3df",openingHours: "08:00-17:30",address: "景德镇市瓷都大道古窑路1号", ticketPrice: "95元"
      },
      2005:{
        name:"历史古窑展示区", description:"全国唯一一家以陶瓷文化为主题的国家AAAAA级旅游景区", image:"https://kimi-img.moonshot.cn/webimg2/www.chinaguyao.com/3abe83fa3c4e9ba03025bba84e77bfe8f962d3df",openingHours: "08:00-17:30",address: "景德镇市瓷都大道古窑路1号", ticketPrice: "95元"
      },
      2006:{
        name:"历史古窑展示区", description:"全国唯一一家以陶瓷文化为主题的国家AAAAA级旅游景区", image:"https://kimi-img.moonshot.cn/webimg2/www.chinaguyao.com/3abe83fa3c4e9ba03025bba84e77bfe8f962d3df",openingHours: "08:00-17:30",address: "景德镇市瓷都大道古窑路1号", ticketPrice: "95元"
      },
        "3001": {
          "name": "郁孤台",
          "description": "登上郁孤台楼，江城烟云，内外景色尽收眼底",
          "image": "https://kimi-img.moonshot.cn/webimg2/www.yebaike.com/5465bc5a51654a67215298beb61be94822decd7e",
          "openingHours": "全年09:00-21:00",
          "address": "江西省赣州市章贡区西津路2号",
          "ticketPrice": "免费"
        },
        "3002": {
          "name": "八镜台",
          "description": "具有近千年的历史，是赣州古城的象征",
          "image": "https://kimi-img.moonshot.cn/webimg2/k.sinaimg.cn/4c3a9993e14e6e29e06025778827b96ba7e4440f",
          "openingHours": "每日9:00-22:00，21:30后游客停止入场并安排清场",
          "address": "章贡区八境路27号",
          "ticketPrice": "免费"
        },
        "3003": {
          "name": "宋朝不夜城",
          "description": "宋朝不夜城展现了当时社会的繁荣和百姓丰富多彩的夜生活",
          "image": "https://kimi-img.moonshot.cn/webimg2/x0.ifengimg.com/8e2ad179a594bdd63c3b320fab039f32644c51e1",
          "openingHours": "全年09:00-21:00",
          "address": "江西省赣州市章贡区建国路8-6号",
          "ticketPrice": "免费"
        },
        "3004": {
          "name": "通天岩",
          "description": "通天岩以其壮观的自然景观和丰富的摩崖石刻而闻名",
          "image": "https://tse3-mm.cn.bing.net/th/id/OIP-C.9-BnRcXIUHQUVw5hhgoH7gHaEL?rs=1&pid=ImgDetMain",
          "openingHours": "全年08:00-17:30",
          "address": "江西省赣州市章贡区通天岩路",
          "ticketPrice": "40元"
        },
        "3005": {
          "name": "灶儿巷",
          "description": "灶儿巷是一个历史悠久的文化街巷，保留了多种风格的古建筑。",
          "image": "https://tse3-mm.cn.bing.net/th/id/OIP-C.kzs-KVenHIGmgIaNYzEjHwHaJf?rs=1&pid=ImgDetMain",
          "openingHours": "全年09:00-21:00",
          "address": "江西省赣州市章贡区",
          "ticketPrice": "免费"
        },
        "3006": {
          "name": "上堡梯田",
          "description": "上堡梯田是国内三大梯田奇观之一，梯田景观美不胜收。",
          "image": "https://tse1-mm.cn.bing.net/th/id/OIP-C.DUPHsmZjPQmR39IqK5g-wAHaFq?rs=1&pid=ImgDetMain",
          "openingHours": "全年07:00-19:00",
          "address": "江西省赣州市崇义县",
          "ticketPrice": "50元"
        },
        "3007": {
          "name": "关西客家围",
          "description": "关西客家围是国内保存最完整、规模最大的赣南客家围屋，有‘东方古罗马城堡’的美誉。",
          "image": "https://tse3-mm.cn.bing.net/th/id/OIP-C.gRgysoqeyaLoc3BGpUlsaAHaEx?rs=1&pid=ImgDetMain",
          "openingHours": "全年08:30-17:30",
          "address": "江西省赣州市龙南县",
          "ticketPrice": "免费"
        },

      4001: {
        "name": "庐山风景区",
        "description": "庐山是中国十大名山之一，以雄、奇、秀、险闻名于世，素有‘匡庐奇秀甲天下’之美誉。",
        "image": "https://pic.kuaizhan.com/g3/b7/18/7a16-bad5-4d28-b5aa-571710c674cb36",
        "openingHours": "06:00-20:00",
        "address": "九江市庐山市牯岭镇河西路19号",
        "ticketPrice": "180元"
      },
      4002: {
        "name": "东林寺",
        "description": "东林寺是佛教净土宗的发源地，对一些国家的佛教徒影响较大。",
        "image": "https://tr-osdcp.qunarzz.com/tr-osd-tr-mapi/img/34f3ebf686494dfb3ca3b400cbb74b81.jpg",
        "openingHours": "08:00-17:00",
        "address": "九江市庐山西北麓山脚",
        "ticketPrice": "免费"
      },
      4003: {
        "name": "鄱阳湖国家湿地公园",
        "description": "鄱阳湖是中国最大的淡水湖，湿地公园以其丰富的湿地生态和候鸟资源而闻名。",
        "image": "https://tse3-mm.cn.bing.net/th/id/OIP-C.fvjzVaFjFd7ZvyO3dvisvgHaE8?rs=1&pid=ImgDetMain",
        "openingHours": "08:00-17:30",
        "address": "九江市永修县吴城镇湖亭路",
        "ticketPrice": "60元"
      },
      4004: {
        "name": "浔阳楼",
        "description": "浔阳楼是江南四大名楼之一，因《水浒传》中的宋江题反诗而闻名。",
        "image": "https://pic4.40017.cn/scenery/destination/2017/01/24/17/eokw9R.jpg",
        "openingHours": "08:00-17:30",
        "address": "九江市浔阳区滨江路",
        "ticketPrice": "20元"
      },
      4005: {
        "name": "白鹿洞书院",
        "description": "白鹿洞书院是中国历史上著名的四大书院之一，有着深厚的文化底蕴。",
        "image": "https://n.sinaimg.cn/sinacn10121/255/w1200h655/20190709/fa00-hzrevpz2721747.jpg",
        "openingHours": "08:30-17:30",
        "address": "九江市庐山区白鹿洞书院",
        "ticketPrice": "40元"
      },
      4006: {
        "name": "锁江楼",
        "description": "锁江楼是九江市的标志性建筑之一，位于长江之滨，历史悠久。",
        "image": "https://ts1.cn.mm.bing.net/th/id/R-C.cba725f774e41efef17bcb59a29c02a8?rik=7JUgUb4FXgHdQA&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20110408%2f20110408201920-2007915869.jpg&ehk=%2bgUD2f%2fTb0uB%2bnEhQKClfGB2ismKoHZwbv3xQ2gwLr4%3d&risl=&pid=ImgRaw&r=0",
        "openingHours": "08:00-17:30",
        "address": "九江市浔阳区锁江楼路",
        "ticketPrice": "15元"
      },
      5001: {
        "name": "明月山风景区",
        "description": "明月山以其秀丽的自然风光和丰富的文化底蕴而闻名，是休闲旅游的好去处。",
        "image": "https://imgs.qunarzz.com/sight/p0/1410/14/e72fc58a0d4a1d3067274506682532c0.jpg_710x360_ec585de2.jpg",
        "openingHours": "07:30-17:00",
        "address": "宜春市袁州区温汤镇",
        "ticketPrice": "120元"
      },
      5002: {
        "name": "三清山风景区",
        "description": "三清山以其奇特的花岗岩地貌、秀美的山水风光和丰富的道教文化而闻名。",
        "image": "https://www.sqs373.com/UploadFiles/news/2020/2/202002210436340251.jpg","openingHours":"06:00-20:00",
        "address": "宜春市上高县三清山风景区",
        "ticketPrice": "150元"
      },
      5003: {
        "name": "宜春鼓楼",
        "description": "宜春鼓楼是宜春市的标志性建筑，历史悠久，体现了古代建筑艺术的精湛技艺。",
        "image": "https://tse3-mm.cn.bing.net/th/id/OIP-C.CEeyLGynuXr6VYBliFOLGgHaEt?rs=1&pid=ImgDetMain",
        "openingHours": "08:00-17:30",
        "address": "宜春市袁州区鼓楼路",
        "ticketPrice": "免费"
      },
      5004: {
        "name": "宜春禅博园",
        "description": "宜春禅博园是一个以禅文化为主题的公园，集禅修、文化展示、旅游休闲于一体。",
        "image": "https://ts1.cn.mm.bing.net/th/id/R-C.2ee81f99228bf66b79666e7b2890b0fb?rik=0BAjtp3yzMjg5A&riu=http%3a%2f%2fpic1.k1u.com%2fk1u%2fmb%2fd%2ffile%2f20200410%2f1586511731704190_836_10000.jpg&ehk=5zKrX1xNDZc2Ru2JdsysoFwDdytoNX3TCS7FgiBgcpI%3d&risl=&pid=ImgRaw&r=0",
        "openingHours": "08:30-17:00",
        "address": "宜春市袁州区禅博路",
        "ticketPrice": "50元"
      },
      5005: {
        "name": "靖安三爪仑国家森林公园",
        "description": "靖安三爪仑国家森林公园以其原始森林、瀑布群和丰富的生物多样性而著称。",
        "image": "https://img1.qunarzz.com/travel/d6/1806/41/2626658bce6c50b5.jpg",
        "openingHours": "07:00-18:00",
        "address": "宜春市靖安县三爪仑乡",
        "ticketPrice": "80元"
      },
      5006: {
        "name": "宜丰洞山",
        "description": "宜丰洞山以其奇特的喀斯特地貌和丰富的溶洞景观而闻名，是探险和地质旅游的好去处。",
        "image": "https://ts1.cn.mm.bing.net/th/id/R-C.df1cd739fdee68dc35de141b8c04896f?rik=yKNZMK5yE8j4Kg&riu=http%3a%2f%2fh.usatour.com.cn%2fculture%2fl%2fhead3%2f42774.gif&ehk=mu5h0f4gWMpIkBr7EunF1nsLaY%2b7LL%2bPHurR9%2fM%2biu0%3d&risl=&pid=ImgRaw&r=0",
        "openingHours": "08:00-17:00",
        "address": "宜春市宜丰县洞山乡",
        "ticketPrice": "60元"
      },
      "6001": {
        "name": "萍乡武功山国家级风景名胜区",
        "description": "武功山是国家级风景名胜区、国家自然遗产，享有“户外天堂、云中草原”之美誉。",
        "image": "https://ts1.cn.mm.bing.net/th/id/R-C.90c54825ee0ecadb563ec986af0aa904?rik=06eF6Xp%2flq1RRA&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fphotoblog%2f1308%2f02%2fc9%2f24067809_24067809_1375452083312_mthumb.jpg&ehk=3kU4RXXqQw4O4pRLv8r36TJ2jNaytfMsUyrHFGucmr8%3d&risl=&pid=ImgRaw&r=0",
        "openingHours": "全年08:00-17:00",
        "address": "江西省萍乡市芦溪县芦万武旅游公路",
        "ticketPrice": "60元起"
      },
      "6002": {
        "name": "杨岐山风景名胜区",
        "description": "杨岐山风景名胜区由杨岐普通寺景区、孽龙洞景区、凤鸣湖景区、九龙洞景区四个景区以及瑶金山寺、李畋故居等外围景点组成。",
        "image": "https://newpic.jxnews.com.cn/0/11/43/18/11431816_987769.jpg",
        "openingHours": "夏令时08:20-17:30，冬令时08:30-17:00",
        "address": "江西省萍乡市上栗县杨岐镇清溪村",
        "ticketPrice": "免费"
      },
      "6003": {
        "name": "萍乡孽龙洞风景旅游区",
        "description": "孽龙洞风景旅游区是一个充满神秘感和美丽景色的旅游胜地。",
        "image": "https://ts1.cn.mm.bing.net/th/id/R-C.e4859a4e536bcced7dd5295f4befdbc8?rik=oi9Gys5iVEC17w&riu=http%3a%2f%2fpic1.k1u.com%2fk1u%2fmb%2fd%2ffile%2f20210428%2f1619595347857958_836_10000.jpg&ehk=TYeXax6GbSMKvJQ6y4pZEil7WfPsHXq7LhpNJkhWHXk%3d&risl=&pid=ImgRaw&r=0",
        "openingHours": "08:00-17:30",
        "address": "江西省萍乡市上栗县杨岐乡关下村",
        "ticketPrice": "68元"
      },
      "6004": {
        "name": "安源路矿工人运动纪念馆",
        "description": "安源路矿工人运动纪念馆是为纪念中国共产党领导的第一次工人运动而建立的专题类纪念馆。",
        "image": "https://ts1.cn.mm.bing.net/th/id/R-C.1c03dd12f24bb85d94798a19fb601d14?rik=oVSRGriCVjuAtQ&riu=http%3a%2f%2fwww.hongsegutian.com%2fUploads%2fEditor%2fPicture%2f2019-04-29%2f5cc654813e230.jpg&ehk=Hd9156KnpZrInXhvoPUVhDbeSjrR21uAFeKlMJHHy9k%3d&risl=&pid=ImgRaw&r=0",
        "openingHours": "周二至周日09:00-17:00，周一闭馆",
        "address": "江西省萍乡市安源区安源镇",
        "ticketPrice": "免费"
      },
      "6005": {
        "name": "秋收起义广场",
        "description": "秋收起义广场是为纪念秋收起义而建立的纪念性广场。",
        "image": "https://so1.360tres.com/t014c572ceade77d96c.png",
        "openingHours": "全天开放",
        "address": "江西省萍乡市安源区",
        "ticketPrice": "免费"
      },
      "6006": {
        "name": "萍乡龙溪秘境景区",
        "description": "龙溪秘境景区以其优美的自然风光和清新的空气吸引着众多游客。",
        "image": "https://tse4-mm.cn.bing.net/th/id/OIP-C.rAnauqJy5_9S-5OG3ifyfQHaFA?rs=1&pid=ImgDetMain",
        "openingHours": "08:00-17:30",
        "address": "江西省萍乡市湘东区麻山镇",
        "ticketPrice": "50元"
      },
      "6007": {
        "name": "萍乡三湾生态旅游景区",
        "description": "三湾生态旅游景区是一个集生态旅游、休闲度假为一体的综合性景区。",
        "image": "https://www.hanpokou.com/wp-content/uploads/2021/12/17f99c15d04f12790a78f822774fe17a-768x472.jpg",
        "openingHours": "08:00-18:00",
        "address": "江西省萍乡市芦溪县宣风镇",
        "ticketPrice": "40元"
      },
      
        "7001": {
          "name": "上饶望仙谷",
          "description": "望仙谷是悬崖民宿和仙宿交织的梦幻之地，以清澈的溪水、茂密的森林和壮观的瀑布而著称。",
          "image": "https://p8.qhimg.com/t010f289cf310b623f7.jpg",
          "openingHours": "周一-周四 09:30-22:00；周五-周日 09:30-22:30",
          "address": "江西省上饶市广信区望仙乡",
          "ticketPrice": "成人票：120元；老人票：90元；望仙谷门票+漂流票：268元"
        },
        "7002": {
          "name": "李坑景区",
          "description": "李坑是一个以李姓聚居为主的古村落，有乌镇的建筑景观，又有兔耳岭怪石景观，是国家AAAA级旅游景区。",
          "image": "https://img1.qunarzz.com/travel/d4/1707/83/4bd5f43278255eb5.jpg_480x360x95_9a7c281c.jpg",
          "openingHours": "全天开放",
          "address": "江西省上饶市婺源县秋口镇李坑村",
          "ticketPrice": "免费"
        },
        "7003": {
          "name": "月亮湾",
          "description": "月亮湾是半路上的一处小景点，因恰如月亮的形态、隔岸徽派民居的典雅、周边秀美的景色相融合。",
          "image": "https://tse1-mm.cn.bing.net/th/id/OIP-C.d0AvEHKGAsCs2Vdka-lcBQHaE7?rs=1&pid=ImgDetMain",
          "openingHours": "全天开放",
          "address": "江西省上饶市婺源县秋口镇外俞村",
          "ticketPrice": "免费"
        },
        "7004": {
          "name": "上饶灵山风景区",
          "description": "灵山一直被上饶人亲切地称为“家门口的风景”。景区的网红景点“天空之境”，漫步在蓝天白云的的感觉，如同置身仙境云端。",
          "image": "https://ts1.cn.mm.bing.net/th/id/R-C.9fb9f3a658ef35a2bb6f729ae3434445?rik=dwTx5eIvfeTSSA&riu=http%3a%2f%2fpic4.40017.cn%2fscenery%2fdestination%2f2016%2f11%2f29%2f17%2f3Yn57m.jpg&ehk=FCBpVEyGr%2f7tOhJ2lZlCyHhyUOqVmuj%2bgXWtmjvZIIk%3d&risl=&pid=ImgRaw&r=0",
          "openingHours": "全年 08:00-17:30开放；国庆节 07:30-16:00开放",
          "address": "江西省上饶市上饶县清水乡左溪村灵山风景名胜区",
          "ticketPrice": "75元起"
        },
        "7005": {
          "name": "三清山风景区",
          "description": "三清山是上饶最有名的景区，得名于山上最高的三座峰：玉京、玉虚、玉华，三座山峰宛如道教玉清、上清、太清三位尊神列坐山巅之上。",
          "image": "https://www.sqs373.com/UploadFiles/news/2020/2/202002210436340251.jpg",
          "openingHours": "旺季（2月1日~12月31日）周一至周五：08:00~17:00；周六至周日：07:30~17:30；淡季（1月1日~1月31日）08:30~16:30",
          "address": "江西省上饶市玉山县三清乡",
          "ticketPrice": "旺季（2月1日~12月31日）150元；淡季（1月1日~1月31日）130元"
        },
        "7006": {
          "name": "龟峰风景名胜区",
          "description": "龟峰是典型的丹霞地貌，因景区内“无山不龟，无石不龟”的独特自然景观而得名。",
          "image": "https://ts1.cn.mm.bing.net/th/id/R-C.de3fbe806bc9628fa6b6ef1e7b14f4a0?rik=IzjSxEISj6lFLA&riu=http%3a%2f%2fpic4.40017.cn%2fscenery%2fdestination%2f2017%2f01%2f20%2f15%2fSD8fuH.jpg&ehk=QyLgcE5MLiqOvBWDSErvoqWv%2fBSzesqrPygYfOpCwwY%3d&risl=&pid=ImgRaw&r=0",
          "openingHours": "08:00-17:30",
          "address": "江西省上饶市弋阳县320国道",
          "ticketPrice": "90元"
        },
        "7007": {
          "name": "鄱阳湖国家湿地公园",
          "description": "鄱阳湖国家湿地公园围绕鄱阳湖为主体，集湖泊、河流、草洲、泥滩、岛屿、泛滥地、池塘等景观，是纯自然生态的复合型湿地公园。",
          "image": "https://tse2-mm.cn.bing.net/th/id/OIP-C.D7hjpbL-Q6bP-SN4eCSwyQHaDo?rs=1&pid=ImgDetMain",
          "openingHours": "09:00~18:00",
          "address": "江西省上饶市鄱阳县",
          "ticketPrice": "120元"
        },
        
          "8001": {
            "name": "大觉山",
            "description": "大觉山以“九天”（天湖、天岭、天岩、天廊、天桥、天街、天泉、天台、天界）和“八地”（莲花峰、神龟峰、笔架峰、翠屏峰、将军峰、文曲峰、叠罗峰、金刚峰）等旅游资源著称，融自然生态和佛教文化于一体。",
            "image": "https://tse1-mm.cn.bing.net/th/id/OIP-C.wji7wkUHxdFV_o9zdx5BLQHaEs?rs=1&pid=ImgDetMain",
            "openingHours": "夏令时08:00-17:00，冬令时08:00-16:30",
            "address": "江西省抚州市资溪县建设东路14号",
            "ticketPrice": "具体票价请咨询景区"
          },
          "8002": {
            "name": "名人雕塑园",
            "description": "名人雕塑园是一个集学术研究、文化传承、教育娱乐、旅游休闲于一体的城市主题文化生态园，也是抚州著名的城市大型主题公园。",
            "image": "https://tse4-mm.cn.bing.net/th/id/OIP-C.5Ck7TNr8uvhaebLODhO-ZwHaEK?rs=1&pid=ImgDetMain",
            "openingHours": "全天开放",
            "address": "江西省抚州市临川区",
            "ticketPrice": "免费"
          },
          "8003": {
            "name": "梦湖景区",
            "description": "梦湖景区是一处环境优美的城市公园，公园的绿树繁茂，景色优美，必去的景点就是梦园，这是人工湖中的小岛，环境清幽。",
            "image": "https://tse1-mm.cn.bing.net/th/id/OIP-C.wSdPAxKW402XLqaHkP-rXAHaE8?rs=1&pid=ImgDetMain",
            "openingHours": "全天开放",
            "address": "江西省抚州市临川区梦湖西路",
            "ticketPrice": "免费"
          },
          "8004": {
            "name": "流坑古村",
            "description": "流坑古村是江西一处原生态古村，有着上千年的历史，被誉为“千古第一村”，古建筑群保存完好，拥有众多历史文化遗存。",
            "image": "https://tse3-mm.cn.bing.net/th/id/OIP-C.JaqVM04nA1NfwHIUAORGIQHaE7?rs=1&pid=ImgDetMain",
            "openingHours": "08:00-17:30",
            "address": "江西省抚州市乐安县牛田镇流坑村",
            "ticketPrice": "具体票价请咨询景区"
          },
          "8005": {
            "name": "黎川明清老街",
            "description": "黎川明清老街是江西省保存较为完好的古街之一，距今已有近千年的历史，被誉为千年江南骑楼老街，古朴静谧的老街，保留着600余家骑楼式店铺。",
            "image": "https://img1.qunarzz.com/travel/poi/1707/e1/563f194d55791837.jpg_480x360x95_8c4cd48a.jpg",
            "openingHours": "全天开放",
            "address": "江西省抚州市黎川县人民路",
            "ticketPrice": "免费"
          },
          "8006": {
            "name": "古樟林风景区",
            "description": "古樟林风景区被称为中国第一古樟林，有着十里香樟的称号，古樟树参天耸立，保留着数百年历史的树木。",
            "image": "https://tse3-mm.cn.bing.net/th/id/OIP-C.f9uGNq53PJ5tkmE4JfdHYgHaE6?rs=1&pid=ImgDetMain",
            "openingHours": "全天开放",
            "address": "江西省抚州市乐安县牛田镇古樟林",
            "ticketPrice": "免费"
          },
          "8007": {
            "name": "正觉古寺",
            "description": "正觉古寺是江西的一座宝藏寺庙，香火旺盛，建筑金碧辉煌，矗立的宝塔十分壮观，环境清幽。",
            "image": "https://tse2-mm.cn.bing.net/th/id/OIP-C.B1j5TLz0HCf3j5eZPyLFKAHaEo?rs=1&pid=ImgDetMain",
            "openingHours": "08:00-17:30",
            "address": "江西省抚州市临川区横街143号",
            "ticketPrice": "免费"
          },
          
            "9001": {
              "name": "井冈山风景区",
              "description": "井冈山是中国革命的摇篮，是我国著名的红色旅游景点。这里不仅有深厚的历史底蕴，还有秀丽的自然风光。山清水秀，自然风光旖旎，在欣赏景色的同时，感悟老一辈革命的伟大精神。",
              "image": "https://ts1.cn.mm.bing.net/th/id/R-C.6f94b08776d97b3b4c4bfc9ec6ee854b?rik=XLrTUCMDf3PHhQ&riu=http%3a%2f%2fwww.k1u.com%2fd%2ffile%2f20230412%2f1681290467969129.jpg&ehk=O2ErIKQpVv88YNqzYCsznbBNj7I5yX08ZSZIhTAXoyI%3d&risl=&pid=ImgRaw&r=0",
              "openingHours": "全天开放",
              "address": "江西省吉安市井冈山市",
              "ticketPrice": "具体票价请咨询景区"
            },
            "9002": {
              "name": "庐陵文化生态园",
              "description": "庐陵文化生态园是一个反映庐陵人文精神和文化的景区，植被资源丰富，且融合了宗教文化、民俗文化、书院文化等，人文景观丰富，十分具有鉴赏价值。",
              "image": "https://tse2-mm.cn.bing.net/th/id/OIP-C.0mpRHQ-HWo1WhgCFf5kEHQHaDa?rs=1&pid=ImgDetMain",
              "openingHours": "全天开放",
              "address": "江西省吉安市中心城区北端",
              "ticketPrice": "免费"
            },
            "9003": {
              "name": "渼陂古村",
              "description": "渼陂古村是一个依山傍水，景色迷人的古村落。这里的建筑风格以明清建筑为基调，融入了书院、祠堂、宗教等风格，在建筑史上独树一帜，十分具有魅力。在这里可以感受到浓浓的人文气息和庐陵文化，值得细细品味。",
              "image": "https://ts1.cn.mm.bing.net/th/id/R-C.e3861a0ba71fce579822503b4e3c95ce?rik=EgMHY1CCDe5odQ&riu=http%3a%2f%2fimg1.qunarzz.com%2ftravel%2fd2%2f1702%2f53%2fee068585b129f4b5.jpg%3fver%3d1&ehk=vcUJp83WKqQFunCN1I2wi9A9qYeCUUwzbrxRtO4pn%2b0%3d&risl=&pid=ImgRaw&r=0",
              "openingHours": "08:00-17:30",
              "address": "江西省吉安市青原区渼陂古村",
              "ticketPrice": "具体票价请咨询景区"
            },
            "9004": {
              "name": "吉州窑遗址公园",
              "description": "吉州窑遗址公园是一个以窑为主题的公园，里面有众多窑的遗址，还陈列了各式各样的旧瓷器。在这里可以亲身体验陶艺带来的艺术魅力，了解窑的历史和发展，不得不感叹中国文化和艺术的博大精深。",
              "image": "https://tse1-mm.cn.bing.net/th/id/OIP-C.0kV425hQinn4Urs6EDTFogHaE7?rs=1&pid=ImgDetMain",
              "openingHours": "08:00-17:30",
              "address": "江西省吉安市",
              "ticketPrice": "具体票价请咨询景区"
            },
            "9005": {
              "name": "青原山",
              "description": "青原山是一座充满着佛教色彩的原始山脉，这里人文气息浓郁，历史悠久。这里的阳明书院是吉州最早的书院，距今已有500多年的历史。人文景观与自然风光相得益彰，让人流连忘返。",
              "image": "https://tse2-mm.cn.bing.net/th/id/OIP-C.osSnDZPf1Zf_qSO6YSaHrAHaE7?rs=1&pid=ImgDetMain",
              "openingHours": "08:00-17:30",
              "address": "江西省吉安市河东乡南境",
              "ticketPrice": "免费"
            },
            "9006": {
              "name": "万安七古塔",
              "description": "万安七古塔历史悠久，每座古塔风格迥异，造型独特，且制作精良与美观。这里有浓厚的历史底蕴和充满着传奇色彩的故事，古朴的气息让人神往。",
              "image": "https://tse3-mm.cn.bing.net/th/id/OIP-C.Bu4XGS2lXZFga8kXaYajqAHaFj?rs=1&pid=ImgDetMain",
              "openingHours": "全天开放",
              "address": "江西省吉安市万安县",
              "ticketPrice": "免费"
            },
            "9007": {
              "name": "钓源古村",
              "description": "钓源古村历史悠久，始于北宋时期，是我国的历史文化名村。这里历史文化底蕴深厚，还保留有众多古建筑。建筑风格精美独特，位于群山绿水中，像是一幅绝美的水墨画，因此也被誉为中国最美古村落。",
              "image": "https://x0.ifengimg.com/ucms/2021_33/EFB093993BBA0BD0C566E35773ACC93EAB9E2E66_size249_w1080_h810.jpg",
              "openingHours": "08:00-17:00 最晚入园：16:30",
              "address": "江西省吉安市吉州区兴桥镇钓源村委会庄山村1号",
              "ticketPrice": "具体票价请咨询景区"
            }    
    };

    const spot = spotData[spotId];
    if (spot) {
      this.setData({
        spot: {
          ...spot,
          id: spotId  // 添加id字段
        }
      });
    } else {
      console.error("景点数据未找到");
    }
  },

  // 点击预约购票跳转到行程选择页面
  onBookTicket() {
    if (!this.data.isLoggedIn) {
      wx.showModal({
        title: '提示',
        content: '请先登录后再购票',
        success: (res) => {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/login/login'
            });
          }
        }
      });
      return;
    }

    wx.navigateTo({
      url: `/pages/plan_select/plan_select?spotId=${this.data.spot.id}&spotName=${this.data.spot.name}`
    });
  },

  onBack() {
    wx.navigateBack(); // 返回上一页
  }
});
