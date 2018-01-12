import JSPlumb from './utils/jsplumb'
import JPPoint from './components/jp-point'

function plugin (Vue, opts = {}) {
  if (plugin.installed) {
    return
  }

  Vue.component('jp-point', JPPoint)

  Object.defineProperties(Vue.prototype, {
    $jsplumb: {
      get () {
        return JSPlumb
      }
    }
  })
}

export default plugin
