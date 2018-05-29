<template>
	<div class="hello">	
		<Lunbo/>
		<div align="center">这是{{msg}}页...</div>
		<Slider/>
	</div>
</template>
<script>
import Lunbo from '@/components/lunbo'
import Slider from '@/components/slider'

export default{
	name:'page1',
	data(){
		return{
			msg:'page1'
		}
	},
	components:{Lunbo,Slider}
}
</script>
<style scoped>

</style>