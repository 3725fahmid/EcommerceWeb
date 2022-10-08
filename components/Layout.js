import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            {/* <div class="grid grid-flow-col auto-cols-max"> */}
                <div><Navbar/></div>
                <div>{children}</div>
                {/* <Footer /> */}
            {/* </div> */}
        </>
    )
}

export default Layout