// pages/components/view/pages/arc-popup/index.js
import {
  navConfig,
  avartarList
} from './popup-nav.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navConfig: navConfig,
    avartarList: avartarList,
    currentConfig: {
      show: false,
      transition: true,
      zIndex: 99,
      locked: false,
      direction: "bottom",
      arcRadius: 18,
      maxHeight: 600,
      minHeight: 200,
      opacity: 0.4
    }
  },

  // 显示Popup
  onShowPopupTap(e) {
    const type = e.currentTarget.dataset.type
    const config = this.data.navConfig[type].config
    config.show = true
    this.setData({
      currentConfig: config,
      type
    })
  },

  // 隐藏Popup
  onHidePopupTap() {
    const type = this.data.type
    this.data.currentConfig.show = false
    this.setData({
      currentConfig: this.data.currentConfig
    })

    if (type === 3) {
      wx.showToast({
        title: '已取消~',
        icon: 'none'
      })
    }
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
