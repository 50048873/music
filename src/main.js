import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
fastclick.attach(document.body)

import '@src/common/less/base.less'
import '@src/common/less/common.less'
import '@src/common/font/font-awesome-4.7.0/css/font-awesome.min.css' 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
