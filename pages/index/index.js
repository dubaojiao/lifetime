// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    items:[
      { id: 1, name: '幼儿园', icon: '../../images/kindergarten.png', path: 'item/item' },
      { id: 2, name: '小学', icon: '../../images/primarySchool.png', path: 'item/item' },
      { id: 3, name: '初中', icon: '../../images/middleSchool.png', path: 'item/item' },
      { id: 4, name: '高中', icon: '../../images/highSchool.png', path: 'item/item' },
      { id: 5, name: '大学', icon: '../../images/university.png', path: 'item/item' },
      { id: 6, name: '社会', icon: '../../images/work.png', path: 'item/item' }
    ],
    indicatorDots: false,
    autoplay: true,
    indicatorDots:true,
    interval: 2000,
    duration: 600
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * 各学历的点击事件
   */
  itemTap:function(e){
    console.log(e.currentTarget.dataset.id);
    var index = e.currentTarget.dataset.id;
    var item = this.data.items[index];
    wx.navigateTo({
      url: item.path + '?id=' + item.id + '&name=' + item.name
    })
  },
  /**
   * 搜索的点击事件
   */
  searchTap:function(e){
    wx.navigateTo({
      url: 'search/search'
    })
  },
  schoolTap:function(e){
    var index = e.currentTarget.dataset.id;
    console.log(index);
    wx.navigateTo({
      url: 'school/school?id=' + index + '&name=' +'云南财经大学'
    })
  }
})