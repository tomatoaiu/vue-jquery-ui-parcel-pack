<template>
  <div>
    <div id="draggable"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      word: "Hello, world"
    }
  },
  mounted () {
    $(() => {
      $( "#draggable" ).draggable();
    })
  }
}
</script>

<style scoped>
#draggable {
  display: block;
  border: 1px solid #aaa;
  width: 100px;
  height: 100px;
}
</style>

