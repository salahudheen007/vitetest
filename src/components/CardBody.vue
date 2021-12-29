<template>
    <div class="card-body">
    <card-text></card-text>
    <card-share></card-share>
    </div>
</template>
<script>
import CardText from './CardText.vue'

export default {
    name:'CardBody',
    components:{
        CardText,
    }
}
</script>
<style scoped>
   .card-body{
       padding: 2rem;
       background-color: white;
    }
</style>