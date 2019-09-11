import React from 'react'
import {withRouter} from 'react-router-dom'

function CityItem(props){
    return <div onClick={() => {props.history.push(`/shops/${props.storeId}`)}}>
        {props.storeName}
    </div>
}

export default withRouter(CityItem)