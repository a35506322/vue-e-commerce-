import emitter from '../methods/emitter.js'

export default function (response, status = '新增') {
  if (response.data.success) {
    emitter.emit('message', {
      title: `${status}成功`
    })
  } else {
    // [ ]單純是因為解構賦值
    const errMessage = typeof response.data.message === 'string' ? [response.data.message] : response.data.message
    emitter.emit('message', {
      style: 'danger',
      title: `${status}失敗`,
      content: errMessage.join('、')
    })
  }
}
