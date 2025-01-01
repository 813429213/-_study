// pages/taxi/taxi.js
Page({
  data: {
    currentLocation: "江西师范大学",
    destination: "",
    carTypes: [
      {
        id: 1,
        name: "快车",
        price: "14起",
        waitTime: "2分钟",
        icon: "https://tse3-mm.cn.bing.net/th/id/OIP-C.e92O9BtrL4QKtSYODSgQUwHaEp?w=249&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "一键呼叫，快速出行"
      },
      {
        id: 2,
        name: "拼车",
        price: "10起",
        waitTime: "4分钟",
        icon: "https://tse1-mm.cn.bing.net/th/id/OIP-C.eLA7JdhrgY7KrSZzYhV48wHaE8?w=273&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "经济实惠，便捷出发"
      },
      {
        id: 3,
        name: "专车",
        price: "28起",
        waitTime: "5分钟",
        icon: "https://tse1-mm.cn.bing.net/th/id/OIP-C.I5o83DmqNuuRWEuZGDPIvgHaEx?w=281&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "舒适型轿车，专业司机"
      },
      {
        id: 4,
        name: "豪华车",
        price: "45起",
        waitTime: "7分钟",
        icon: "https://tse3-mm.cn.bing.net/th/id/OIP-C.B5TCuUE8TQNKMKgqu_88lAHaE8?w=266&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "高端车型，尊贵体验"
      }
    ],
    selectedCarType: 1,
    latitude: 28.68333,
    longitude: 115.85000,
    scale: 14,
    markers: [{
      id: 0,
      latitude: 28.68333,
      longitude: 115.85000,
      width: 30,
      height: 30
    }]
  },

  onLoad: function() {
    console.log('taxi page loaded');
  },

  onShow: function() {
    console.log('taxi page shown');
  },

  onSelectCarType: function(e) {
    console.log('选择车型:', e.currentTarget.dataset.id);
    const { id } = e.currentTarget.dataset;
    this.setData({
      selectedCarType: id
    });
  },

  onInputDestination: function(e) {
    console.log('输入目的地:', e.detail.value);
    this.setData({
      destination: e.detail.value
    });
  },

  onCallCar: function() {
    console.log('点击呼叫按钮');
    console.log('目的地:', this.data.destination);
    console.log('选中的车型:', this.data.selectedCarType);

    if (!this.data.destination) {
      console.log('没有输入目的地');
      wx.showToast({
        title: '请输入目的地',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    console.log('开始呼叫车辆');
    wx.showLoading({
      title: '正在呼叫车辆...',
      mask: true
    });

    setTimeout(() => {
      console.log('呼叫成功');
      wx.hideLoading();
      wx.showToast({
        title: '已成功呼叫车辆',
        icon: 'success',
        duration: 2000
      });
      
      setTimeout(() => {
        console.log('准备返回上一页');
        wx.navigateBack();
      }, 2000);
    }, 1500);
  }
});
