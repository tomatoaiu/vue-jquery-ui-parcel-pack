<template>
  <div>
    <button class="halo">say!</button>
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
      $(document).on("click", ".halo", () => {
        console.log(this.word)
      })
    })
  }
}
</script>
