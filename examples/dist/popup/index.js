import zIndex from '../behaviors/zIndex';
import validator from '../behaviors/validator';

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [zIndex, validator],
  externalClasses: ['l-bg-class', 'l-panel-class', '1-class'],
  properties: {
    // 显示与隐藏
    show: {
      type: Boolean,
      value: false
    },
    // 动画效果的显示和隐藏 --- 该属性更名为 transition
    animation: {
      type: Boolean,
      value: true
    },
    transition: {
      type: Boolean,
      value: true
    },
    // slot的位置 --- 该属性更名为 direction
    contentAlign: {
      type: String,
      value: '',
      options: ['', 'top', 'right', 'left', 'bottom', 'center']
    },
    direction: {
      type: String,
      value: 'center',
      options: ['top', 'right', 'left', 'bottom', 'center']
    },
    // 锁定
    locked: {
      type: Boolean,
      value: false
    },
    opacity: {
      type: Number,
      value: 0.4
    }
  },

  attached() {
    this._init();
  },

  pageLifetimes: {
    show() {
      this._init();
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    status: 'show'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _init() {
      wx.lin = wx.lin || {};
      wx.lin.showPopup = (options) => {
        const {
          zIndex = 99,
          animation = true,
          contentAlign = 'center',
          locked = false
        } = { ...options };
        this.setData({
          zIndex,
          animation,
          contentAlign,
          locked,
          show: true
        });
      };
      wx.lin.hidePopup = () => {
        this.setData({
          status: 'hide'
        });
        setTimeout(()=>{
          this.setData({
            show: false
          });
        },300);
      };
    },
    // 阻止滑动
    doNothingMove() {
      // do nothing……
    },
    doNothingTap() {
      // do nathing
    },

    // 点击事件
    onPupopTap() {
      let detail = true;
      let option = { bubbles: true, composed: true };
      if (this.data.locked !== true) {
        if(!this.data.show) {
          this.setData({
            show: true,
            status: 'show'
          });
        } else {
          this.setData({
            status: 'hide'
          });
          setTimeout(()=>{
            this.setData({
              show: false,
              status: 'show'
            });
          },300);
        }
        // this.setData({
        //   show: !this.data.show
        // });
      }

      this.triggerEvent('lintap', detail, option);
    }
  }
});
