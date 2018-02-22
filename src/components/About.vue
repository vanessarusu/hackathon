 /* eslint-disable */
<template>
  <div class="hello">
    <h1>{{ text }}</h1>
    <div class="wrapper">
    <h2>Container One</h2>
  <div class="container" v-dragula="colOne" bag="first-bag">
    <!-- with click -->
    <div class="drag-list-item one" v-for="text in colOne">pink - {{text}}</div>
  </div>
  <h2>Container Two</h2>
  <div class="container" v-dragula="colTwo" bag="first-bag">
    <div class="drag-list-item two" v-for="text in colTwo">{{text}}</div>
    <div class="drag-list-item three" v-for="text in colThree">{{text}}</div>
  </div>
</div>
  </div>



</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'TESTING',
      text: 'text',
      colOne : ['one', 'two', 'three', 'four'],
      colTwo : ['one', 'two'],
      colThree : ['one', 'two']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.drag-list-item {
  background: yellow;
  padding: 20px;
  width: 100%;
  margin-top: 5px;
  cursor: pointer;
}
.drag-list-item.one {
  background: pink;
}
.drag-list-item.three {
  background: red;
}
.gu-mirror {
}
.container {
  min-height: 100px;
}
</style>
