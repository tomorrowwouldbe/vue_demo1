<template>
	<div class="hello">
		<div align="center">这是{{msg}}页...</div>
		<button @click="jump">跳转</button>
	</div>
</template>
<script>
export default{
	name:'page3',
	data(){
		return{
			msg:'page3'
		}
	},
	methods:{
		jump(){
			console.log(this)
			this.$router.push({
				path:'/page4',
				query:{
					id:10,
					name:'顶顶顶顶顶顶顶顶顶顶顶顶'
				}
			})
		}
	}
}
</script>
<style scoped>

</style>