Page({
  data: {
    spotId: null,
    spotName: '',
    selectedDate: '',
    ticketCount: '1',
    ticketOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    today: ''
  },

  onLoad(options) {
    const today = this.getTodayDate();
    this.setData({
      spotId: parseInt(options.spotId),  // 转换为数字类型
      spotName: decodeURIComponent(options.spotName), // 解码景点名称
      today: today,
      selectedDate: today
    });
    console.log("购票页面 options:", options); // 打印 options，检查 spotName 是否存在
    console.log("购票页面 spotName:", this.data.spotName); // 打印 spotName，检查是否正确设置
  },

  // 获取今天的日期
  getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  // 日期选择
  onDateChange(e) {
    this.setData({
      selectedDate: e.detail.value
    });
  },

  // 票数选择
  onTicketChange(e) {
    this.setData({
      ticketCount: this.data.ticketOptions[e.detail.value]
    });
  },

  // 确认并添加到行程
  onConfirmBooking() {
    const booking = {
      spotId: this.data.spotId,
      spotName: this.data.spotName,
      date: this.data.selectedDate,
      ticketCount: this.data.ticketCount
    };

    // 保存到本地存储
    const plan = wx.getStorageSync('plan') || [];
    plan.push(booking);
    wx.setStorageSync('plan', plan);

    wx.showToast({
      title: '已添加到行程',
      icon: 'success'
    });

    // 返回上一页
    wx.navigateBack();
  }
});