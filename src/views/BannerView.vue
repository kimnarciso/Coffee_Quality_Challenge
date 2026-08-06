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
  margin: 140px auto 40px;
  width: min(1400px, calc(100% - 40px));
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 550px;
  filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.5));
}



/* ==========================
   Tablet
========================== */
@media (max-width: 900px) {

  .banner {
    flex-direction: column;
    text-align: left;
    padding: 40px 0 40px 30px;
    margin: 120px 0 30px 24px ;
  }

  .banner-content {
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  .banner h1 {
    font-size: 48px;
  }

  .banner p {
    font-size: 17px;
    max-width: 600px;
    margin-right: 30px;
  }
  .banner-image {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .banner-image img {
    max-width: 320px;
  }

  .banner-decoration,
  .banner-bottom-decoration {
    justify-content: left;
    margin-bottom: 15px;
  }

  .line {
    width: 120px;
  }

  .banner-bottom-decoration .line {
    width: 70px;
  }
}

/* ==========================
   Celular
========================== */
@media (max-width: 600px) {
  .banner {
    margin: 110px 0 24px 12px;
    padding: 28px 0 28px 20px;
    border-radius: 22px;
  }

  .banner h1 {
    font-size: 2.3rem;
    line-height: 1.15;
  }

  .banner p {
    font-size: 1rem;
    margin-right: 20px;
  }

  .banner-decoration span {
    font-size: .9rem;
    letter-spacing: 2px;
  }

  .banner-decoration img,
  .banner-bottom-decoration img {
    width: 26px;
  }

  .line {
    width: 70px;
  }

  .banner-bottom-decoration .line {
    width: 45px;
  }

  .banner-image img {
    max-width: 260px;
  }
    .banner-image {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

}

/* ==========================
   Celulares pequenos
========================== */
@media (max-width: 380px) {
  .banner {
    padding: 22px 0 22px 16px;
  }

  .banner h1 {
    font-size: 2rem;
  }

  .banner p {
    font-size: .95rem;
    margin-right: 16px;
  }

  .line {
    width: 45px;
  }

  .banner-bottom-decoration .line {
    width: 30px;
  }

  .banner-image img {
    max-width: 220px;
  }
}
</style>
