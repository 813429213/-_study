// pages/customerService/customerService.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    faqs: [
      {
        question: '如何预订酒店？',
        answer: '您可以在首页点击"酒店"按钮，搜索心仪的酒店并进行预订。'
      },
      {
        question: '如何规划行程？',
        answer: '在"行程"页面，您可以添加想去的景点，系统会帮您合理规划路线。'
      },
      {
        question: '如何联系人工客服？',
        answer: '点击上方的"在线客服"按钮即可与人工客服进行对话。'
      }
    ],
    showContact: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 展开/收起联系方式
   */
  toggleContact() {
    this.setData({
      showContact: !this.data.showContact
    });
  },

  /**
   * 复制客服电话
   */
  copyServicePhone() {
    wx.setClipboardData({
      data: '400-123-4567',
      success: () => {
        wx.showToast({
          title: '电话号码已复制',
          icon: 'success'
        });
      }
    });
  },

  /**
   * 拨打客服电话
   */
  callService() {
    wx.makePhoneCall({
      phoneNumber: '400-123-4567',
      fail: () => {
        wx.showToast({
          title: '拨号取消',
          icon: 'none'
        });
      }
    });
  },

  /**
   * 在线客服会话
   */
  handleContact(e) {
    console.log('用户点击了在线客服', e);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '江西旅游助手客服中心',
      path: '/pages/customerService/customerService'
    };
  }
});