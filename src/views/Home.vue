<template>
  <div>this is home page</div>
  <button @click="$store.commit('increment', 2)">increment</button>
  <div>{{ $store.state.count }}</div>
  <button @click="$message.success({ text: '这是一条success消息提示' })">
    success
  </button>
  <button @click="$message.error({ text: '这是一条error消息提示' })">
    error
  </button>
  <button @click="$message.info({ text: '这是一条info消息提示' })">info</button>
  <button @click="$message.warn({ text: '这是一条warn消息提示' })">warn</button>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>