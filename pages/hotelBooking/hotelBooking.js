Page({
  data: {
    hotelName: '',
    roomName: '',
    price: 0,
    checkIn: '',
    checkOut: '',
    nights: 1,
    totalRoomPrice: 0,
    guestName: '',
    phone: '',
    arrivalTime: '14:00'
  },

  onLoad(options) {
    // 从路由参数获取预订信息
    const { hotelId, roomId, checkIn, checkOut, price } = options;
    
    // 计算入住天数
    const nights = this.calculateNights(checkIn, checkOut);
    const totalRoomPrice = nights * Number(price);

    // 获取酒店和房间信息
    const hotelInfo = this.getHotelInfo(hotelId, roomId);
    
    this.setData({
      hotelName: hotelInfo.hotelName,
      roomName: hotelInfo.roomName,
      price: Number(price),
      checkIn,
      checkOut,
      nights,
      totalRoomPrice
    });
  },

  // 获取酒店和房间信息
  getHotelInfo(hotelId, roomId) {
    // 这里应该从全局数据或缓存中获取酒店信息
    const hotelDataMap = {
      1: {
        hotelName: '南昌万达嘉华酒店',
        rooms: {
          1: '豪华大床房',
          2: '豪华双床房',
          3: '家庭联通套房',
          4: '行政套房'
        }
      },
      2: {
        hotelName: '南昌格兰云天国际酒店',
        rooms: {
          1: '高级大床房',
          2: '豪华双床房',
          3: '商务套房',
          4: '行政套房'
        }
      },
      3: {
        hotelName: '麗枫酒店(南昌红谷滩店)',
        rooms: {
          1: '舒适大床房',
          2: '豪华双床房',
          3: '江景套房',
          4: '豪华家庭房'
        }
      },
      4: {
        hotelName: '景德镇浮梁希尔顿欢朋酒店',
        rooms: {
          1: '豪华大床房',
          2: '豪华双床房',
          3: '家庭联通套房',
          4: '行政套房'
        }
      },
      5: {
        hotelName: '赣州沃尔顿皇家花园酒店',
        rooms: {
          1: '豪华大床房',
          2: '豪华双床房',
          3: '行政套房',
          4: '舒适家庭房'
        }
      },
      6: {
        hotelName: '吉安格兰云天国际酒店',
        rooms: {
          1: '豪华大床房',
          2: '豪华双床房',
          3: '行政套房',
          4: '舒适家庭房'
        }
      }
    };

    const hotelInfo = hotelDataMap[hotelId] || hotelDataMap[1];
    return {
      hotelName: hotelInfo.hotelName,
      roomName: hotelInfo.rooms[roomId]
    };
  },

  // 计算入住天数
  calculateNights(checkIn, checkOut) {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  },

  // 输入事件处理
  onGuestNameInput(e) {
    this.setData({
      guestName: e.detail.value
    });
  },

  onPhoneInput(e) {
    this.setData({ phone: e.detail.value });
  },

  onArrivalTimeChange(e) {
    this.setData({ arrivalTime: e.detail.value });
  },

  // 提交预订
  onSubmitBooking() {
    const { guestName, phone, arrivalTime } = this.data;
    
    // 表单验证
    if (!guestName) {
      wx.showToast({ title: '请输入入住人姓名', icon: 'none' });
      return;
    }
    if (!phone || !/^1\d{10}$/.test(phone)) {
      wx.showToast({ title: '请输入正确的手机号', icon: 'none' });
      return;
    }

    // 显示确认弹窗
    wx.showModal({
      title: '确认预订',
      content: '是否确认提交预订？',
      success: (res) => {
        if (res.confirm) {
          this.submitBooking();
        }
      }
    });
  },

  // 提交预订到服务器
  submitBooking() {
    wx.showLoading({ title: '提交中...' });
    
    // 生成订单数据
    const orderData = {
      id: new Date().getTime().toString(), // 使用时间戳作为订单ID
      hotelName: this.data.hotelName,
      roomName: this.data.roomName,
      price: this.data.price,
      totalPrice: this.data.totalRoomPrice,
      checkIn: this.data.checkIn,
      checkOut: this.data.checkOut,
      nights: this.data.nights,
      guestName: this.data.guestName,
      phone: this.data.phone,
      arrivalTime: this.data.arrivalTime,
      status: '待入住',
      createTime: new Date().toLocaleString()
    };

    console.log('准备保存的订单数据:', orderData);

    // 获取现有订单列表
    let orders = wx.getStorageSync('hotelOrders') || [];
    console.log('当前存储的订单数量:', orders.length);
    
    // 添加新订单
    orders.unshift(orderData);
    
    try {
      // 保存到本地存储
      wx.setStorageSync('hotelOrders', orders);
      console.log('订单保存成功！新的订单总数:', orders.length);
    } catch (error) {
      console.error('订单保存失败:', error);
      wx.showToast({
        title: '订单保存失败',
        icon: 'none'
      });
      return;
    }
    
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '预订成功',
        icon: 'success',
        duration: 2000
      });
      
      // 延迟返回上一页
      setTimeout(() => {
        wx.navigateBack();
      }, 2000);
    }, 1500);
  }
});