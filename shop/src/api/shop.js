import request from '@/utils/request'

/**
 * 获取热门城市列表
 */ 
export function citys(){
    return request.get('/buyer/storelist')
}

/**
 * 获取国家商品列表
 * @param {Object} data 携带的参数
 */ 
export function goods(data){
    return request.post('/store/goods/list',data)
}