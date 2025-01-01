Page({
  data: {
    isLoading: false
  },

  // 微信登录逻辑
  onWeChatLogin() {
    this.setData({ isLoading: true });
    
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        const userInfo = res.userInfo;
        
        // 存储用户信息到本地
        wx.setStorageSync('userInfo', userInfo);
        wx.setStorageSync('isLoggedIn', true);
        
        // 显示成功提示
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 1500
        });

        // 延迟返回，让用户看到提示
        setTimeout(() => {
          wx.navigateBack();
        }, 1500);
      },
      fail: (err) => {
        console.error('登录失败:', err);
        wx.showToast({
          title: '登录失败',
          icon: 'error'
        });
      },
      complete: () => {
        this.setData({ isLoading: false });
      }
    });
  }
});
