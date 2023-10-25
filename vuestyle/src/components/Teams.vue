<template>
    <div>
        <h1>Lista de equipas</h1>
        <button @click="addTeam('Braga', 1923)">ADD TEAM</button>
        <ul>
            <li v-for="team in teams" :key="team.name">
                Name: {{ team.name }} AND year: {{ team.year }}
            </li>
        </ul>
        <table>
            <tr>
                <th>#</th>
                <th>NAME</th>
                <th>YEAR</th>
            </tr>
            <tr v-for="(team, index) in teams" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ team.name }}</td>
                <td>{{ team.year }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            teams: [
                { name: "Benfica", year: 1910 },
                { name: "Porto", year: 1912 },
                { name: "Sporting", year: 1914 },
            ]
        }
    },
    methods: {
        addTeam(team, year) {
            this.teams.push({ name: team, year: year })
        }
    },
}
</script>

<style scoped>
td,
th {
    border: 1px solid red;
}
</style>