import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div>
          <nav>
              <div className="logo">
                  <h1> NetDesignr List</h1>
              </div>
        <Link href='/'>
          <a>Home</a>
        </Link>     
        <Link href='/about'>
          <a> About</a> 
        </Link>   
        <Link href='/Net'>
          <a >NetDesignr List</a>
        </Link>   
          </nav>
    </div>
  )
}

export default Navbar
