Page({
  data: {
    plan: []
  },

  onShow() {
    const plan = wx.getStorageSync('plan') || [];
    this.setData({
      plan
    });
  },

  // 删除行程
  onDelete(e) {
    const index = e.currentTarget.dataset.index;
    const { plan } = this.data;
    const that = this;

    wx.showModal({
      title: '确认删除',
      content: '确定要删除该行程吗？',
      success(res) {
        if (res.confirm) {
          plan.splice(index, 1); // 删除对应的行程
          wx.setStorageSync('plan', plan); // 更新本地存储
          that.setData({ plan }); // 更新页面数据
          wx.showToast({
            title: '行程已删除',
            icon: 'success'
          });
        }
      }
    });
  },

  // 导航功能
  onNavigate(e) {
    const index = e.currentTarget.dataset.index;
    const { plan } = this.data;
    const destination = plan[index];

    if (!destination || !destination.latitude || !destination.longitude) {
      wx.showToast({
        title: '无法获取目的地坐标',
        icon: 'none'
      });
      return;
    }

    // 使用微信内置地图打开导航
    wx.openLocation({
      latitude: parseFloat(destination.latitude),
      longitude: parseFloat(destination.longitude),
      name: destination.name || '目的地',
      address: destination.address || '',
      scale: 18,
      success: () => {
        console.log('导航开启成功');
      },
      fail: (error) => {
        console.error('导航开启失败', error);
        wx.showToast({
          title: '导航开启失败',
          icon: 'none'
        });
      }
    });
  }
});
