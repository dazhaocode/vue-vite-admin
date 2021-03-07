<template>
  <transition name="fade">
    <div
      class="message"
      :class="{
        success: type == 'success',
        info: type == 'info',
        warn: type == 'warn',
        error: type == 'error',
      }"
      v-if="visible"
    >
      {{ text }}
    </div>
  </transition>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
export default {
  name: "Message",
  props: {
    text: {
      type: String,
      default: "",
    },
    show: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 2000,
    },
    type: {
      type: String,
    },
  },
  setup(props) {
    let visible = ref(props.show);
    onMounted: {
      setTimeout(() => (visible.value = false), props.duration);
    }
    return { visible };
  },
};
</script>

<style>
.message {
  width: 300px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 0.2rem;
  border-radius: 0.3rem;
  color: #fff;
  text-align: center;
  font-size: 0.32rem;
}
.success {
  background: #4caf50;
}
.info {
  background: #00bcd4;
}
.warn {
  background: #ff9800;
}
.error {
  background: #f44336;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>