<template>
	<nav class="m-tab">
		<router-link to="/recommend">
			<span>推荐</span>
		</router-link>
		<router-link to="/singer">
			<span>歌手</span>
		</router-link>
		<router-link to="/rank">
			<span>排行</span>
		</router-link>
		<router-link to="/search">
			<span>搜索</span>
		</router-link>
	</nav>
</template>

<script>
export default {
	name: 'MRank'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	@import '../common/less/variable.less';
	.m-tab {
		display: flex;
		text-align: center;
		> a { 
			display: block;
			flex: 1;
			> span {
				display: inline-block;
				color: @color-text-l;
			}
			&.ON {
				span {
					padding-bottom: 5px;
					color: @color-theme;
					border-bottom: 2px solid @color-theme;
				}
			}
		}
	}
</style>
