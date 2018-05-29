<template>
	<div class="hello">
		<div align="center">这是{{msg}}页...</div>
		<div class="flex">
			<router-link to="/page2"><span>分类1</span></router-link>
			<router-link to="/page2/section2"><span>分类2</span></router-link>
			<router-link to="/page2/section3"><span>分类3</span></router-link>
		</div>
		<router-view/>
	</div>
</template>
<script>
export default{
	name:'page2',
	data(){
		return{
			msg:'page2'
		}
	}
}
</script>
<style scoped>

</style>