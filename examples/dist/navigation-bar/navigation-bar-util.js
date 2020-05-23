class NavigationBarUtil {
  /**
   * 构造函数
   * @param systemInfo 设备信息
   */
  constructor(systemInfo) {
    this.systemInfo = systemInfo
  }

  /**
   * 获取导航栏高度（单位px）
   */
  getNavigationBarHeight() {
    const titleBarHeight = this.getTitleBarHeight()
    const statusBarHeight = this.getStatusBarHeight()
    return titleBarHeight + statusBarHeight
  }

  /**
   * 获取状态栏高度（单位px）
   */
  getStatusBarHeight() {
    return this.systemInfo.statusBarHeight
  }

  /**
   * 获取标题栏高度（单位px）
   */
  getTitleBarHeight() {
    const statusBarHeight = this.getStatusBarHeight()
    const capsuleButtonInfo = this.getCapsuleButtonInfo()
    const gap = capsuleButtonInfo.top - statusBarHeight
    return gap * 2 + capsuleButtonInfo.height
  }

  /**
   * 获取左侧胶囊按钮信息
   */
  getCapsuleButtonInfo() {
    const screenWidth = this.systemInfo.screenWidth
    const capsuleButtonInfo = wx.getMenuButtonBoundingClientRect()
    capsuleButtonInfo.left = screenWidth - capsuleButtonInfo.right
    capsuleButtonInfo.right = capsuleButtonInfo.left + capsuleButtonInfo.width
    return capsuleButtonInfo
  }
}

const navigationBarUtil = new NavigationBarUtil(wx.getSystemInfoSync())
export default navigationBarUtil
