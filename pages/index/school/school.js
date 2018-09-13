// pages/index/school/school.js
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
    indicatorDots: false,
    autoplay: true,
    indicatorDots: true,
    interval: 2000,
    duration: 600,
    item:{
      name:'云南财经大学',
      education:'大学',
      type:'公立',
      region: '中国·云南·昆明',
      address: '云南省昆明市龙泉路237号',
      attr: '省属重点大学',
      size: '2100余亩',
      createdTime: '1951年',
      major: ['计算机', '财务', '法律', '计算机', '财务', '法律', '计算机', '财务', '法律'],
      service: ['校车'],
      introduce: '云南财经大学（Yunnan University of Finance and Economics，YNUFE） ，简称 “云财大”，创建于1951年，位于春城昆明重点大学、云南省高水平大学整体建设高校。是一所办学历史悠久、财经特色鲜明的以经济学、管理学为主干学科，法学、哲学、文学、理学、工学、艺术等9大学科门类交叉渗透、协调发展的多学科性财经类高水平教学研究型大学。',
      history:[
        '1979年11月，云南省工业干部学校成立。', '1983年8月，云南省政府决定将其校名改为“云南经济管理干部学院”。','1999年2月，新的云南财贸学院成立。'
      ],
      
    },
    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    comment: [
      {
        name: '王五', time: '2018-01-02 15:20:10', content: '还行'
      },
      {
        name: '王五2', time: '2018-01-02 15:20:10', content: '是一所办学历史悠久、财经特色鲜明的以经济学、管理学为主干学科，法学、哲学、文学、理学、工学、艺术等9大学科门类交叉渗透、协调发展的多学科性财经类高水平教学研究型大学'
      }, {
        name: '王五3', time: '2018-01-02 15:06:10', content: '是一所办学历史悠久、财经特色鲜明的以经济学、管理学为主干学科，法学、'
      }, {
        name: '王五', time: '2018-01-02 15:24:10', content: '是一所办学历史悠久、财经特色鲜明的以经济学、管理学为主干学科'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.name
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
           * 滑动切换tab 
           */
      bindChange: function (e) {

        var that = this;
        that.setData({ currentTab: e.detail.current });

      },
      /** 
       * 点击tab切换 
       */
      swichNav:function (e) {

        var that = this;

        if (this.data.currentTab === e.target.dataset.current) {
          return false;
        } else {
          that.setData({
            currentTab: e.target.dataset.current
          })
        }
      },
      teacherTap:function(e){
        var index = e.currentTarget.dataset.id;
        console.log(index);
        wx.navigateTo({
          url: '../teacher/teacher?id=' + index + '&name=' + '赵四'
        })
      } ,
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