import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk';
/* 拿到所有模块中的数据 */
const reducer = combineReducers({
/* combineReducers 分模块写状态 */
})

const store =  createStore(reducer, applyMiddleware(thunk))
/* 暴露模块 */
export default store
