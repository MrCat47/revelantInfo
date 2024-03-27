<template>
  <div class="home">
    <img alt="Fondo" src="../assets/logo2.png">
    <HelloWorld msg="RevelantInfo"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup() {
    let parametro = 200;

    //parametro= Number(prompt("Escriba un valor de la variable: "))
    return{
      
      parametro,
    };
  },
}
</script>
