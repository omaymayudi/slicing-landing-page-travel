import Head from 'next/head'
import Image from 'next/image'
import Logo from '../images/logo.svg'
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>Jadoo</title>
        <meta name="description" content="Jadoo App Travel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute z-10 w-full py-12">
        <header className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="w-28">
              <Logo className="logo-style-1"/>
            </div>
            <div className="w-auto">
              <ul className="flex items-center">
                <li>
                  <Link href="/destination" className="px-9 text-gray-800">Destination</Link>
                  <Link href="/destination" className="px-9 text-gray-800">Destination</Link>
                  <Link href="/destination" className="px-9 text-gray-800">Destination</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>


    </>
  )
}
