// pages/index/item/item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addShow:false,
    isShow:false,
    isShowMovable:false,
    x: 0,
    y: 150,
    items: [
      { id: 1, name: '幼儿园', icon: '../../../images/kindergarten.png', path: 'item/item' },
      { id: 2, name: '小学', icon: '../../../images/primarySchool.png', path: 'item/item' },
      { id: 3, name: '初中', icon: '../../../images/middleSchool.png', path: 'item/item' },
      { id: 4, name: '高中', icon: '../../../images/highSchool.png', path: 'item/item' },
      { id: 5, name: '大学', icon: '../../../images/university.png', path: 'item/item' },
      { id: 6, name: '社会', icon: '../../../images/work.png', path: 'item/item' }
    ],
    checkedIndex:0,
    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,  
    animationData: {},
    genders:[
      { name: '男', id: 1, checked: 1 }, { name: '女', id: 2, checked: 0 },
    ],
    son:{
      name:'',
      phone:'',
      cart:'',
      gender:0
    }
  },
  itemTap: function (e) {
    var index = e.currentTarget.dataset.id;
    this.setData({
      checkedIndex: index,
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
    console.log(options.id)
    console.log(options.name)
    wx.setNavigationBarTitle({
      title: options.name
    })
    this.setData({
      checkedIndex: options.id*1-1
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
    console.log(this.data.winHeight);
    console.log('页面加载');
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
    console.log('页面显示');
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
  // 添加子女的点击事件
  addSon:function(){
    this.setData({
      addShow:true
    })
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.animation = animation

    animation.scale(1).step()

    this.setData({
      animationData: animation.export()
    })
  },
  // 子女信息的取消的点击事件
  off:function(){
    this.setData({
      addShow: false,
      animationData:{}
    })
  },
  // 子女信息的确定的点击事件
  addbtn:function(){
    console.log(this.data.son);
    this.setData({
      addShow: false,
      animationData: {}
    })
  },
  // 子女姓名的输入
  nameInput:function(e){
    console.log(e.detail.value);
    var son = this.data.son;
    son.name = e.detail.value;
    this.setData({
      son: son
    });
  },
  // 子女电话的输入
  phoneInput: function (e) {
    console.log(e.detail.value);
    var son = this.data.son;
    son.phone = e.detail.value;
    this.setData({
      son: son
    });
  },
  // 子女身份证的输入
  cartInput: function (e) {
    console.log(e.detail.value);
    var son = this.data.son;
    son.cart = e.detail.value;
    this.setData({
      son: son
    });
  },
  // 子女信息的 性别选择事件
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var son = this.data.son;
    son.gender = e.detail.value;
    this.setData({
      son: son
    });
  }
})