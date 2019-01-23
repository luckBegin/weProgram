//index.js
//获取应用实例
// import { IMyApp } from '../../app'
// const app = getApp<IMyApp>()
import { $Event } from '../../util/Event/Event' ;
Page({
  data: {

  },
  //事件处理函数
  bindViewTap() {
  },

  onLoad() {
    $Event.$emit("load" , true) ;
  },
})
