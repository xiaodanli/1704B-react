import React,{Component} from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CityItem from '@/components/city-item'
import {citys} from '@/api/shop'

class Citys extends Component{
    state = {
        cityList:[]
    }
    render(){
        let {cityList} = this.state;
        return <div className="wrap">
            <Header></Header>
            <div className="con">
                {cityList.map(item => <CityItem key={item.store_id} storeId={item.store_id} storeName={item.store_name}></CityItem>)}
            </div>
            <Footer></Footer>
        </div>
    }
    componentDidMount(){
        citys().then(res => {
            if(res.data.code === 1){
                this.setState({
                    cityList:res.data.result
                })
            }
            console.log(res)
        })
    }  
}

export default Citys