// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fircol:"#000000",
    seccol:"#979797",
    list:[
      {
        face_url:"/images/add.png",
        username:"哆啦B梦",
        send_timestamp:"2021-9-27 17:09:12",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aspernatur cupiditate quas fugiat vel sed incidunt, id sint aperiam aliquid obcaecati, porro magni. Tenetur quos facere excepturi natus iure quia!",
        total_likes:99,
      }, 
      {
        face_url:"/images/like.png",
        username:"哆啦C梦",
        send_timestamp:"2021-9-27 17:20:12",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aspernatur cupiditate quas fugiat vel sed incidunt, id sint aperiam aliquid obcaecati, porro magni. Tenetur quos facere excepturi natus iure quia!",
        total_likes:95,
      }, 
      {
        face_url:"/images/likeplus.png",
        username:"哆啦D梦",
        send_timestamp:"2021-9-27 17:20:12",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aspernatur cupiditate quas fugiat vel sed incidunt, id sint aperiam aliquid obcaecati, porro magni. Tenetur quos facere excepturi natus iure quia!",
        total_likes:88,
      }, 
      {
        face_url:"/images/likeplus.png",
        username:"哆啦E梦",
        send_timestamp:"2021-8-27 17:20:12",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aspernatur cupiditate quas fugiat vel sed incidunt, id sint aperiam aliquid obcaecati, porro magni. Tenetur quos facere excepturi natus iure quia!",
        total_likes:66,
      }
    ]
  },
  first_select:function(e){},
  second_select:function(e){
    wx.navigateTo({
      url: '/pages/commit/commit',
    })
  },
  third_select:function(e){
    wx.redirectTo({
      url: '/pages/mine/mine',
    })
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