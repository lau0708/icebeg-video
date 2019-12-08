<template>
  <div>
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        title:""
      }
    },
    watch: {
      '$route': 'judgeTitle'
    },
    mounted(){
      this.judgeTitle()
    },
    methods:{
      judgeTitle () {
       this.title=this.$route.name
      }
    },
  }
</script>

<style scoped>
  .title{
    line-height: 56px;
    font-size: 16px;
    font-weight: 700;
  }
</style>
