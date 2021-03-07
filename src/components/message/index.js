import message from "./Message.vue"
import { createVNode, render } from 'vue';
function show() {
}
const successMessage = function (options) {
    options.type = 'success';
    showMessage(options)
}
const infoMessage = function (options) {
    options.type = 'info';
    showMessage(options)
}
const warnMessage = function (options) {
    options.type = 'warn';
    showMessage(options)
}
const errorMessage = function (options) {
    options.type = 'error';
    showMessage(options)
}
const showMessage = (options) => {
    let container = document.getElementById("message-container");
    if (container === null) {
        container = document.createElement('div');
        container.id = "message-container";
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center'
        container.style.justifyContent = 'space-between'
        document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    options.show = true;
    //创建虚拟节点
    const vm = createVNode(
        message,
        options,
    )
    //渲染虚拟节点
    render(vm, toast)
    container.appendChild(toast);
}
export default {
    install: (app, options) => {
        app.config.globalProperties.$message = show;
        app.config.globalProperties.$message.success = successMessage;
        app.config.globalProperties.$message.info = infoMessage;
        app.config.globalProperties.$message.warn = warnMessage;
        app.config.globalProperties.$message.error = errorMessage;
    }
}