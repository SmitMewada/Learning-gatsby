import React from 'react'
import Footer from './footer'
import Header from './header'
import "../styles/index.scss"

const Layout = (props) => {
    return (
        <div>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>
    )
}

export default Layout
