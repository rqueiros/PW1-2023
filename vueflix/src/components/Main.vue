<template>
  <div>
    <form @submit.prevent="addSerie">
      <!-- NAME -->
      <p>
        <label for="txtName">NAME: </label>
        <input type="text" id="txtName" required v-model="name" />
      </p>
      <!-- CATEGORY -->
      <p>
        <label for="sltCategory">CATEGORY: </label>
        <select id="sltCategory" required v-model="category">
          <option value="">--SELECT CATEGORY--</option>
          <option value="comedy">COMEDY</option>
          <option value="mystery">MYSTERY</option>
          <option value="romance">ROMANCE</option>
          <option value="terror">TERROR</option>
        </select>
      </p>
      <!-- SCORE -->
      <p>
        <label for="txtScore">SCORE: </label>
        <input
          type="number"
          id="txtScore"
          required
          min="1"
          max="10"
          v-model="score"
        />
      </p>
      <!-- SUBMIT -->
      <p>
        <input type="submit" value="ADD SERIE" />
      </p>
    </form>
    <br /><br />
    <p v-if="series.length != 0">
      <!--FILTER-->
      <p>
        <label for="txtFilterName">FILTER BY NAME: </label>
        <input type="text" id="txtFilterName" v-model="filterName">
      </p>
    <table>
      <tr>
        <th>NAME</th>
        <th>CATEGORY</th>
        <th>SCORE</th>
      </tr>
      <tr v-for="serie in filterSeriesByName" :key="serie.name">
        <td>{{ serie.name }}</td>
        <td>{{ serie.category }}</td>
        <td>{{ serie.score }}</td>
        <td><button @click="removeSerie(serie.name)">REMOVE</button></td>
      </tr>
    </table>
    </p>
    <p v-else>No series found!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [],
      name: "",
      category: "",
      score: 1,
      filterName: "",
    };
  },
  created () {
    window.addEventListener("beforeunload", this.saveSeries);
    this.series = localStorage.series ? JSON.parse(localStorage.series) : []
  },
  methods: {
    addSerie() {
      if (this.series.some((serie) => serie.name == this.name)) {
        alert("SERIE ALREADY EXIST!");
      } else {
        // Create the new object
        const newSerie = {
          name: this.name,
          category: this.category,
          score: this.score,
        };

        // Add to the array
        this.series.push(newSerie);
      }
    },
    removeSerie(name) {
      if (confirm("You really want to remove this serie?")) {
        this.series = this.series.filter((serie) => serie.name != name);
      }
    },
    saveSeries() {
      localStorage.series = JSON.stringify(this.series)
    }
  },
  computed: {
    sortedSeries() {
      return this.series.sort((s1, s2) => {
        if (s1.score > s2.score) return -1;
        if (s1.score < s2.score) return 1;
        return 0;
      });
    },
    filterSeriesByName() {
      return this.sortedSeries.filter(
        (serie) => !serie.name.indexOf(this.filterName)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>