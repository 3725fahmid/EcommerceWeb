import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <>
    <div className="nav">
        <ul>
            <li>
                <Link href="/">
                <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/Product">
                <a>Product</a>
                </Link>
            </li>
            <li>
                <Link href="/About">
                <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/Contact">
                <a>Contact</a>
                </Link>
            </li>
            <li>
                <Link href="/Card">
                <a>Card</a>
                </Link>
            </li>
        </ul>
    </div>
    </>
  )
}

export default navbar