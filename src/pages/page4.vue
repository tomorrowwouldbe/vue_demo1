<template>
	<div class="hello">
		<div align="center">这是{{msg}}页...</div>
		<div align="center">{{$route.query.id+'-'+$route.query.name}}</div>
	</div>
</template>
<script>
export default{
	name:'page4',
	data(){
		return{
			msg:'page4'
		}
	},
	created(options){
		console.log(options)
		console.log(this.$route.query)
	}
}
</script>
<style scoped>

</style>