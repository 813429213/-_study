Page({
  data: {
    isLoggedIn: false, // 初始状态为未登录
    userInfo: {
      avatar: "https://th.bing.com/th/id/OIP.Tau-0DGeNIuneNRwrBKhyQAAAA?w=185&h=190&c=7&r=0&o=5&dpr=2&pid=1.7", 
      nickname: "用户名",
      level: "普通用户",
      points: 0,
    },
    loginText: '登录', // 控制登录/退出登录按钮显示的文本
  },

  onShow() {
    const userInfo = wx.getStorageSync("userInfo");
    if (userInfo) {
      this.setData({
        isLoggedIn: true,
        userInfo: userInfo,
        loginText: '退出登录', // 登录后显示退出登录
      });
    } else {
      this.setData({
        isLoggedIn: false,
        loginText: '登录', // 未登录显示登录
      });
    }
  },

  // 登录操作
  onLoginOut() {
    if (this.data.isLoggedIn) {
      // 执行退出登录操作
      wx.showModal({
        title: "提示",
        content: "确定要退出登录吗？",
        success: (res) => {
          if (res.confirm) {
            wx.clearStorageSync(); // 清除本地存储
            this.setData({
              isLoggedIn: false,
              userInfo: {
                avatar: "https://th.bing.com/th/id/OIP.Tau-0DGeNIuneNRwrBKhyQAAAA?w=185&h=190&c=7&r=0&o=5&dpr=2&pid=1.7", 
                nickname: "用户名",
                level: "普通用户",
                points: 0,
              },
              loginText: '登录', // 更新按钮文本为登录
            });
            wx.showToast({
              title: "已退出登录",
              icon: "success",
            });
          }
        }
      });
    } else {
      // 跳转到登录页面
      wx.navigateTo({
        url: "/pages/login/login", // 替换为实际的登录页面路径
      });
    }
  },

  // 景点票点击事件
  myappointpage() {
    wx.navigateTo({
      url: "/pages/tickets/tickets", // 替换为实际的景点票页面路径
    });
  },

  // 优惠券点击事件
  openmyorder() {
    wx.navigateTo({
      url: "/pages/coupons/coupons", // 替换为实际的优惠券页面路径
    });
  },

  // 权益卡点击事件
  myaid() {
    wx.navigateTo({
      url: "/pages/membership/membership", // 替换为实际的权益卡页面路径
    });
  },

  // 我的行程点击事件
  myfriend() {
    wx.navigateTo({
      url: "/pages/trips/trips", // 替换为实际的我的行程页面路径
    });
  },

  // 查看酒店订单
viewHotelOrders() {
  console.log('跳转到酒店订单列表页面');
  const orders = wx.getStorageSync('hotelOrders') || [];
  console.log('当前存储的订单数量:', orders.length);
    
  wx.navigateTo({
    url: "/pages/hotelOrders/hotelOrders"
  });
},

  // 想去的地方点击事件
  mycollection() {
    wx.navigateTo({
      url: "/pages/collections/collections", // 替换为实际的想去的地方页面路径
    });
  },

  // 个人资料点击事件
  bind() {
    if (this.data.isLoggedIn) {
      wx.navigateTo({
        url: "/pages/editProfile/editProfile", // 替换为实际的个人资料编辑页面路径
      });
    } else {
      wx.showToast({
        title: "请先登录",
        icon: "none",
      });
    }
  },

  // 客服联系点击事件
  updatepassword() {
    wx.navigateTo({
      url: "/pages/customerService/customerService", // 替换为实际的客服页面路径
    });
  },
});