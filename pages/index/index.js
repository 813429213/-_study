Page({
  data: {
    // 城市列表
    cities: ["南昌", "景德镇", "赣州", "九江", "宜春", "萍乡", "上饶", "抚州", "吉安"],
    selectedCity: "南昌",  // 默认选中的城市
    recommendedSpots: [],  // 存储推荐景点的数据
    searchInputValue: ""
  },

  onLoad() {
    // 页面加载时获取推荐景点数据
    this.loadRecommendedSpots();

    // 确保全局应用实例存在且有globalData属性
    const app = getApp();
    if (!app.globalData) {
      app.globalData = {};
    }

    // 将所有景点数据存储到全局数据中，方便在搜索结果页面获取
    app.globalData.allSpots = this.data.recommendedSpots;
  },

  // 加载推荐景点
  loadRecommendedSpots() {
    // 根据选中的城市加载景点数据
    const selectedCity = this.data.selectedCity;
    const allSpots = this.getAllSpotsByCity(selectedCity);

    // 更新推荐景点数据
    this.setData({
      recommendedSpots: allSpots
    });
  },

  // 根据城市返回不同的景点数据
  getAllSpotsByCity(city) {
    // 示例数据：可以根据实际需求修改或通过API获取数据
    const allSpots = {
      "南昌": [
        {
          id: 1001,
          name: "江西师范大学",
          description: "静思笃行、持中秉正",
          image: "https://ts1.cn.mm.bing.net/th/id/R-C.9eb288fea7334837540e8dd81187ed27?rik=1ySnWdYgnrD07A&riu=http%3a%2f%2fwww.jdxzz.com%2fuploads%2fallimg%2f200410%2f7-200410162035-50.jpg&ehk=Qla2nkkgUrDCRmqni0F5RjcCAiMEh%2bPHrhm9qh4kjl8%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          id: 1002,
          name: "八一起义纪念馆",
          description: "为纪念南昌起义而设立的专题纪念馆",
          image: "https://kimi-img.moonshot.cn/webimg2/img95.699pic.com/f7c6bfed224b437219b414a07e123f9549314fdb",
        },
        {
          id: 1003,
          name: "滕王阁",
          description: "赣江东岸，被誉为江南三大名楼之一",
          image: "https://kimi-img.moonshot.cn/webimg2/p1.ssl.qhmsg.com/e3329c5afc559817c94d3459d17fc8137a9bf893",
          location: "南昌"
        },
        {
          id: 1004,
          name: "梅岭",
          description: "是中国古典音律和道教净明宗的发源地之一",
          image: "https://kimi-img.moonshot.cn/webimg2/pic1.k1u.com/cd81017ba1466bdf010a2ed931eeb7a9b4fd3afe",
          location: "南昌"
        },
        {
          id: 1005,
          name: "绳金塔",
          description: "南昌人心中的镇城之宝",
          image: "https://kimi-img.moonshot.cn/webimg2/img1.qunarzz.com/015543143f8ae8398d64fc7788a813b17d4fac42",
          location: "南昌"
        },
        {
          id: 1006,
          name: "南昌之星摩天轮",
          description: "世界上第三高的摩天轮",
          image: "https://kimi-img.moonshot.cn/webimg2/pic1.k1u.com/37be6d1dca1467874d48d93fb6ca8b5b860bf382",
          location: "南昌"
        },
        {
          id: 1007,
          name: "八一广场",
          description: "江西省的著名山脉，拥有丰富的自然景观。",
          image: "https://kimi-img.moonshot.cn/webimg2/so1.360tres.com/5ff8224193d886e8f778203b03a93b7036a93a0a",
          location: "南昌"
        }
      
      ],
      "景德镇": [
        { id: 2001, name: "景德镇陶瓷博物馆", description: "展示景德镇的陶瓷文化和历史", image: "https://p1.ssl.qhmsg.com/t01d9006abf9235d52b.jpg", },
        {id:2002, name:"历史古窑展示区", description:"全国唯一一家以陶瓷文化为主题的国家AAAAA级旅游景区", image:"https://kimi-img.moonshot.cn/webimg2/www.chinaguyao.com/3abe83fa3c4e9ba03025bba84e77bfe8f962d3df"},
        {id:2003, name:"陶溪川", description:"前身是景德镇宇宙瓷厂，是一个充满活力与创意的街区", image:"https://kimi-img.moonshot.cn/webimg2/img.zcool.cn/4452980990bdb9dd8e9d785b422e627beee8e8e6"},
        {id:2004, name:"御窑博物馆", description:"一个集考古、文保和展示为一体的综合性文博机构", image:"https://kimi-img.moonshot.cn/webimg2/img.d-arts.cn/88ffa2ce18d24f442def5ade8c375f5640e384fe"},
        {id:2005, name:"瓷宫", description:"全身镶嵌了数万件各色瓷片、瓷瓶、瓷盘", image:"https://kimi-img.moonshot.cn/webimg2/tr-osdcp.qunarzz.com/b092ef7b83096f37b3abb374420debc5b9628d01"},
        {id:2006, name:"三宝村", description:"景德镇古代瓷业生产提供主要瓷土原料的重要矿产地", image:"https://kimi-img.moonshot.cn/webimg2/img1.qunarzz.com/a26fdf5f00f1e92796ea7de8dcc6d808b4029f53"},
        { id: 2001, name: "景德镇陶瓷博物馆", description: "展示景德镇的陶瓷文化和历史", image: "https://p1.ssl.qhmsg.com/t01d9006abf9235d52b.jpg"}
      ],
      "赣州":[
        {
          "id": 3001,
          "name": "郁孤台",
          "description": "登上郁孤台楼，江城烟云，内外景色尽收眼底",
          "image": "https://kimi-img.moonshot.cn/webimg2/www.yebaike.com/5465bc5a51654a67215298beb61be94822decd7e"
        },
        {
          "id": 3002,
          "name": "八镜台",
          "description": "具有近千年的历史，是赣州古城的象征",
          "image": "https://kimi-img.moonshot.cn/webimg2/k.sinaimg.cn/4c3a9993e14e6e29e06025778827b96ba7e4440f"
        },
        {
          "id": 3003,
          "name": "宋朝不夜城",
          "description": "宋朝不夜城展现了当时社会的繁荣和百姓丰富多彩的夜生活",
          "image": "https://kimi-img.moonshot.cn/webimg2/x0.ifengimg.com/8e2ad179a594bdd63c3b320fab039f32644c51e1"
        },
        {
          "id": 3004,
          "name": "通天岩",
          "description": "通天岩以其壮观的自然景观和丰富的摩崖石刻而闻名",
          "image": "https://tse3-mm.cn.bing.net/th/id/OIP-C.9-BnRcXIUHQUVw5hhgoH7gHaEL?rs=1&pid=ImgDetMain"
        },
        {
          "id": 3005,
          "name": "灶儿巷",
          "description": "灶儿巷是一个历史悠久的文化街巷，保留了多种风格的古建筑。",
          "image": "https://tse3-mm.cn.bing.net/th/id/OIP-C.kzs-KVenHIGmgIaNYzEjHwHaJf?rs=1&pid=ImgDetMain"
        },
        {
          "id": 3006,
          "name": "上堡梯田",
          "description": "上堡梯田是国内三大梯田奇观之一，梯田景观美不胜收。",
          "image": "https://tse1-mm.cn.bing.net/th/id/OIP-C.DUPHsmZjPQmR39IqK5g-wAHaFq?rs=1&pid=ImgDetMain"
        },
        {
          "id": 3007,
          "name": "关西客家围",
          "description": "关西客家围是国内保存最完整、规模最大的赣南客家围屋，有‘东方古罗马城堡’的美誉。",
          "image": "https://tse3-mm.cn.bing.net/th/id/OIP-C.gRgysoqeyaLoc3BGpUlsaAHaEx?rs=1&pid=ImgDetMain"
        }
      ],
      "九江":[
        {
          "id": 4001,
          "name": "庐山风景区",
          "description": "庐山是中国十大名山之一，以雄、奇、秀、险闻名于世，素有‘匡庐奇秀甲天下’之美誉。",
          "image": "https://pic.kuaizhan.com/g3/b7/18/7a16-bad5-4d28-b5aa-571710c674cb36"
        },
        {
          "id": 4002,
          "name": "东林寺",
          "description": "东林寺是佛教净土宗的发源地，对一些国家的佛教徒影响较大。",
          "image": "https://tr-osdcp.qunarzz.com/tr-osd-tr-mapi/img/34f3ebf686494dfb3ca3b400cbb74b81.jpg"
        },
        {
          "id": 4003,
          "name": "鄱阳湖国家湿地公园",
          "description": "鄱阳湖是中国最大的淡水湖，湿地公园以其丰富的湿地生态和候鸟资源而闻名。",
          "image": "https://tse3-mm.cn.bing.net/th/id/OIP-C.fvjzVaFjFd7ZvyO3dvisvgHaE8?rs=1&pid=ImgDetMain"
        },
        {
          "id": 4004,
          "name": "浔阳楼",
          "description": "浔阳楼是江南四大名楼之一，因《水浒传》中的宋江题反诗而闻名。",
          "image": "https://pic4.40017.cn/scenery/destination/2017/01/24/17/eokw9R.jpg"
        },
        {
          "id": 4005,
          "name": "白鹿洞书院",
          "description": "白鹿洞书院是中国历史上著名的四大书院之一，有着深厚的文化底蕴。",
          "image": "https://n.sinaimg.cn/sinacn10121/255/w1200h655/20190709/fa00-hzrevpz2721747.jpg"
        },
        {
          "id": 4006,
          "name": "锁江楼",
          "description": "锁江楼是九江市的标志性建筑之一，位于长江之滨，历史悠久。",
          "image": "https://ts1.cn.mm.bing.net/th/id/R-C.cba725f774e41efef17bcb59a29c02a8?rik=7JUgUb4FXgHdQA&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20110408%2f20110408201920-2007915869.jpg&ehk=%2bgUD2f%2fTb0uB%2bnEhQKClfGB2ismKoHZwbv3xQ2gwLr4%3d&risl=&pid=ImgRaw&r=0"
        }
      ],
      "宜春":[
        {
          "id": 5001,
          "name": "明月山风景区",
          "description": "明月山以其秀丽的自然风光和丰富的文化底蕴而闻名，是休闲旅游的好去处。",
          "image": "https://imgs.qunarzz.com/sight/p0/1410/14/e72fc58a0d4a1d3067274506682532c0.jpg_710x360_ec585de2.jpg"
        },
        {
          "id": 5002,
          "name": "三清山风景区",
          "description": "三清山以其奇特的花岗岩地貌、秀美的山水风光和丰富的道教文化而闻名。",
          "image": "https://www.sqs373.com/UploadFiles/news/2020/2/202002210436340251.jpg"
        },
        {
          "id": 5003,
          "name": "宜春鼓楼",
          "description": "宜春鼓楼是宜春市的标志性建筑，历史悠久，体现了古代建筑艺术的精湛技艺。",
          "image": "https://tse3-mm.cn.bing.net/th/id/OIP-C.CEeyLGynuXr6VYBliFOLGgHaEt?rs=1&pid=ImgDetMain"
        },
        {
          "id": 5004,
          "name": "宜春禅博园",
          "description": "宜春禅博园是一个以禅文化为主题的公园，集禅修、文化展示、旅游休闲于一体。",
          "image": "https://ts1.cn.mm.bing.net/th/id/R-C.2ee81f99228bf66b79666e7b2890b0fb?rik=0BAjtp3yzMjg5A&riu=http%3a%2f%2fpic1.k1u.com%2fk1u%2fmb%2fd%2ffile%2f20200410%2f1586511731704190_836_10000.jpg&ehk=5zKrX1xNDZc2Ru2JdsysoFwDdytoNX3TCS7FgiBgcpI%3d&risl=&pid=ImgRaw&r=0"
        },
        {
          "id": 5005,
          "name": "靖安三爪仑国家森林公园",
          "description": "靖安三爪仑国家森林公园以其原始森林、瀑布群和丰富的生物多样性而著称。",
          "image": "https://img1.qunarzz.com/travel/d6/1806/41/2626658bce6c50b5.jpg"
        },
        {
          "id": 5006,
          "name": "宜丰洞山",
          "description": "宜丰洞山以其奇特的喀斯特地貌和丰富的溶洞景观而闻名，是探险和地质旅游的好去处。",
          "image": "https://ts1.cn.mm.bing.net/th/id/R-C.df1cd739fdee68dc35de141b8c04896f?rik=yKNZMK5yE8j4Kg&riu=http%3a%2f%2fh.usatour.com.cn%2fculture%2fl%2fhead3%2f42774.gif&ehk=mu5h0f4gWMpIkBr7EunF1nsLaY%2b7LL%2bPHurR9%2fM%2biu0%3d&risl=&pid=ImgRaw&r=0"
        }
      ],
      "萍乡":[
        {
          "id": 6001,
          "name": "萍乡武功山国家级风景名胜区",
          "description": "武功山是国家级风景名胜区、国家自然遗产，享有“户外天堂、云中草原”之美誉。",
          "image": "https://ts1.cn.mm.bing.net/th/id/R-C.90c54825ee0ecadb563ec986af0aa904?rik=06eF6Xp%2flq1RRA&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fphotoblog%2f1308%2f02%2fc9%2f24067809_24067809_1375452083312_mthumb.jpg&ehk=3kU4RXXqQw4O4pRLv8r36TJ2jNaytfMsUyrHFGucmr8%3d&risl=&pid=ImgRaw&r=0"
        },
        {
          "id": 6002,
          "name": "杨岐山风景名胜区",
          "description": "杨岐山风景名胜区由杨岐普通寺景区、孽龙洞景区、凤鸣湖景区、九龙洞景区四个景区以及瑶金山寺、李畋故居等外围景点组成。",
          "image": "https://newpic.jxnews.com.cn/0/11/43/18/11431816_987769.jpg"
        },
        {
          "id": 6003,
          "name": "萍乡孽龙洞风景旅游区",
          "description": "孽龙洞风景旅游区是一个充满神秘感和美丽景色的旅游胜地。",
          "image": "https://ts1.cn.mm.bing.net/th/id/R-C.e4859a4e536bcced7dd5295f4befdbc8?rik=oi9Gys5iVEC17w&riu=http%3a%2f%2fpic1.k1u.com%2fk1u%2fmb%2fd%2ffile%2f20210428%2f1619595347857958_836_10000.jpg&ehk=TYeXax6GbSMKvJQ6y4pZEil7WfPsHXq7LhpNJkhWHXk%3d&risl=&pid=ImgRaw&r=0"
        },
        {
          "id": 6004,
          "name": "安源路矿工人运动纪念馆",
          "description": "安源路矿工人运动纪念馆是为纪念中国共产党领导的第一次工人运动而建立的专题类纪念馆。",
          "image": "https://ts1.cn.mm.bing.net/th/id/R-C.1c03dd12f24bb85d94798a19fb601d14?rik=oVSRGriCVjuAtQ&riu=http%3a%2f%2fwww.hongsegutian.com%2fUploads%2fEditor%2fPicture%2f2019-04-29%2f5cc654813e230.jpg&ehk=Hd9156KnpZrInXhvoPUVhDbeSjrR21uAFeKlMJHHy9k%3d&risl=&pid=ImgRaw&r=0"
        },
        {
          "id": 6005,
          "name": "秋收起义广场",
          "description": "秋收起义广场是为纪念秋收起义而建立的纪念性广场。",
          "image": "https://so1.360tres.com/t014c572ceade77d96c.png"
        },
        {
          "id": 6006,
          "name": "萍乡龙溪秘境景区",
          "description": "龙溪秘境景区以其优美的自然风光和清新的空气吸引着众多游客。",
          "image": "https://tse4-mm.cn.bing.net/th/id/OIP-C.rAnauqJy5_9S-5OG3ifyfQHaFA?rs=1&pid=ImgDetMain"
        },
        {
          "id": 6007,
          "name": "萍乡三湾生态旅游景区",
          "description": "三湾生态旅游景区是一个集生态旅游、休闲度假为一体的综合性景区。",
          "image": "https://www.hanpokou.com/wp-content/uploads/2021/12/17f99c15d04f12790a78f822774fe17a-768x472.jpg"
        }
      ],
      "上饶":[
        {
          "id": 7001,
          "name": "上饶望仙谷",
          "description": "是悬崖民宿和仙宿交织的梦幻之地，以清澈的溪水、茂密的森林和壮观的瀑布而著称。",
          "image": "https://p8.qhimg.com/t010f289cf310b623f7.jpg"
        },
        {
          "id": 7002,
          "name": "李坑景区",
          "description": "有乌镇的建筑景观，又有兔耳岭怪石景观，是国家AAAA级旅游景区。",
          "image": "https://img1.qunarzz.com/travel/d4/1707/83/4bd5f43278255eb5.jpg_480x360x95_9a7c281c.jpg"
        },
        {
          "id": 7003,
          "name": "月亮湾",
          "description": "因恰如月亮的形态、隔岸徽派民居的典雅、周边秀美的景色相融合。",
          "image": "https://tse1-mm.cn.bing.net/th/id/OIP-C.d0AvEHKGAsCs2Vdka-lcBQHaE7?rs=1&pid=ImgDetMain"
        },
        {
          "id": 7004,
          "name": "上饶灵山风景区",
          "description": "灵山一直被上饶人亲切地称为“家门口的风景”",
          "image": "https://ts1.cn.mm.bing.net/th/id/R-C.9fb9f3a658ef35a2bb6f729ae3434445?rik=dwTx5eIvfeTSSA&riu=http%3a%2f%2fpic4.40017.cn%2fscenery%2fdestination%2f2016%2f11%2f29%2f17%2f3Yn57m.jpg&ehk=FCBpVEyGr%2f7tOhJ2lZlCyHhyUOqVmuj%2bgXWtmjvZIIk%3d&risl=&pid=ImgRaw&r=0"
        },
        {
          "id": 7005,
          "name": "三清山风景区",
          "description": "三清山是上饶最有名的景区，宛如道教玉清、上清、太清三位尊神列坐山巅之上。",
          "image": "https://www.sqs373.com/UploadFiles/news/2020/2/202002210436340251.jpg"
        },
        {
          "id": 7006,
          "name": "龟峰风景名胜区",
          "description": "龟峰是典型的丹霞地貌，因景区内“无山不龟，无石不龟”的独特自然景观而得名。",
          "image": "https://ts1.cn.mm.bing.net/th/id/R-C.de3fbe806bc9628fa6b6ef1e7b14f4a0?rik=IzjSxEISj6lFLA&riu=http%3a%2f%2fpic4.40017.cn%2fscenery%2fdestination%2f2017%2f01%2f20%2f15%2fSD8fuH.jpg&ehk=QyLgcE5MLiqOvBWDSErvoqWv%2fBSzesqrPygYfOpCwwY%3d&risl=&pid=ImgRaw&r=0"
        },
        {
          "id": 7007,
          "name": "鄱阳湖国家湿地公园",
          "description": "集湖泊、河流、草洲、泥滩、岛屿、泛滥地、池塘等景观。",
          "image": "https://tse2-mm.cn.bing.net/th/id/OIP-C.D7hjpbL-Q6bP-SN4eCSwyQHaDo?rs=1&pid=ImgDetMain"
        }
      ],
      "抚州":[
        {
          "id": 8001,
          "name": "大觉山",
          "description": "大觉山以“九天”和“八地”等旅游资源著称。",
          "image": "https://tse1-mm.cn.bing.net/th/id/OIP-C.wji7wkUHxdFV_o9zdx5BLQHaEs?rs=1&pid=ImgDetMain"
        },
        {
          "id": 8002,
          "name": "名人雕塑园",
          "description": "抚州著名的城市大型主题公园。",
          "image": "https://tse4-mm.cn.bing.net/th/id/OIP-C.5Ck7TNr8uvhaebLODhO-ZwHaEK?rs=1&pid=ImgDetMain"
        },
        {
          "id": 8003,
          "name": "梦湖景区",
          "description": "景色优美，必去的景点就是梦园，这是人工湖中的小岛，环境清幽。",
          "image": "https://tse1-mm.cn.bing.net/th/id/OIP-C.wSdPAxKW402XLqaHkP-rXAHaE8?rs=1&pid=ImgDetMain"
        },
        {
          "id": 8004,
          "name": "流坑古村",
          "description": "被誉为“千古第一村”，古建筑群保存完好，拥有众多历史文化遗存。",
          "image": "https://tse3-mm.cn.bing.net/th/id/OIP-C.JaqVM04nA1NfwHIUAORGIQHaE7?rs=1&pid=ImgDetMain"
        },
        {
          "id": 8005,
          "name": "黎川明清老街",
          "description": "被誉为千年江南骑楼老街，古朴静谧的老街，保留着600余家骑楼式店铺。",
          "image": "https://img1.qunarzz.com/travel/poi/1707/e1/563f194d55791837.jpg_480x360x95_8c4cd48a.jpg"
        },
        {
          "id": 8006,
          "name": "古樟林风景区",
          "description": "中国第一古樟林，有着十里香樟的称号，古樟树参天耸立，保留着数百年历史的树木。",
          "image": "https://tse3-mm.cn.bing.net/th/id/OIP-C.f9uGNq53PJ5tkmE4JfdHYgHaE6?rs=1&pid=ImgDetMain"
        },
        {
          "id": 8007,
          "name": "正觉古寺",
          "description": "一座宝藏寺庙，香火旺盛，建筑金碧辉煌，环境清幽。",
          "image": "https://tse2-mm.cn.bing.net/th/id/OIP-C.B1j5TLz0HCf3j5eZPyLFKAHaEo?rs=1&pid=ImgDetMain"
        }
      ],
      "吉安":[
        {
          "id": 9001,
          "name": "井冈山风景区",
          "description": "井冈山是中国革命的摇篮，是我国著名的红色旅游景点。",
          "image": "https://ts1.cn.mm.bing.net/th/id/R-C.6f94b08776d97b3b4c4bfc9ec6ee854b?rik=XLrTUCMDf3PHhQ&riu=http%3a%2f%2fwww.k1u.com%2fd%2ffile%2f20230412%2f1681290467969129.jpg&ehk=O2ErIKQpVv88YNqzYCsznbBNj7I5yX08ZSZIhTAXoyI%3d&risl=&pid=ImgRaw&r=0"
        },
        {
          "id": 9002,
          "name": "庐陵文化生态园",
          "description": "庐陵文化生态园是一个反映庐陵人文精神和文化的景区。",
          "image": "https://tse2-mm.cn.bing.net/th/id/OIP-C.0mpRHQ-HWo1WhgCFf5kEHQHaDa?rs=1&pid=ImgDetMain"
        },
        {
          "id": 9003,
          "name": "渼陂古村",
          "description": "渼陂古村是一个依山傍水，景色迷人的古村落。",
          "image": "https://ts1.cn.mm.bing.net/th/id/R-C.e3861a0ba71fce579822503b4e3c95ce?rik=EgMHY1CCDe5odQ&riu=http%3a%2f%2fimg1.qunarzz.com%2ftravel%2fd2%2f1702%2f53%2fee068585b129f4b5.jpg%3fver%3d1&ehk=vcUJp83WKqQFunCN1I2wi9A9qYeCUUwzbrxRtO4pn%2b0%3d&risl=&pid=ImgDetMain&r=0"
        },
        {
          "id": 9004,
          "name": "吉州窑遗址公园",
          "description": "在这里可以亲身体验陶艺带来的艺术魅力，了解窑的历史和发展。",
          "image": "https://tse1-mm.cn.bing.net/th/id/OIP-C.0kV425hQinn4Urs6EDTFogHaE7?rs=1&pid=ImgDetMain"
        },
        {
          "id": 9005,
          "name": "青原山",
          "description": "阳明书院是吉州最早的书院，距今已有500多年的历史。",
          "image": "https://tse2-mm.cn.bing.net/th/id/OIP-C.osSnDZPf1Zf_qSO6YSaHrAHaE7?rs=1&pid=ImgDetMain"
        },
        {
          "id": 9006,
          "name": "万安七古塔",
          "description": "每座古塔风格迥异，造型独特，且制作精良与美观。",
          "image": "https://tse3-mm.cn.bing.net/th/id/OIP-C.Bu4XGS2lXZFga8kXaYajqAHaFj?rs=1&pid=ImgDetMain"
        },
        {
          "id": 9007,
          "name": "钓源古村",
          "description": "始于北宋时期被誉为中国最美古村落。",
          "image": "https://x0.ifengimg.com/ucms/2021_33/EFB093993BBA0BD0C566E35773ACC93EAB9E2E66_size249_w1080_h810.jpg"
        }
      ]
      
      // 添加其他城市数据
    };

    return allSpots[city] || [];
  },

  // 城市选择变化时的处理函数
  onCityChange(e) {
    const selectedCity = e.currentTarget.dataset.city;
    this.setData({
      selectedCity: selectedCity
    });

    // 根据选择的城市更新推荐景点
    this.loadRecommendedSpots();
  },

  // 搜索输入框输入事件
  onSearchInput(e) {
    const searchTerm = e.detail.value;
    this.setData({
      searchInputValue: searchTerm
    });
  },

  // 搜索按钮点击事件
  onSearchButtonClick() {
    const searchTerm = this.data.searchInputValue;
    if (searchTerm) {
      // 确保全局应用实例存在且有globalData属性，并获取所有景点数据
      const app = getApp();
      if (!app.globalData) {
        app.globalData = {};
      }
      const allSpots = app.globalData.allSpots;
  
      // 根据搜索词过滤出符合的景点数据
      const filteredSpots = allSpots.filter(spot => {
        return spot.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
  
      // 跳转到搜索结果页面，并传递过滤后的景点数据
      const encodedData = encodeURIComponent(JSON.stringify(filteredSpots));
      wx.navigateTo({
        url: `/pages/searchResult/searchResult?data=${encodedData}`
      });      
    } else {
      console.log("请先输入搜索内容。");
    }
  },


  // 点击景点时，跳转到景点详情页面
  onSpotClick(e) {
    const spotId = e.currentTarget.dataset.id;
    console.log("点击的景点ID: ", spotId);

    // 跳转到景点详情页，传递景点ID
    wx.navigateTo({
      url: `/pages/spotDetail/spotDetail?id=${spotId}`
    });
  },

  // 酒店按钮点击事件处理函数
  onHotelClick() {
    wx.navigateTo({
      url: '/pages/hotel/hotel'
    });
  },

  // 天气按钮点击事件处理函数
  onWeatherClick() {
    wx.navigateTo({
      url: '/pages/weather/weather'
    });
  },

  // 打车按钮点击事件处理函数
  onTaxiClick() {
    wx.showModal({
      title: '位置权限请求',
      content: '打车功能需要获取您的位置信息，是否允许？',
      success: (res) => {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/taxi/taxi'
          });
        }
      }
    });
  }
});