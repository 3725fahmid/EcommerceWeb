import React from 'react'
import Link from 'next/link'
import Header from './Header'

const Navbar = () => {
    return (
        <>

<Header />
        
            {/* <nav class="flex justify-center item-center space-x-4 bg-slate-300 ">
                <Link href="/">
                    <a class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                        Home
                    </a>
                </Link>
                <Link href="/Products">
                    <a class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                        Products</a>
                </Link>
                <Link href="/team">
                    <a class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                        Team</a>
                </Link>

                <Link href="/About">
                    <a class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                        About</a>
                </Link>
                <Link href="/Contact">
                    <a class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                        Contact</a>
                </Link>
                <Link href="/Card">
                    <a class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                        Card</a>
                </Link>
            </nav> */}
        </>
    )
}

export default Navbar