// pages/index/index.js
const app = getApp();
var touchDot = 0;
var interval = [];
var time = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    animationData: {},
    leftWidth: wx.getSystemInfoSync().windowWidth*0.2+"px",
    imgWidth: wx.getSystemInfoSync().windowWidth * 0.2*0.5 + "px",
    rightWidth: wx.getSystemInfoSync().windowWidth*0.8+"px",
    isShow:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.getSystemInfoSync().windowWidth);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.setNavigationBarTitle({
      title: '成绩'
    })
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
  // 触摸开始事件 
   touchStart: function (e) {
      touchDot = e.touches[0].pageX; // 获取触摸时的原点 
      // 使用js计时器记录时间  
      interval = setInterval(function () {
         time++;
      }, 100);
   },
   // 触摸移动事件 
   touchMove: function (e) {
      var touchMove = e.touches[0].pageX;
      console.log("touchMove:" + touchMove + " touchDot:" + touchDot + " diff:" + (touchMove - touchDot));
      // 向左滑动  touchMove - touchDot <= -40 && time < 10
      if (touchMove < touchDot) {
        var t = (touchDot - touchMove);
        console.log("t---" + t);
        var f1 = ((this.data.leftWidth).split("px")[0]) * 1 - t;
        var f2 = ((this.data.rightWidth).split("px")[0]) * 1 + t;
        if (wx.getSystemInfoSync().windowWidth * 0.1 >= f1) {
          console.log(wx.getSystemInfoSync().windowWidth * 0.1);
          this.setData({
            isShow:false
          })
          return;
        }
        this.setData({
          leftWidth: f1+"px",
          rightWidth: f2+"px"
        })
        console.log("向左f1---"+f1);
        console.log("向左f2---"+f2);
        console.log("向左c:"+wx.getSystemInfoSync().windowWidth * 0.1);
      }
      // 向右滑动 
      if (touchMove > touchDot) {
        var t = (touchMove - touchDot);
        console.log("t---" + t);
        var f1 = ((this.data.leftWidth).split("px")[0]) * 1 + t;
        var f2 = ((this.data.rightWidth).split("px")[0]) * 1 - t;

        if (wx.getSystemInfoSync().windowWidth * 0.2 <= f1) {
          this.setData({
            isShow: true
          })
          return;
        }
        this.setData({
          leftWidth: f1 + "px",
          rightWidth: f2 + "px"
        })
        console.log("向左f1---" + f1);
        console.log("向左f2---" + f2);
        console.log("向左c:" + wx.getSystemInfoSync().windowWidth * 0.1);
      }
      touchDot = touchMove;
   },
   // 触摸结束事件 
   touchEnd: function (e) {
      clearInterval(interval); // 清除setInterval 
      time = 0;
   }, 
   scrollTap:function(){
     var  that = this;
     var f1 = ((that.data.leftWidth).split("px")[0]) * 1;
     if (wx.getSystemInfoSync().windowWidth * 0.2 <= f1) {
       interval = setInterval(function () {
         var f1 = ((that.data.leftWidth).split("px")[0]) * 1;
         var f2 = ((that.data.rightWidth).split("px")[0]) * 1;
         f1 -= 2;
         f2 += 2;
         that.setData({
           leftWidth: f1 + "px",
           rightWidth: f2 + "px"
         })
         time++;
         if (wx.getSystemInfoSync().windowWidth * 0.1 >= f1) {
           that.setData({
             imgWidth: f1 + "px"
           })
           console.log("向左f1:" + f1);
           console.log("向左c:" + that.data.imgWidth);
           clearInterval(interval); // 清除setInterval 
         }
       }, 0.001);
     }
   },
   scrollLarge:function(){
     var that = this;
     var f1 = ((that.data.leftWidth).split("px")[0]) * 1;
     if (wx.getSystemInfoSync().windowWidth * 0.1 >= f1) {
       interval = setInterval(function () {
         var f1 = ((that.data.leftWidth).split("px")[0]) * 1;
         var f2 = ((that.data.rightWidth).split("px")[0]) * 1;
         if (wx.getSystemInfoSync().windowWidth * 0.2 <= f1) {
           that.setData({
             isShow: true
           })
           clearInterval(interval); // 清除setInterval 
         }
         f1 += 2;
         f2 -= 2;
         that.setData({
           leftWidth: f1 + "px",
           rightWidth: f2 + "px"
         })
         time++;
       }, 0.001);
     }
   }
})