<template>
<div class="title">
  <h1>Visualize your skills as a softwear developer</h1>
  <p>下記のチェックリストに回答することで、CSの基礎知識・Backend・Database・Infrastructure・Frontend・Securityの6項目におけるあなたのスキルレベルを可視化することができます</p>
  <div class="checklist"><router-link class="link" to="/checkList/">チェックリスト</router-link></div>
  <div class="bottom-container"><p>© Maho Hemmi/Yuma Kubuta/Kota Fukuda/Ryuta Ishikawa</p></div>
</div>
</template>


<script>
export default {
  components: {
  }
}
</script>

<style scoped>

div.title {
  text-align: center;
}
div.checklist{
  text-align: center;
  
}
div.bottom-container{
  padding: 50px 0 20px;
}

.link{
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border: solid 1px #008CBA;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.link:hover{
  color: #008CBA;
  background-color: white;
  transition: .5s;
}

h1 {
  color: #008CBA;
}

p {
  width: 90%;
  display: inline-block;
  text-align: center;
}

</style>
