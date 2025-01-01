Page({
  data: {
    searchResultSpots: []
  },

  onLoad(options) {
    const searchResultData = options.data;
    try {
      const decodedData = decodeURIComponent(searchResultData);
      const searchResultSpots = JSON.parse(decodedData);
      this.setData({
        searchResultSpots: searchResultSpots
      });
      console.log("搜索结果数据:", searchResultSpots); // 打印数据，检查 name 字段是否存在
    } catch (error) {
      console.error("解析 JSON 数据失败:", error);
    }
  },

  onTicketClick(e) {
    const spotId = e.currentTarget.dataset.id;
    const spotName = e.currentTarget.dataset.name; // 获取景点名称
    console.log("购票按钮点击，景点ID: ", spotId);
    console.log("景点名称: ", spotName); // 打印景点名称，检查是否正确获取
    wx.navigateTo({
      url: `/pages/plan_select/plan_select?spotId=${spotId}&spotName=${encodeURIComponent(spotName)}`
    });
  },

  onNavigateClick(e) {
    const spotId = e.currentTarget.dataset.id;
    console.log("导航按钮点击，景点ID: ", spotId);
    wx.navigateTo({
      url: `/pages/taxi/taxi?id=${spotId}`
    });
  }
});