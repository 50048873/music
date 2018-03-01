import Vue from 'vue'
import Router from 'vue-router'
import MRecommend from '@src/components/m-recommend'
import MSinger from '@src/components/m-singer'
import MRank from '@src/components/m-rank'
import MSearch from '@src/components/m-search'

Vue.use(Router)

export default new Router({
	mode: 'history',
	linkActiveClass: 'ON',
	routes: [
		{
			path: '/',
			redirect: '/recommend'
		},
		{
			path: '/recommend',
			name: 'MRecommend',
			component: MRecommend
		},
		{
			path: '/singer',
			name: 'MSinger',
			component: MSinger
		},
		{
			path: '/rank',
			name: 'MRank',
			component: MRank
		},
		{
			path: '/search',
			name: 'MSearch',
			component: MSearch
		}
	]
})
