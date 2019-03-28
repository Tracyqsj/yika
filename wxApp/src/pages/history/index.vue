<template>
  <div class="mainWrap">
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {},
  created() {},
  onLoad: function(option) {

    console.log(option.id)
  }
};
</script>

<style scoped>
.mainWrap {
  width: 100vw;
  height: 100vh;
  position: fixed;
}
</style>
