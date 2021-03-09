import Message from './Message'
Message.install = (app) => {
    app.config.globalProperties.$message = Message
}
export default Message