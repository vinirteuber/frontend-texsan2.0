<template>
  <div class="whatsapp-link">
    <a href="#"> <img src="@/assets/zapzap.png" alt="" /></a>
  </div>
  <header>
    <div class="logo">
      <img src="@/assets/logo.png" alt="#" />
    </div>
    <div class="links">
      <ul>
        <a href="/home"><li>Home</li></a>
        <a href="/sobrenos"><li>Sobre Nós</li></a>
        <a href="/produtos"><li>Produtos</li></a>
        <a href="/contato"><li>contato</li></a>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "MENU",
};
</script>

<style scoped>
.logo img {
  width: 15%;
}

.whatsapp-link img {
  position: fixed;
  cursor: pointer;
  justify-content: flex-end;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  border-radius: 50px;
  text-align: center;
  font-size: 60px;
  box-shadow: 1px 1px 2px #888;
  z-index: 1000;
}

header {
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  position: fixed;
  display: flex;
  width: 100vw;
  height: 90px;
  background: #019c9a94;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.4px);
  -webkit-backdrop-filter: blur(6.4px);
  z-index: 1000;
}

header li {
  margin-top: 30px;
  text-transform: uppercase;
  margin-bottom: 40px;
  margin-right: 25px;
  display: inline;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
header li:hover {
  text-shadow: 3px 3px 6px rgb(255, 255, 255);
}
a:-webkit-any-link {
  font-size: 14px;
  color: #eefff0;
  cursor: pointer;
  text-decoration: none;
}
</style>
