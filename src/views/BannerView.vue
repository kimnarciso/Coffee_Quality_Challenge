<script setup>
import DashBoard from '@/components/DashBoard.vue';

</script>

<template>
<main>
<section class="banner">
  <div class="banner-content">
    <div class="banner-decoration">
  <span>CAMPEONATO</span>

  <div class="line"></div>

    <img src="/imagens/coffee-bean.png">
</div>

    <h1>
      Campeonato de <br>
      Avaliação de <br>
      Qualidade de <span>Café</span>
    </h1>

    <p>
      Avalie, compare e descubra os melhores cafés especiais.
      Seu paladar faz parte dessa história.
    </p>

    <div class="banner-bottom-decoration">
      <div class="line"></div>
  
      <img src="/imagens/coffee-bean.png">
  
      <div class="line"></div>
  </div>
  </div>

  <div class="banner-image">
    <img src="/imagens/cafe.png" alt="Xícara de café">
  </div>
</section>

<section>
<DashBoard/>
</section>
</main>

</template>

<style scoped>
.banner { 
  max-width: 1400px;
  margin: 20vh 3vw 40px;
  padding: 60px 0 60px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f7ebda;
  border-radius: 35px;
  box-shadow: 0 15px 40px rgba(0,0,0,.08);
}


.banner h1 {
  font-family: "Cormorant Garamond", serif;
  font-size: 70px;
  line-height: 1.05;
  color: #3d2416;
  margin: 20px 0;
}
.banner h1 span {
  color: #7A5A3A;
}

.banner p {
  font-size: 20px;
  color: #6b5847;
  max-width: 500px;
}

.banner-decoration{
    display:flex;
    align-items:center;
    gap:18px;
    margin-bottom:25px;
}

.banner-decoration span{
    font-size:18px;
    letter-spacing:3px;
    color:#7A5A3A;
}

.banner-bottom-decoration{
    display:flex;
    align-items:center;
    gap:15px;
    margin:35px 0;
}

.banner-bottom-decoration .line{
    width:120px;
    height:2px;
    background:#b98b5f;
}
.line{
    width:220px;
    height:2px;
    background:#b98b5f;
}

.banner-bottom-decoration img{
    width: 35px;
}


.banner-image img {
  width: 100%;
  max-width: 550px;
  filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.5));
}

.cards {
    display: flex;
    gap: 9vw;
    margin: 40px;
}
</style>
