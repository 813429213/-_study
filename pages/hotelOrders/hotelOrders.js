Page({
  data: {
    orders: []
  },

  onShow() {
    console.log('正在加载订单列表...');
    // 获取订单列表
    const orders = wx.getStorageSync('hotelOrders') || [];
    console.log('获取到的订单数量:', orders.length);
    console.log('订单列表详情:', orders);
    
    this.setData({ orders });
  },

  // 查看订单详情
  viewOrderDetail(e) {
    const orderId = e.currentTarget.dataset.id;
    console.log('查看订单详情, 订单ID:', orderId);
    
    const order = this.data.orders.find(item => item.id === orderId);
    if (order) {
      console.log('订单详情:', order);
      wx.showModal({
        title: '订单详情',
        content: `酒店：${order.hotelName}\n
        房型：${order.roomName}
        \n入住时间：${order.checkIn}
        \n离店时间：${order.checkOut}
        \n入住人：${order.guestName}
        \n联系电话：${order.phone}
        \n订单状态：${order.status}
        \n创建时间：${order.createTime}`,
        showCancel: false
      });
    } else {
      console.error('未找到对应订单:', orderId);
    }
  },

  cancelOrder(e) {
    const orderId = e.currentTarget.dataset.id;
    wx.showModal({
      title: '确认取消',
      content: '确定取消此订单吗？',
      success: (res) => {
        if (res.confirm) {
          console.log('取消订单, 订单ID:', orderId);
          const updatedOrders = this.data.orders.filter(item => item.id !== orderId);
          this.setData({ orders: updatedOrders });
          wx.setStorageSync('hotelOrders', updatedOrders);
          wx.showToast({
            title: '订单已取消',
            icon: 'success',
            duration: 2000
          });
        } else {
          console.log('用户取消了操作');
        }
      }
    });
  }
});
