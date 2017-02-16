var app = getApp();
Page({
  data: {
    userInfo: {}
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onTap: function () {
    // wx.navigateTo({
    //   url: "../posts/post",
    //   success: function(res){
    //     console.log("success")
    //   },
    //   fail: function() {
    //     console.log("fail")
    //   },
    //   complete: function() {
    //     console.log("complete")
    //   }
    // });

    // wx.redirectTo({
    //     url: "../posts/post",
    //     success: function (res) {
    //         // success
    //     },
    //     fail: function () {
    //         // fail
    //     },
    //     complete: function () {
    //         // complete
    //     }
    // });


    wx.switchTab({
      url: '../posts/post',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
    // 对于navigateTo有效
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
    // 对于redirectTo有效
  }
})