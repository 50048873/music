<template>
	<div class="m-header">
		<i class="fa fa-user"></i>
		<h1>Music</h1>
	</div>
</template>

<script>
export default {
	name: 'MHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	@import '../common/less/variable.less';
	.m-header {
		position: relative;
	    text-align: center;
	    color: @color-theme;
	    font-size: 0;
	    h1 {
	    	line-height: 44px;
	    	font-size: @font-size-large;
	    }
	    .fa-user {
	      	position: absolute;
	    	top: 0;
	    	right: 0;
	        padding: 12px;
	        font-size: @font-size-large;
	      }
	}
</style>
