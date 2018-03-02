# music

> 基于vue的音乐播放器(4-3 02:47)

## Build Setup

``` bash
# install dependencies
npm install

# 启动服务在 localhost:8087
npm run dev

# 启动代理服务在 localhost:8087
npm run devProxy

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 说明：
1.如果是ajax请求QQ音乐的数据，则存在跨域问题，解决办法是使用node代理。
  npm run devProxy启了一个带代理功能的服务。代理服务会监听ajax自定请求，并转发到真实的请求上。