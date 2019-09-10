import React from 'react'
import RouterView from '@/router/router-view'

function Citys(props){
    console.log(props.routes)
    return <div>
        <RouterView routes={props.routes}></RouterView>
        {/* <Switch>
            <Route path='/citys/one' component={One}/>
            <Route path='/citys/two' component={Two}/>
            <Redirect from="/citys" to="/citys/one"></Redirect>
        </Switch> */}
    </div>
}

export default Citys