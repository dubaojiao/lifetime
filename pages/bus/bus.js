// pages/bus/bus.js

var app = getApp();
var util = require("../../utils/util.js") 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView:'green_0',
    scrollTop:'100',
    selectIsShow:false,
    /** 
    * 页面配置 
    */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    sons:[
      {name:'某某某',id:'1'},
      { name: '某某X', id: '2' },
      {name: '某XX', id: '3' }
    ],
    width:100/3,
    select:{
      id:'1',name:'幼儿园'
    },
    educations: [
      { id: 1, name: '幼儿园', icon: '../../images/kindergarten.png', path: 'item/item' },
      { id: 2, name: '小学', icon: '../../images/primarySchool.png', path: 'item/item' },
      { id: 3, name: '初中', icon: '../../images/middleSchool.png', path: 'item/item' },
      { id: 4, name: '高中', icon: '../../images/highSchool.png', path: 'item/item' },
      { id: 5, name: '大学', icon: '../../images/university.png', path: 'item/item' },
      { id: 6, name: '社会', icon: '../../images/work.png', path: 'item/item' }
    ],
  },
  selectItem:function(e){
    var that = this;
    console.log(e.target.dataset.id);
    var d = this.data.educations[e.target.dataset.id];
    this.setData({
      select:{
        id:d.id,
        name:d.name
      },
      selectIsShow: !that.data.selectIsShow,
      toView: 'green_' + (d.id*1-1)
    });
  },
  bindSelect:function(){
    var that = this;
    this.setData({
      selectIsShow: !that.data.selectIsShow,
    })
  },
  /** 
   * 滑动切换tab 
   */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '成绩'
    })
    var that = this;
    /** 
       * 获取系统信息 
       */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
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
  
  }
})