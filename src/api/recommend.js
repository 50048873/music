import jsonp from '@src/api/jsonp'
import {commonParams} from '@src/api/config'
import $ from 'jquery'
import axios from 'axios'

// 通过jsonp请求推荐页->轮播图数据
export function getRecommendByJsonp() {
	const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'  
	const data = Object.assign(commonParams, {
		platform: 'h5',
		uin: 0,
		needNewCode: 1
	})
	return jsonp(url, data)
}

// 通过ajax请求推荐页->轮播图数据
export function getRecommendByAjax() {
	// 通过build/dev-server.js代理轮播图数据请求，'/api/getRecommend'为自定义的接口
	const url = '/api/getRecommend'  
	return $.ajax({
				url: url
			}).then((res) => {
			    return res
			}, (err) => {
			  	return err
			})
}

export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }, (err) => {
  	console.log(err)
  })
}