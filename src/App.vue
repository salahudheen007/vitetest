<template>
  <div class="container">
    <CardImage></CardImage>
    <div class="body">
      <card-body></card-body>
      <keep-alive>
        <component v-bind:is="alive" v-on:CardShare="changeTab()" v-on:CardFooter="changeTab()"></component>
      </keep-alive>
    </div>
  </div>
   <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Salahudheen</a>.
    </div>
    <router-view></router-view>
</template>

<script>
import CardBody from "./components/CardBody.vue";
import CardImage from "./components/CardImage.vue";
import CardFooter from "./components/CardFooter.vue";
import CardShare from "./components/CardShare.vue";
export default {
  name: "App",
  components: {
    CardImage,
    CardBody,
    CardFooter,
    CardShare,
  },
  data: function () {
    return {
      alive: "CardFooter",
    };
  },
  methods:{
    changeTab(){
      if(this.alive==="CardFooter"){
        this.alive="CardShare"
      }else{
        this.alive="CardFooter"
      }
    }
  },
};
</script>
<style scoped>
.container {
  display: flex;
  overflow: hidden;
  margin: auto;
  border-radius: .6rem;
}
.attribution {
  font-size: 11px;
  text-align: center;
  margin-top: 10px;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}
@media (max-width: 720px) {
  .container {
    flex-direction: column;
    width: 20rem;
  }
}
@media (min-width: 721px) {
  .container {
    flex-direction: row;
    width: 44rem;
    height: 18rem;
  }
  .body {
    height: 100%;
    justify-content: end;
    background-color: white;
  }
}
</style>
