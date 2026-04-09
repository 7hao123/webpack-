<template>
  <section class="app">
    <h1>vue-loader 已接入</h1>
    <p>{{ message }}</p>
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "现在这个页面来自 src/App.vue",
    };
  },
};
</script>

<style scoped>
.app {
  margin: 48px auto;
  max-width: 720px;
  padding: 32px;
  border-radius: 16px;
  background: linear-gradient(135deg, #f3f7ff, #ffffff);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  color: #1f2937;
  font-family: "Segoe UI", "PingFang SC", sans-serif;
  text-align: center;
}

h1 {
  margin: 0 0 16px;
  color: #2563eb;
  font-size: 32px;
}

p {
  margin: 0;
  font-size: 18px;
}
</style>
