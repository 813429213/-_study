Page({
  data: {
    hotels: [
      {
        id: 1,
        name: '南昌万达嘉华酒店',
        image: 'https://dimg04.c-ctrip.com/images/1mc2n12000ewnaa2e8AC7_W_1080_808_R5_D.jpg',
        rating: 4.8,
        price: 588,
        address: '红谷滩新区会展路999号',
        tags: ['五星级', '商务出行', '会议', '亲子'],
        keywords: ['万达', '嘉华', '红谷滩', '会展中心', '五星级']
      },
      {
        id: 2,
        name: '南昌格兰云天国际酒店',
        image: 'https://dimg04.c-ctrip.com/images/0AD1o120008wycn69DE99_W_1080_808_R5_D.jpg',
        rating: 4.7,
        price: 468,
        address: '东湖区胜利路355号',
        tags: ['四星级', '地铁周边', '商务','家庭'],
        keywords: ['格兰云天', '东湖区', '地铁', '四星级']
      },
      {
        id: 3,
        name: '麗枫酒店(南昌红谷滩店)',
        image: 'https://dimg04.c-ctrip.com/images/1mc1k12000duh72ga2E3F_W_1080_808_R5_D.jpg',
        rating: 4.7,
        price: 268,
        address: '南昌红谷滩区红谷滩新区金融大街与飞虹路交叉口现代茗园4号楼',
        tags: ['三星级', '地铁周边', '舒适','江景'],
        keywords: ['麗枫', '红谷滩区', '地铁', '三星级']
      },
      {
        id: 4,
        name: '景德镇浮梁希尔顿欢朋酒店',
        image: 'https://dimg04.c-ctrip.com/images/1mc1w12000aozt0ov2CDD_W_1080_808_R5_D.jpg',
        rating: 4.8,
        price: 294,
        address: '浮梁朝阳东大道122号',
        tags: ['四星级', '市中心', '舒适','商务'],
        keywords: ['希尔顿', '浮梁', '朝阳东大道', '四星级']
      },
      {
        id: 5,
        name: '赣州沃尔顿皇家花园酒店',
        image: 'https://dimg04.c-ctrip.com/images/02036120008ql85b18C2A_W_1080_808_R5_D.jpg',
        rating: 4.7,
        price: 429,
        address: '赣州章贡区橙乡大道26号',
        tags: ['四星级', '市中心', '舒适','商务'],
        keywords: ['沃尔顿', '章贡', '橙乡大道', '四星级']
      },
      {
        id: 6,
        name: '吉安格兰云天国际酒店',
        image: 'https://dimg04.c-ctrip.com/images/0204m120009ndmclw3A38_W_1080_808_R5_D.jpg',
        rating: 4.8,
        price: 389,
        address: '吉安吉州区阳明西路吉安国际会展中心正对面',
        tags: ['四星级', '市中心', '舒适','商务'],
        keywords: ['格兰云天', '吉州', '会展中心', '四星级']
      },
    ],
    allHotels: [],
    keyword: ''
  },

  onLoad() {
    this.setData({
      allHotels: this.data.hotels
    });
  },

  // 搜索输入
  onSearchInput(e) {
    this.setData({
      keyword: e.detail.value
    });
  },

  // 搜索按钮点击
  onSearch() {
    const keyword = this.data.keyword.toLowerCase().trim();

    if (!keyword) {
      wx.showToast({
        title: '请输入搜索关键词',
        icon: 'none'
      });
      return;
    }

    const searchResults = this.data.allHotels.filter(hotel => 
      hotel.name.toLowerCase().includes(keyword) || 
      hotel.address.toLowerCase().includes(keyword) ||
      hotel.tags.some(tag => tag.toLowerCase().includes(keyword)) ||
      hotel.keywords.some(kw => kw.toLowerCase().includes(keyword))
    );

    const searchResultsStr = encodeURIComponent(JSON.stringify(searchResults));

    wx.navigateTo({
      url: `/pages/hotelsearchResult/hotelsearchResult?data=${searchResultsStr}`
    });
  },

  // 点击酒店卡片
  onHotelTap(e) {
    const hotelId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/hotelDetail/hotelDetail?id=${hotelId}`
    });
  }
});