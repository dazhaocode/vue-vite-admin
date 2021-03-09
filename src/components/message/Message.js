import MessageConstructor from "./index.vue"
import { createVNode, render } from 'vue';
const instances = [];
let seed = 0;
const Message = (options) => {
    if (typeof options == 'string') {
        options = {
            text: options
        }
    }
    let verticalOffset = options.offset || 20
    instances.forEach(({ vm }) => {
        verticalOffset += (vm.el.offsetHeight || 0) + 16
    })
    verticalOffset += 16
    const id = 'message_' + seed++
    options = {
        ...options,
        onClose: () => {
            close(id)
        },
        offset: verticalOffset,
        id,
    }

    const toast = document.createElement("div");
    options.show = true;
    //创建虚拟节点
    const vm = createVNode(
        MessageConstructor,
        options,
    )
    vm.props.onDestroy = () => {
        render(null, toast)
    }
    //渲染虚拟节点
    render(vm, toast)
    instances.push({ vm })
    document.body.appendChild(toast.firstElementChild)
}
export function close(id) {
    const idx = instances.findIndex(({ vm }) => {
        const { id: _id } = vm.component.props
        return id === _id
    })
    if (idx === -1) {
        return
    }

    const { vm } = instances[idx]
    if (!vm) return
    const removedHeight = vm.el.offsetHeight
    instances.splice(idx, 1)
    // adjust other instances vertical offset
    const len = instances.length
    if (len < 1) return
    for (let i = idx; i < len; i++) {
        console.log(parseInt(instances[i].vm.el.style['top'], 10), '4')
        const pos =
            parseInt(instances[i].vm.el.style['top'], 10) - removedHeight - 20
        instances[i].vm.component.props.offset = pos
    }
}

(['success', 'warn', 'info', 'error']).forEach(type => {
    Message[type] = options => {
        if (typeof options === 'string') {
            options = {
                text: options,
                type,
            }
        } else {
            options.type = type
        }
        return Message(options)
    }
})

export default Message;