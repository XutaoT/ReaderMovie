var postsData = require("../../data/posts-data.js");//只能用相对路径

Page({
    data: {
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
        
        this.setData({ datas: postsData.postList});
    },

    onPostTap:function(event){
        var postId = event.currentTarget.dataset.postid;//必须全为小写，data-属性无大小分别分别
        wx.navigateTo({
          url: "post-detail/post-detail?id="+postId
        })       
    },




    onReady: function () {
        // 生命周期函数--监听页面初次渲染完成

    },
    onShow: function () {
        // 生命周期函数--监听页面显示

    },
    onHide: function () {
        // 生命周期函数--监听页面隐藏

    },
    onUnload: function () {
        // 生命周期函数--监听页面卸载

    },
    onPullDownRefresh: function () {
        // 页面相关事件处理函数--监听用户下拉动作

    },
    onReachBottom: function () {
        // 页面上拉触底事件的处理函数

    },
    onShareAppMessage: function () {
        // 用户点击右上角分享
        return {
            title: 'title', // 分享标题
            desc: 'desc', // 分享描述
            path: 'path' // 分享路径
        }
    }
})