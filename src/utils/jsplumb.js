import { jsPlumb } from 'jsplumb'

// 构建时的默认配置
let defaultOption = {
  Connector: ['Bezier', { curviness: 50 }],
  Endpoint: ['Dot', { radius: 5 }],
  DragOptions: { cursor: 'pointer', zIndex: 5000 },
  PaintStyle: { lineWidth: 5, stroke: '#445566' },
  EndpointStyle: { radius: 7, fill: '#acd', stroke: 'red' },
  HoverPaintStyle: { stroke: '#ec9f2e', lineWidth: 4 },
  EndpointHoverStyle: { fill: '#ec9f2e', stroke: '#acd' },
  Container: 'flows'
}

let instance = {
  $instance: undefined
}

function ready (opts) {
  opts = opts === undefined ? defaultOption : opts
  return new Promise((resolve, reject) => {
    jsPlumb.ready(() => {
      instance.$instance = jsPlumb.getInstance(opts)
      resolve(instance)
    })
  })
}

// 第一次初始化
ready().then(_ => {})

export default {
  ready,
  instance
}
