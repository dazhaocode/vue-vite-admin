<template>
  <div>this is home page</div>
  <button @click="$store.commit('increment', 2)">increment</button>
  <div>{{ $store.state.count }}</div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>