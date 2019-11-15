// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:'',
    longitude:'',
    markers:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let me=this;
    me.getLocation();
  },
  getLocation:function(){
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log(res);
        this.setData({
          latitude: res.latitude ,
          longitude: res.longitude,
          markers:[{
            id:1,
            iconPath: "../../images/pos.png",
            latitude: res.latitude,
            longitude: res.longitude,
            width: 30,
            height: 30
          }]
        })
      }
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
  onGotUserInfo:function(e){
    //console.log(e);
  }
})