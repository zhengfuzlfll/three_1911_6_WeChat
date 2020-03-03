/* 容器组件 */
import { connect } from 'react-redux' //高阶组件的connect
import UI from './UI.jsx'

const Com = connect()(UI) //把一个组件作为它的参数，并返回一个新的组件
export default Com