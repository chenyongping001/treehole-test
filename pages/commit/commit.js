// pages/commit/commit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:"",
  },
  bindTextAreaBlur:function(e){
    this.setData({
      detail:e.detail.value
    })
  },
  send:function(e){
    var that=this
    wx.showLoading({
      title: '加载中',
    })
    console.log(this.data.detail)
    //与服务器交互
    setTimeout(() => {
      wx.hideLoading({
        success: (res) => {},
      })
    }, 2000);
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

  }
})