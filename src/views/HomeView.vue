<template>
  <div id="app">
    <Menu />
    <div class="carrousel">
      <Carrousel />
    </div>
    <div class="cards">
      <Card />
      <Card />
      <Card />
      <Wav />
    </div>
  </div>
</template>

<script>
import Menu from "@/components/navbar.vue";
import Carrousel from "@/components/carrousel.vue";
import Card from "@/components/card.vue";
import Wav from "@/components/waves.vue";
export default {
  name: "HomeView",
  components: {
    Menu,
    Carrousel,
    Card,
    Wav,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  border: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.carrousel {
  display: flex;
  align-items: center;
  justify-content: center;
}

body {
  background-color: #eefff0;
}
header {
  position: fixed;
  display: flex;
  width: 100%;
  height: 90px;
  background: #019c9a94;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.4px);
  -webkit-backdrop-filter: blur(6.4px);
  z-index: 1000;
}
.logo img {
  padding: 0;
  margin-top: 1%;
  margin-left: 5%;
  width: 15%;
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
.admin button {
  cursor: pointer;
  background: rgba(1, 156, 154, 0.76);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.3px);
  -webkit-backdrop-filter: blur(1.3px);
  color: #eefff0;
  border: 2px solid #eefff0;
  font-family: "Poppins", sans-serif;
  border-radius: 20px;
  margin-top: 29px;
  height: 40px;
  width: 100px;
}
.admin button:hover {
  color: #12525c;
  border: none;
  background-color: #eefff0;
}
.card-group {
  justify-content: center;
}
.card {
  border-radius: 25px;
  box-shadow: 7px 7px 13px 0px rgba(226, 226, 226, 0.22);
  background: rgba(1, 156, 154, 0.58);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.4px);
  -webkit-backdrop-filter: blur(11.4px);
  margin: 20px;
  width: 350px;
  transition: all 0.3s ease-out;
  color: #eefff0;
  text-align: center;
  flex-direction: row;
}
.card img {
  border-radius: 25px 25px 0 0;
  margin-right: 15px;
  height: 250px;
  width: 350px;
}
.card .button button {
  width: 300px;
  height: 50px;
  border-radius: 30px;
  background: linear-gradient(to right, #eefff0, #88acb3);
  color: rgb(72, 72, 72);
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 400;
}
.card .button button:hover {
  border: 2px solid #eefff0;
  width: 300px;
  color: #eefff0;
  height: 50px;
  background: rgba(0, 122, 120, 0.63);
  border-radius: 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.1px);
  -webkit-backdrop-filter: blur(5.1px);
  border: 3px solid rgba(255, 255, 255, 0.3);
}
.card h1 {
  margin-bottom: 1rem;
  background: -webkit-linear-gradient(45deg, #dae7e9, #c9cfcf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
a {
  margin-bottom: 140px;
}
.help-link {
  padding: 15px;
}
.help-link span {
  text-decoration: none;
}
.card-group {
  display: flex;
  flex-wrap: wrap;
}
.center {
  margin-top: 2%;
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
.waves {
  margin-top: 300px;
  position: absolute;
  z-index: -1;
}
.wave1 {
  animation: moveWave1 10s infinite alternate;
}
@keyframes moveWave1 {
  from {
    transform: scaleX(4);
  }
}
.wave2 {
  animation: moveWave2 3s 1.2s infinite alternate;
}
@keyframes moveWave2 {
  from {
    transform: scaleX(6);
  }
}
.wave3 {
  animation: moveWave3 3s 0.7s infinite alternate;
}
@keyframes moveWave3 {
  from {
    transform: scaleX(8);
  }
}
.single-item img {
  margin-top: 90px;
}
.cards {
  justify-content: center;
  display: flex;
}
</style>
