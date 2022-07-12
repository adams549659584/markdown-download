export const hosts = ['juejin.im', 'juejin.cn']

export const options = {
  origin: 'juejin',
  // 处理链接
  link: true,
  // 处理换行
  br: false,
  // 处理代码块
  code: false,
  selectors: {
    title: '.article-title',
    body: '.markdown-body',
    copyBtn: '.copy-code-btn',
    userName: '.username .name',
    userLink: '.username',
    invalid: 'style',
    unpack: ''
  }
}

export const hook = {}

export const config = {
  hosts,
  options,
  hook
}

export default config