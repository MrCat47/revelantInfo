<template>
    <div>
        <section id="S2">
            <h1>revelantInfo</h1>

            <label for="usuario">Usuario</label>
            <input id="usuario" type="text" v-model="Usuario.usuario">
            <br><br>

            <label for="contrasena">Contraseña</label>
            <input id="contrasena" type="text" v-model="Usuario.contrasena">
            <br><br>

            <router-link to="/perfil">Ingresar</router-link>

        </section>
    </div>
    
</template>

<script>

export default{

    name: 'ComponenteIniciarSeccion2',

    setup(){
        
        let Usuario = {
            usuario : '',
            contrasena : ''
        };
        return{
            Usuario
        };
    },
}

</script>

