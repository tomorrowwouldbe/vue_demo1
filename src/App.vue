<template>
  <div id="app">
    <div class="flex">
      <router-link to="/"><span>页面1</span></router-link>
      <router-link to="/page2"><span>页面2</span></router-link>
      <router-link to="/page3"><span>页面3</span></router-link>
      <router-link to="/page4"><span>页面4</span></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{margin:0;padding:0;}
.clearfix{
  display:table;
  content:'';
  clear:both;
}
.gray { 
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray;
}
.lt{float:left;}
.rt{float:right;}
.flex{display:flex;flex-direction:row;align-items:center;justify-content:space-around;}
.flex-column{display:flex;flex-direction:column;align-items:center;}
.flex-1{flex:1;}
.center{text-align:center;}
.inline-block{display:inline-block;}
.block{display:block;}
</style>
