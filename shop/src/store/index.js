import {createStore,combineReducers} from 'redux'
import user from './user/index.reducer'

let reducer = combineReducers({
    user
})

let store = createStore(reducer)

/**
 * 1.createStore(reducer) 创建仓库 
 * 
 * reducer必须是一个函数
 * 
 * reducer(state,action){
 * 
 * }
 * 
 * 1>.state 设置初始值：1>state = 1   2>
 * 2>action 对象 {type:}
 * 
 * 2.获取getstate()
 * 
 * 2.修改  通过disptach派发reducer内对应的action
 * */ 

 window.store = store
 
 export default store