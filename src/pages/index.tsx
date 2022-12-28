import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Accent1 from '../images/decor-Intersect-1.svg'
import DecorTextUnderLine from '../images/text-decor-hero.svg'
import Link from 'next/link'


export default function Home() {


  return (
    <>
    <div>
      <Head>
        <title>Jadoo</title>
        <meta name="description" content="Jadoo App Travel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute z-10 w-full py-12">
        <Header />
      </div>

      <section className="relative mb-28">
        <span className="absolute w-5/12 h-screen right-0 top-0 bottom-0 text-accent-3">
          <Accent1 className="fill-accent-4" />
        </span>
        <div  className="w-96 h-96 bg-accent-2/70 rounded-full blur-3xl absolute -left-64 -top-10"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            <div className="w-6/12 pt-52">
              <h1 className="text-accent-3 font-bold text-xl uppercase mb-5">Best Destinations around the world</h1>
              <h2 className="text-gray-900 font-serif text-[84px] leadig-[84px] tracking-tighter mb-8">Travel, {" "} 
              <span className="relative">
                 enjoy <span className="absolute left-0 top-full -mt-8 -ml-4 -z-10"> 
                 <DecorTextUnderLine className="w-[385px] h-[12px] fill-accent-3"/>
                </span></span>
              and live a new
              and full life
              </h2>
              <p className="text-gray-500 max-w-lg leading-8 mb-8">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
              <div className="flex">
                  <Link href="" className="mr-11 bg-accent-1 shadow-accent-1/30 shadow[0_20px_35px] px-6 py-4 text-white rounded-xl">
                  Find our more
                  </Link>
                  <button className="flex items-center">
                    <span className="mr-6 bg-accent-3 text-white justify-center inline-flex items-center py-4 px-4 rounded-full shadow-accent-3/30 shadow-[0_15px_30px]">
                    <span className="material-icons">
                    play_arrow
                    </span>
                    </span>
                    <span className="text-gray-500">Play Demo</span>
                  </button>
              </div>
            </div>
            <div className="w-6/12 pt-24 relative">
              <div className="absolute w-[150px] h-[100px] top-40 z-30 left-16">
                <Image alt='hero' src="/images/plane.png" width={1500} height={800}  />
              </div>
              <div className="absolute w-[150px] h-[100px] top-64 z-10 -right-20">
                <Image alt='hero' src="/images/plane.png" width={1500} height={800}  />
              </div>
              <div className="relative z-30 transform top-8 translate-x-16 w-[765px] h-[764px] -left-32">
                <Image priority alt='hero' src="/images/hero-raveller.png" width={765} height={764}  />
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
