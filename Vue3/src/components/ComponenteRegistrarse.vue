<template>
    <div>
        <section id="S1">

            <h1>RevelantInfo</h1>

            <label for="nombre">Usuario</label>
            <input id="nombre" type="text" v-model="Person.nombre">
            <br><br>

            <label for="contraseña">Contraseña</label>
            <input id="contraseña" type="text" v-model="Person.contraseña">
            <br><br>

            <label for="codigo">Código </label>
            <input id="codigo" type="number" min="18" max="100" v-model="Person.codigo">
            <br><br>

            <label for="edad">Edad</label>
            <input id="nombre" type="text" v-model="Person.edad">
            <br><br>

            <button id="bt1" @click="this.$store.dispatch('actualizarPersona', Person)" onclick="alert('Revisa los datos en el componente ')">Enviar</button>
            <br><br>

        </section>
    </div>
</template>

<script>
export default{

    name: 'ComponenteRegistrarse2',

    setup(){

        //variable
        let Person = {
            nombre: '',
            edad: null,
            codigo: '',
        };
    return{
        Person
    };
    },
}
</script>

<style scoped>

</style>