class NavigationBarUtil{constructor(t){this.systemInfo=t}getNavigationBarHeight(){return this.getTitleBarHeight()+this.getStatusBarHeight()}getStatusBarHeight(){return this.systemInfo.statusBarHeight}getTitleBarHeight(){const t=this.getStatusBarHeight(),e=this.getCapsuleButtonInfo();return 2*(e.top-t)+e.height}getCapsuleButtonInfo(){const t=this.systemInfo.screenWidth,e=wx.getMenuButtonBoundingClientRect();return e.left=t-e.right,e.right=e.left+e.width,e}}const navigationBarUtil=new NavigationBarUtil(wx.getSystemInfoSync());export default navigationBarUtil;