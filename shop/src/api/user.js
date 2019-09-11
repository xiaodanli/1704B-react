/*
 * @Author: 李晓丹 
 * @Date: 2019-09-11 05:40:15 
 * @Last Modified by: 李晓丹
 * @Last Modified time: 2019-09-11 10:51:25
 */

import request from '@/utils/request'

/**
 * 注册接口
 * @param {Object} data 注册接口携带的参数
 * 
 */

export function registry(data){
    return request.post('/buyer/user/register',data)
}

/**
 * 登录接口
 * @param {Object} data 登录接口携带的参数
 * 
 */

export function login(data){
    return request.post('/buyer/user/login',data)
}

/**
 * 获取图形验证码接口
 * @param 无
 * 
 */

export function captcha(){
    return request.get('/buyer/user/captcha')
}