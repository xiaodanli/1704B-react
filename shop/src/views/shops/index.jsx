import React,{Component} from 'react'
import {goods} from '@/api/shop'

class Shops extends Component{
    render(){
        return <div>Shops</div>
    }
    componentDidMount(){
        goods({store_id:this.props.match.params.id}).then(res => {

        })
    }
}

export default Shops