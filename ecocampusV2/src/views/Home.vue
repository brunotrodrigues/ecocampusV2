<script>

</script>

<template>
    <!-- <div v-if="user">
        <h1>Bem-vindo {{user.firstName}}!</h1>
        <p><router-link to="/users">Manage Users</router-link></p>
    </div> -->
    <div class="containerBg">
      <div class="container1">
        <img class="image" src="../assets/noah-buscher-x8ZStukS2PM-unsplash croped.svg" alt="">
        <span class="span1">Esta aplicação tem como principal objetivo apoiar os alunos envolvidos no projeto eco-escolas.
        Pretendemos elucidar os alunos a participarem em atividades, fazer registo de
        problemas associados ao ambiente e proporcionar um melhor estilo de vida no que toca à
        poupança e conservação do ambiente.</span>
      </div>
        <div class="container2">
            <h2 class="headerContainer2">O que é o programa Eco-Escolas?</h2>
            <span class="span">
              Eco-Escolas é um programa internacional da “Foundation for Environmental Education”, desenvolvido em Portugal desde 1996 
              pela ABAE.
              Pretende encorajar ações e reconhecer o trabalho de qualidade desenvolvido pela escola, no âmbito da Educação Ambiental 
              para a Sustentabilidade. O programa é coordenado a nível internacional, nacional, regional e de escola. 
              Esta coordenação multinível permite a confluência para objetivos, metodologias e critérios comuns que respeitam a 
              especificidade de cada escola relativamente aos seus alunos e caraterísticas do meio envolvente.
            </span> 
        </div>
        <div class="container3">
            <h2 class="headerContainer3">Parceiros</h2>
            <span class="span2">Alguns parceiros deste projeto</span>
            <div class="imageCenter">
              <img class="image1" src="../assets/pingo-doce-removebg-preview.png" alt="">
              <img class="image1" src="../assets/ERP-removebg-preview.png" alt="">
              <img class="image1" src="../assets/JM_Logo_Dusk_Blue_RGB-removebg-preview.png" alt="">
              <img class="image1" src="../assets/novo-verde-removebg-preview.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
footer {
  font-family: "Gilroy", sans-serif;
  background-color: white;
  width: 100%;
  height: 120px;
  display: grid;
  grid-template-columns: minmax(80px, 8%) 300px auto 430px;
}
.containerBg {
  background-color: white;
}
.image1 {
  width: 20%;
}
.container1 {
  position: relative;
  text-align: center;
  color: white;
}
.span1{
  position: absolute;
  font-family: 'Gilroy', sans-serif;
  font-weight: bold;
  top: 35%;
  left: 50%;
  transform: translate(-50%, 50%);
}
.image {
  margin-top: 0%;
  opacity: 0.85;
  object-fit: fill;
  width: 100%;
  height: 50%;
}
.imageCenter {
  margin-left: 17%;
}
.container {
  display: flex;
}

.firstContainer {
  height: 120px;
  position: absolute;
  grid-column: 1/2;
  justify-content: center;
}
.container3 {
	margin-top: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.headerContainer3 {
	font-size: 80px;
	font-family: 'Gilroy', sans-serif;
	font-weight: bold;
	text-align: center;
	line-height: 88.5%;
	margin-bottom: 20px;  
}

.span2 {
	margin-top: 10px;
  font-family: 'Gilroy', sans-serif;
  text-align: center;
}
.container2 {
	margin-top: 3%;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.headerContainer2 {
	max-width: 830px;
	text-align: center;
}

.headerContainer2 {
	font-size: 80px;
	font-family: 'Gilroy', sans-serif;
	font-weight: bold;
	text-align: center;
	line-height: 88.5%;
	margin-bottom: 20px;
}

.span {
	margin-top: 10px;
  font-family: 'Gilroy', sans-serif;
  width: 50%;
}

#logo {
  width: 85px;
  position: relative;
  left: -80px;
}

.secondContainer {
  grid-column: 2/3;
  color: black;
  flex-direction: column;
  justify-content: center;
}

.secondContainer span {
  font-weight: 1000;
  font-size: 9px;
}

.secondContainer p {
  font-weight: 700;
  font-size: 9px;
  color: black;
  max-width: 180px;
  margin-bottom: 0;
}

.bold {
  font-weight: 700 !important;
  color: #212020;
  font-weight: bold;
}

.thirdContainer {
  align-items: center;
  justify-content: center;
}

a {
  color: black;
  font-family: "Gilroy", sans-serif;
  text-decoration: none;
  font-weight: 700;
  font-size: 10px;
  padding: 0 20px;
}

.forthContainer {
  align-items: center;
}

.social {
  width: 50px;
  padding: 0 10px;
}
</style>
