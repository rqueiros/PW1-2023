<template>
<div>
    <!--Abordagem estática-->
    <!-- Primeiro nome: {{person.firstName}}<br>
    Último nome: {{person.lastName}}<br>
    Idade: {{person.age}}<br> -->

    <!--Abordagem dinâmica-->
    <ul>
        <li v-for="(value, key) in person" :key="key">
            {{key}}: {{value}}
        </li>
    </ul>
    <button @click="printDataPerson">IMPRIMIR NOME E IDADE DA PESSOA</button>

    {{printDataPerson()}}
    {{printDataPerson()}}
    {{printDataPersonComputed}}
    {{printDataPersonComputed}}
</div>
</template>

<script>
export default {
data() {
    return {
        person: { firstName: 'Rui', lastName: 'Silva', age: 23 }
    }
},
created() {
    console.log('EVENTO: CRIAÇÃO');
},
mounted() {
    console.log('EVENTO: MONTAGEM');
},
updated() {
    console.log('EVENTO: ATUALIZAÇÃO');
},

methods: {
    printDataPerson() {
        console.log(`METHOD--> NOME: ${this.person.firstName} e IDADE: ${this.person.age}`);
    }
},

computed: {
    getFullNameComputed() {
        return `${this.person.firstName} ${this.person.lastName}`
    },
    
    printDataPersonComputed() {
        console.log(`COMPUTED--> NOME: ${this.person.firstName} e IDADE: ${this.person.age}`);
    }
},

watch: {
    'person.age'(newValue, oldValue) {
        console.log(`Idade alterada de ${oldValue} para ${newValue}`);
    }
},
}
</script>


<style lang="scss" scoped>

</style>