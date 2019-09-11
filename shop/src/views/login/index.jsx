import React,{Component} from 'react'
import {captcha,login} from '@/api/user'
import {connect} from 'react-redux'

class Login extends Component{
    state = {
        username:'',
        password:'',
        captcha:'',
        img:''  //图形验证码
    }
    render(){
        console.log(this.props)
        let {username,password,captcha,img} = this.state;
        return <div>
            <input type="text" placeholder="请输入用户名" name="username" value={username} onChange={this.change}/>
            <input type="text" placeholder="请输入密码" name="password" value={password}
            onChange={this.change}
            />
            <input type="text" placeholder="输入验证码" name="captcha" value={captcha}
            onChange={this.change}
            />
            <div dangerouslySetInnerHTML={{ __html: img }}  />
            <button onClick={this.loginFun}>登录</button>
        </div>
    } 

    change = (e) => {
        let name = e.target.name;
        this.setState({
            [name]:e.target.value
        })
    }

    componentDidMount(){
        //获取图形验证码
        captcha().then(res => {
            this.setState({
                img:res.data.data
            })
        })
    }

    loginFun = () => {
        let {username,password,captcha} = this.state;
        let params = {username,password,captcha}
        login(params).then(res => {
            if(res.data.code === 1){
                window.localStorage.setItem('token',res.data.token)
                this.props.history.push({pathname:'/citys'})
                this.props.setName(res.data.buyer_name)
            }
        })
    }
}

// mapStateToProps  mapDispatchToProps

export default connect(state => {
    return {
        username:state.user.username
    }
},dispatch => {
    return {
        setName(name){
            dispatch({type:'SET_NAME',name})
        }
    }
})(Login)