import React from 'react'
import Logo from '../../images/logo.svg'
import Link from 'next/link';

export default function Header() {
    const menuItems = ['Destination','Hotels', 'Flights','Bookings', 'Login']
    return (
      <div>
        <header className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="w-28">
              <Logo className="logo-style-1"/>
            </div>
            <div className="w-auto">
              <ul className="flex items-center">
                <li>
                  {menuItems.map((menuItem) => (
                  <Link key={menuItem} href={'/' + menuItem.toLocaleLowerCase()} className="px-9 text-gray-800">{menuItem}</Link>
                  ))}
                </li>
                <li>
                <Link  href="/signup" className="px-5 text-gray-800 py-1 border border-gray-800 rounded-md mx-3">Sign up</Link>
                </li>
                <button className="px-9 text-gray-800 relative">
               EN
               <span className="absolute w-2 h-2 border-gray-800 border-b border-r transform rotate-45 translate-y-1/2 ml-2"></span>
                </button>
              </ul>
            </div>
          </div>
        </header>
      </div>
    )
  }

