<template>
  <transition
    name="fade"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      class="message"
      :class="[type ? `message-${type}` : '']"
      v-if="visible"
      :style="customStyle"
    >
      {{ text }}
    </div>
  </transition>
</template>

<script>
import { onMounted, ref, computed } from "@vue/runtime-core";
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
    id: { type: String, default: "" },
    type: {
      type: String,
    },
    onClose: {
      type: Function,
      required: true,
    },
    offset: { type: Number, default: 20 },
  },
  emits: ["destroy"],
  setup(props) {
    let visible = ref(props.show);
    const customStyle = computed(() => {
      return {
        top: `${props.offset}px`,
      };
    });
    const close = () => {
      visible.value = false;
    };
    onMounted: {
      //setTimeout(() => close(), props.duration);
    }
    return { visible, customStyle };
  },
};
</script>

<style>
.message {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
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
.message-success {
  background: #4caf50;
}
.message-info {
  background: #00bcd4;
}
.message-warn {
  background: #ff9800;
}
.message-error {
  background: #f44336;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
</style>