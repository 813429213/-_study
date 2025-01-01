Page({
  data: {
    phone: '',
    code: '',
    password: '',
  },

  register() {
    // 提交注册信息到后端
    if (this.data.phone && this.data.code && this.data.password) {
      // 调用后端接口注册
    } else {
      wx.showToast({
        title: '请填写完整的注册信息',
        icon: 'none',
      });
    }
  },
});