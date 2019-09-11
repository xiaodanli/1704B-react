import React,{Component} from 'react'
import {registry} from '@/api/user'

class Registry extends Component{
    state = {
        username:'',
        password:'',
        nickname:''
    }
    render(){
        let {username,password,nickname} = this.state;
        return <div>
            <input type="text" placeholder="用户名" value={username} onChange={this.change} name="username"/>
            <input type="text" placeholder="密码" value={password} onChange={this.change} name="password"/>
            <input type="text" placeholder="昵称" value={nickname} onChange={this.change} name="nickname"/>
            <button onClick={this.registryFun}>注册</button>
        </div>
    }

    change = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    registryFun = () => {
        // 添加验证  都不为空
        registry(this.state).then(res => {
            console.log(res)
            if(res.data.code === 1){
                alert("注册成功");
                this.props.history.push({pathname:'/login'})
            }else{
                alert("注册失败")
            }
        })
    }
}

export default Registry