<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <h1>AlloCap</h1>
    </header>
    <router-view ref="home"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222f3e;
}

header {
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 100px);
  grid-gap: 0.2rem;
  justify-content: center;
  justify-items: center;
  align-items: center;
}
header h1 {
  text-transform: uppercase;
  font-size: 48px;
  margin: 30px 0 0;
}
header a {
  width: 100%;
  padding: 0.5rem;
  background-color: lightgrey;
  border-radius: 0.3rem;
  display: none;
}

@media (max-width: 767px) {
  body {
    font-size: 0.875rem;
  }
}
</style>
