<script setup>
</script>

<template>
  <footer>
    <div class="footer-content">

      <div class="logo-footer">
        <img src="/imagens/logo.png" alt="Logo">
        <p>Celebrando a qualidade dos melhores cafés.</p>
      </div>

      <div class="links">
        <h3>Navegação</h3>
        <a href="/">Home</a>
        <a href="/avaliacoes">Avaliações</a>
        <a href="/ranking">Ranking</a>
      </div>

      <div class="info">
        <h3>Coffee Quality Challenge</h3>
        <p>Um espaço para avaliar, comparar e valorizar cafés especiais.</p>
      </div>

    </div>

    <div class="copyright">
      <p>© 2026 Coffee Quality Challenge. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>

footer {
  margin-top: 80px;
  background: #7A5A3A;
  color: #E7D2B7;
  padding: 40px 8% 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 0.6fr 1fr;
  gap: 50px;
  align-items: start;
}

.logo-footer img {
  width: 100px;
}

.logo-footer p,
.info p {
  margin-top: 15px;
  color: #D7BFA6;
  line-height: 1.5;
}

h3 {
  color: #F5E6D3;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.links a {
  color: #E7D2B7;
  text-decoration: none;
  transition: .3s;
}

.links a:hover {
  color: white;
  transform: translateX(5px);
}

.copyright {
  border-top: 1px solid rgba(231,210,183,.3);
  margin-top: 35px;
  padding-top: 20px;
  text-align: center;
}

.copyright p {
  font-size: .9rem;
  color: #C9AA8B;
}


@media(max-width: 800px){

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

}

</style>