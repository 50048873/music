<template>
	<div id="app">
		<m-header></m-header>
		<m-tab></m-tab>
		<router-view></router-view>
	</div>
</template>

<script>
import MHeader from '@src/components/m-header'
import MTab from '@src/components/m-tab'
export default {
	name: 'App',
	components: {
		MHeader,
		MTab
	}
}
</script>