import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

function RouterView({routes}){
    // Route Redirect
    let RouteArr = routes.filter(item => !item.redirect);
    let redirectArr = routes.filter(item => item.redirect);
    return <Switch>
            {/* <Route path='/login' component={Login}/>
            <Route path='/registry' component={Registry}/>
            <Route path='/citys' component={Citys}/>
            <Route path='/shops' component={Shops}/>
            <Route path='/detail' component={Detail}/>
            <Route path='/write' component={Write}/>
            <Route path='/my' component={My}/>
            <Route path='/order' component={Order}/> */}

            {/* /citys  --->  Citys */}
            {
                RouteArr.map(item => <Route key={item.path} path={item.path} render={(props) => {
                    return <item.component {...props} routes={item.children}></item.component>
                }}/>)
            }
            
            {/* {RouteArr.map(item => <Route key={item.path} path={item.path} render={(props) => {return <item.component routes={item.children} {...props}></item.component>}}/>)}  */}
            {redirectArr.map(item => <Redirect from={item.path} to={item.redirect} key={item.path}></Redirect>)}
            {/* <Redirect from="/" to="/citys"></Redirect> */}
        </Switch>
}

export default RouterView