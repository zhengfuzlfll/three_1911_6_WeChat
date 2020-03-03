//将首页所需要用到的一些状态放在此处
export default (
    state={
        bannerlist: [], //初始的数据
        prolist: []
    },
    action
)=>{
    const { type, data } = action
    // const { type, payload } = action
    switch (type) {
        case 'CHANGE_HOME_BANNER_LIST':
            return {...state, ...{ bannerlist: data }}
        case 'CHANGE_HOME_PRO_LIST':
            return Object.assign({}, state, { prolist: data })
        default:
            break;
    }
    return state
}