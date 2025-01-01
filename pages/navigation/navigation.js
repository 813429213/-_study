Page({
  data: {
    latitude: 0,
    longitude: 0,
    markers: [],
    spotInfo: {}
  },

  onLoad(options) {
    const spotId = options.id;
    this.loadSpotLocation(spotId);
  },

  loadSpotLocation(spotId) {
    // 这里应该从后端获取景点的经纬度信息
    // 示例数据
    const spotInfo = {
      id: spotId,
      name: "示例景点",
      latitude: 28.68333,
      longitude: 115.85000 // 南昌市坐标
    };

    this.setData({
      spotInfo,
      latitude: spotInfo.latitude,
      longitude: spotInfo.longitude,
      markers: [{
        id: 1,
        latitude: spotInfo.latitude,
        longitude: spotInfo.longitude,
        title: spotInfo.name
      }]
    });

    // 获取用户当前位置
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        const userMarker = {
          id: 0,
          latitude: res.latitude,
          longitude: res.longitude,
          title: '当前位置',
          iconPath: '/images/icons/location.png',
          width: 30,
          height: 30
        };

        this.setData({
          markers: [...this.data.markers, userMarker]
        });
      }
    });
  }
});