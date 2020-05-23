import validator from '../behaviors/validator'
import eventUtil from '../core/utils/event-util'
import navigationBarUtil from './navigation-bar-util'

Component({
  behaviors: [validator],
  externalClasses: ['l-title-class'],
  properties: {
    // 导航栏颜色
    navigationBarColor: {
      type: String,
      value: 'white'
    },
    // 状态栏颜色
    statusBarColor: {
      type: String,
      value: 'transparent'
    },
    // 标题栏颜色
    titleBarColor: {
      type: String,
      value: 'transparent'
    },
    // 标题颜色
    titleColor: {
      type: String,
      value: 'black'
    },
    // 胶囊按钮颜色
    capsuleButtonColor: {
      type: String,
      value: 'black',
      options: ['white', 'black']
    },
    // 禁用左侧按钮返回上一页
    disableBack: {
      type: Boolean,
      value: false
    },
    // 禁用右侧按钮返回主页
    disableHome: {
      type: Boolean,
      value: false
    },
    // 隐藏胶囊按钮
    hiddenCapsuleButton: {
      type: Boolean,
      value: false
    },
    // 主页路径
    homePage: {
      type: String,
      value: ''
    },
    // 页面标题
    title: {
      type: String,
      value: ''
    },
    // 顶部填充
    paddingTop: {
      type: Boolean,
      value: true
    }

  },

  data: {
    // 标题栏高度（单位px）
    titleBarHeight: navigationBarUtil.getTitleBarHeight(),
    // 状态栏高度（单位px）
    statusBarHeight: navigationBarUtil.getStatusBarHeight(),
    // 左侧胶囊按钮信息
    capsuleButtonInfo: navigationBarUtil.getCapsuleButtonInfo()
  },

  methods: {
    /**
     * 监听：点击左侧按钮
     */
    onTapLeftButton() {
      eventUtil.emit(this, 'linlefttap')

      if (!this.data.disableBack) {
        wx.navigateBack()
      }
    },

    /**
     * 监听：长按左侧按钮
     */
    onLongPressLeftButton() {
      eventUtil.emit(this, 'linleftlongpress')
    },

    /**
     * 监听：点击右侧按钮
     */
    async onTapRightButton() {
      eventUtil.emit(this, 'linrighttap')

      const homePage = this.data.homePage
      if (!this.data.disableHome) {
        wx.switchTab({
          url: homePage,
          fail() {
            wx.navigateTo({
              url: homePage
            })
          }
        })
      }
    },

    /**
     * 监听：长按右侧按钮
     */
    onLongPressRightButton() {
      eventUtil.emit(this, 'linrightlongpress')
    }
  }
})
