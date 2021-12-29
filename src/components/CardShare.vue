<template>
  <div class="card-share">
    <div class="share-icons">
      <p>S H A R E</p>
      <ul>
        <li>
          <img src="/src/assets/icon-facebook.svg" alt="fb" />
        </li>
        <li><img src="/src/assets/icon-twitter.svg" alt="twitter" /></li>
        <li>
          <img src="/src/assets/icon-pinterest.svg" alt="pinterest" />
        </li>
      </ul>
    </div>
    <div class="share-logo">
      <button><img src="/src/assets/icon-share.svg" alt="share" v-on:click="$emit('CardFooter')" /></button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardShare",
};
</script>
<style scoped>
.card-share {
  display: flex;
  flex-direction: row;
  background-color: hsl(217, 19%, 35%);
  justify-content: space-between;
  padding: 1.3rem;
  align-items: center;
      transition: all .3s ease-in-out;
}
.share-icons {
  display: flex;
  flex-direction: row;
}
ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
}
p {
  color: hsl(212, 23%, 69%);
  padding: 8px 12px;
}
button {
  border: none;
  background-color: hsl(210, 46%, 95%);
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
}
li{
    margin-left: 1rem;
}
</style>