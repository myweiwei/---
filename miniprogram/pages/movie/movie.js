// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let me=this;
    me.getMovieList();
    //me.getTableData();
  },
  getMovieList:function(){
    let me = this;
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'movList',
      data: {
        count: 10,
        start: me.data.movieList.length
      }
    }).then(res => {
      me.setData({
        movieList: me.data.movieList.concat(JSON.parse(res.result).subjects)
      });
      wx.hideLoading();
    })
  },
  //request方式获取
  getTableData: function (address) {//定义函数名称
    var that = this;
    // 这个地方非常重要，重置data{}里数据时候setData方法的this应为以及函数的this, 如果在下方的sucess直接写this就变成了wx.request()的this了
    wx.request({
      //请求地址
      url: "https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a",
      data: {
        count: 10,
        start: that.data.movieList.length
      },
      header: {//请求头
        //"Content-Type": "application/json"
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'get',
      dataType: 'json',
      success: function (res) {
        console.log(res.data);
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  },
  toComment:function(event){
    wx.navigateTo({
      url: `../comment/comment?movieid=${event.target.dataset.movieid}`,
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
    let me = this;
    me.getMovieList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})