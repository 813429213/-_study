Page({
  data: {
    hotel: null,
    checkInDate: '',
    checkOutDate: '',
    today: '',
    maxDate: ''
  },

  onLoad(options) {
    const hotelId = options.id;
    this.fetchHotelDetail(hotelId);
    this.initDates();
  },

  initDates() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + 6);

    this.setData({
      today: this.formatDate(today),
      checkInDate: this.formatDate(today),
      checkOutDate: this.formatDate(tomorrow),
      maxDate: this.formatDate(maxDate)
    });
  },

  formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  fetchHotelDetail(hotelId) {
    // 根据酒店ID返回对应数据
    const hotelDataMap = {
      1: {
        id: 1,
        name: '南昌万达嘉华酒店',
        rating: 4.8,
        commentCount: 2563,
        address: '红谷滩新区会展路999号',
        images: [
          'https://dimg04.c-ctrip.com/images/1mc4d12000ez9iaorEAE0_W_1080_808_R5_D.jpg',
          'https://dimg04.c-ctrip.com/images/0225e12000f623u5l37F8_W_1080_808_R5_D.jpg',
          'https://dimg04.c-ctrip.com/images/1mc1a12000eqqh5cd6D98_W_1080_808_R5_D.jpg'
        ],
        rooms: [
          {
            id: 1,
            name: '豪华大床房',
            price: 588,
            tags: ['大床', '35㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/0202v120009mngiz81E06_W_1080_808_R5_D.jpg'
          },
          {
            id: 2,
            name: '豪华双床房',
            price: 608,
            tags: ['双人床', '45㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/1mc2412000b2tz4yrC585_W_1080_808_R5_D.jpg'
          },
          {
            id: 3,
            name: '家庭联通套房',
            price: 758,
            tags: ['双人床+单人床', '55㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/1mc4h12000b2ws3z1BA8F_W_1080_808_R5_D.jpg'
          },
          {
            id: 4,
            name: '行政套房',
            price: 868,
            tags: ['大床', '60㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/1mc5w12000eqqc516881D_W_1080_808_R5_D.jpg'
          }
        ],
        facilities: [
          'WiFi',
          '停车场',
          '健身房',
          '游泳池',
          '餐厅',
          '会议室',
          '商务中心',
          '洗衣服务'
        ]
      },
      2: {
        id: 2,
        name: '南昌格兰云天国际酒店',
        rating: 4.7,
        commentCount: 1832,
        address: '南昌市东湖区胜利路355号',
        images: [
          'https://dimg04.c-ctrip.com/images/020691200082drt1m7C6E_W_1080_808_R5_D.jpg',
          'https://dimg04.c-ctrip.com/images/0AD1i120008wyfe4lA7A0_W_1080_808_R5_D.jpg',
          'https://dimg04.c-ctrip.com/images/0AD3f120008wyhthpB26D_W_1080_808_R5_D.jpg'
        ],
        rooms: [
          {
            id: 1,
            name: '江景大床房',
            price: 468,
            tags: ['大床', '32㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/0201l120009ei5zw159D1_W_1080_808_R5_D.jpg'
          },
          {
            id: 2,
            name: '豪华双床房',
            price: 498,
            tags: ['双床', '40㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/1mc5512000exy0dhr9ED5_W_1080_808_R5_D.jpg'
          },
          {
            id: 3,
            name: '江景套房',
            price: 668,
            tags: ['大床', '50㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/1mc5212000ffajrswAB1D_W_1080_808_R5_D.jpg'
          },
          {
            id: 4,
            name: '豪华家庭房',
            price: 798,
            tags: ['双人床+单人床', '60㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/200u1h000001hqjh8CD75_W_1080_808_R5_D.jpg'
          }
        ],
        facilities: [
          'WiFi',
          '停车场',
          '健身房',
          '餐厅',
          '会议室',
          '商务中心',
          '洗衣服务',
          '接机服务'
        ]
      },
      3: {
        id: 3,
        name: '麗枫酒店(南昌红谷滩店)',
        rating: 4.7,
        commentCount: 2832,
        address: '南昌红谷滩区红谷滩新区金融大街与飞虹路交叉口现代茗园4号楼',
        images: [
          'https://dimg04.c-ctrip.com/images/1mc0h12000dugl3o3FB6F_W_1080_808_R5_D.jpg',
          'https://dimg04.c-ctrip.com/images/1mc4v12000dugkhbp62D0_W_1080_808_R5_D.jpg',
          'https://dimg04.c-ctrip.com/images/200j04000000008fyC2F0_W_1080_808_R5_D.jpg'
        ],
        rooms: [
          {
            id: 1,
            name: '舒适大床房',
            price: 268,
            tags: ['大床', '32㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/0201l120009ei5zw159D1_W_1080_808_R5_D.jpg'
          },
          {
            id: 2,
            name: '豪华双床房',
            price: 358,
            tags: ['双床', '40㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/1mc5512000exy0dhr9ED5_W_1080_808_R5_D.jpg'
          },
          {
            id: 3,
            name: '江景套房',
            price: 538,
            tags: ['大床', '50㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/1mc5212000ffajrswAB1D_W_1080_808_R5_D.jpg'
          },
          {
            id: 4,
            name: '豪华家庭房',
            price: 698,
            tags: ['双人床+单人床', '60㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/200u1h000001hqjh8CD75_W_1080_808_R5_D.jpg'
          }
        ],
        facilities: [
          'WiFi',
          '停车场',
          '健身房',
          '餐厅',
          '会议室',
          '商务中心',
          '洗衣服务',
          '接机服务'
        ]
      },
      4: {
        id: 4,
        name: '景德镇浮梁希尔顿欢朋酒店',
        rating: 4.8,
        commentCount: 2894,
        address: '浮梁朝阳东大道122号',
        images: [
          'https://dimg04.c-ctrip.com/images/0200k12000a5ev76u6B39_W_1080_808_R5_D.jpg',
          'https://dimg04.c-ctrip.com/images/0204s12000a5ew077E8F6_W_1080_808_R5_D.jpg',
          'https://dimg04.c-ctrip.com/images/0200y12000a5ewi3wCE81_W_1080_808_R5_D.jpg'
        ],
        rooms: [
          {
            id: 1,
            name: '豪华大床房',
            price: 588,
            tags: ['大床', '35㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/0202v120009mngiz81E06_W_1080_808_R5_D.jpg'
          },
          {
            id: 2,
            name: '豪华双床房',
            price: 608,
            tags: ['双人床', '45㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/1mc2412000b2tz4yrC585_W_1080_808_R5_D.jpg'
          },
          {
            id: 3,
            name: '家庭联通套房',
            price: 758,
            tags: ['双人床+单人床', '55㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/1mc4h12000b2ws3z1BA8F_W_1080_808_R5_D.jpg'
          },
          {
            id: 4,
            name: '行政套房',
            price: 868,
            tags: ['大床', '60㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/1mc5w12000eqqc516881D_W_1080_808_R5_D.jpg'
          }
        ],
        facilities: [
          'WiFi',
          '停车场',
          '健身房',
          '游泳池',
          '餐厅',
          '会议室',
          '商务中心',
          '洗衣服务'
        ]
      },
      5: {
        id: 5,
        name: '赣州沃尔顿皇家花园酒店',
        rating: 4.7,
        commentCount: 2329,
        address: '赣州章贡区橙乡大道26号',
        images: [
          'https://dimg04.c-ctrip.com/images/200r1b000001bnp60B177_W_1080_808_R5_D.jpg',
          'https://dimg04.c-ctrip.com/images/200b1b000001axadaB72C_W_1080_808_R5_D.jpg',
          'https://dimg04.c-ctrip.com/images/200g1b000001ajiqyCB07_W_1080_808_R5_D.jpg'
        ],
        rooms: [
          {
            id: 1,
            name: '豪华大床房',
            price: 268,
            tags: ['大床', '32㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/0201l120009ei5zw159D1_W_1080_808_R5_D.jpg'
          },
          {
            id: 2,
            name: '豪华双床房',
            price: 358,
            tags: ['双床', '40㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/1mc5512000exy0dhr9ED5_W_1080_808_R5_D.jpg'
          },
          {
            id: 3,
            name: '行政套房',
            price: 538,
            tags: ['大床', '50㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/1mc5212000ffajrswAB1D_W_1080_808_R5_D.jpg'
          },
          {
            id: 4,
            name: '舒适家庭房',
            price: 698,
            tags: ['双人床+单人床', '60㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/200u1h000001hqjh8CD75_W_1080_808_R5_D.jpg'
          }
        ],
        facilities: [
          'WiFi',
          '停车场',
          '健身房',
          '餐厅',
          '会议室',
          '商务中心',
          '洗衣服务',
          '接机服务'
        ]
      },
      6: {
        id: 6,
        name: '吉安格兰云天国际酒店',
        rating: 4.8,
        commentCount: 2073,
        address: '吉安吉州区阳明西路吉安国际会展中心正对面',
        images: [
          'https://dimg04.c-ctrip.com/images/02033120009gwbgko315A_W_1080_808_R5_D.jpg',
          'https://dimg04.c-ctrip.com/images/0204j120009ndmdhw65E5_W_1080_808_R5_D.jpg',
          'https://dimg04.c-ctrip.com/images/0206w120009mgmnlp3DCF_W_1080_808_R5_D.jpg'
        ],
        rooms: [
          {
            id: 1,
            name: '豪华大床房',
            price: 368,
            tags: ['大床', '32㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/0201l120009ei5zw159D1_W_1080_808_R5_D.jpg'
          },
          {
            id: 2,
            name: '豪华双床房',
            price: 458,
            tags: ['双床', '40㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/1mc5512000exy0dhr9ED5_W_1080_808_R5_D.jpg'
          },
          {
            id: 3,
            name: '行政套房',
            price: 538,
            tags: ['大床', '50㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/1mc5212000ffajrswAB1D_W_1080_808_R5_D.jpg'
          },
          {
            id: 4,
            name: '舒适家庭房',
            price: 698,
            tags: ['双人床+单人床', '60㎡', '有窗'],
            image: 'https://dimg04.c-ctrip.com/images/200u1h000001hqjh8CD75_W_1080_808_R5_D.jpg'
          }
        ],
        facilities: [
          'WiFi',
          '停车场',
          '健身房',
          '餐厅',
          '会议室',
          '商务中心',
          '洗衣服务',
          '接机服务'
        ]
      }
    };

    const hotelData = hotelDataMap[hotelId] || hotelDataMap[1];
    this.setData({ hotel: hotelData });
  },

  onCheckInChange(e) {
    const checkInDate = e.detail.value;
    const checkOutDate = this.data.checkOutDate;
    
    if (checkOutDate && checkInDate >= checkOutDate) {
      // 如果入住日期大于等于离店日期，自动将离店日期设置为入住日期的后一天
      const nextDay = new Date(checkInDate);
      nextDay.setDate(nextDay.getDate() + 1);
      this.setData({
        checkInDate,
        checkOutDate: this.formatDate(nextDay)
      });
    } else {
      this.setData({ checkInDate });
    }
  },

  onCheckOutChange(e) {
    this.setData({
      checkOutDate: e.detail.value
    });
  },

  onBookRoom(e) {
    const room = e.currentTarget.dataset.room;
    const { checkInDate, checkOutDate } = this.data;
    
    // 检查是否登录
    const isLoggedIn = wx.getStorageSync('isLoggedIn') || false;
    if (!isLoggedIn) {
      wx.showModal({
        title: '提示',
        content: '预订房间需要先登录，是否前往登录？',
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

    // 跳转到预订页面
    const params = {
      hotelId: this.data.hotel.id,
      roomId: room.id,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      price: room.price
    };
    
    wx.navigateTo({
      url: `/pages/hotelBooking/hotelBooking?${Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&')}`
    });
  }
});