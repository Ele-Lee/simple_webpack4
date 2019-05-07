// 引入router
import router from '../../router'

// 引入html模板, 会被作为字符串引入
import template from './index.html'

// 引入css, 会生成<style>块插入到<head>头中
import '../../css/base.less'
// import './index.css'
import './join.css'
import './culture.css'

// 导出类
export default class {
  mount(container) {
    document.title = 'foo'
    container.innerHTML = template
  }
}
