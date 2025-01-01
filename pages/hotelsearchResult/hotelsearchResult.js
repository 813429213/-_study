Page({
  data: {
    hotels: [],
    currentFilter: 'default'
  },

  onLoad(options) {
    try {
      const decodedData = decodeURIComponent(options.data);
      const hotels = JSON.parse(decodedData);
      this.setData({ hotels });
    } catch (error) {
      console.error("解析搜索结果数据失败:", error);
      wx.showToast({
        title: '加载搜索结果失败',
        icon: 'none'
      });
    }
  },

  // 点击筛选标签
  onFilterTap(e) {
    const filter = e.currentTarget.dataset.filter;
    let sortedHotels = [...this.data.hotels];

    switch (filter) {
      case 'price':
        sortedHotels.sort((a, b) => a.price - b.price);
        break;
      case 'rating':
        sortedHotels.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 默认排序，保持原顺序
        break;
    }

    this.setData({
      currentFilter: filter,
      hotels: sortedHotels
    });
  },

  // 点击酒店卡片
  onHotelTap(e) {
    const hotelId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/hotelDetail/hotelDetail?id=${hotelId}`
    });
  }
}); 