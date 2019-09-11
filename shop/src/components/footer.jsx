import React from 'react'
import {NavLink} from 'react-router-dom'
import '@/assets/scss/footer.scss'

function Footer(){
    return <footer className="footer">
        <NavLink to="/citys">城市</NavLink>
        <NavLink to="/order">订单</NavLink>
        <NavLink to="/my">我的</NavLink>
    </footer>
}

export default Footer