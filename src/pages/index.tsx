import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from "@/components/Hero"
import Footer from './../components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`rounded shadow-sm bg-gray-100 pl-10 pr-20 max-md:px-5 min-h-screen`}
    >
      <Hero />
      <div className="text-gray-700 text-lg leading-7 self-stretch whitespace-nowrap mt-6">Revolutionize Your</div>
      <h2 className="text-zinc-900 text-6xl font-semibold leading-[82px] mt-1.5 max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">Creative Projects with<br />the Ultimate Al-Powered<br />
        <div className='flex flex-row gap-6 items-center justify'>
          <div>
            Pattern
          </div>
          <button className="text-white bg-black text-base leading-7 rounded-full border-solid border-gray-600 border-2 px-6 py-2 border-opacity-50 max-md:px-5 mt-4">
            Start Generating
          </button>
          <div className="flex flex-col items-stretch px-5 text-sm">
            <h1 className="text-gray-500 text-sm font-medium leading-8 w-full -mr-5">
              The Next generation
            </h1>
            <p className="text-gray-600 text-sm gap-2 w-full flex flex-row">
              <span className="font-bold text-zinc-900">Production</span>
              <span className=" text-gray-600"> for Designers</span>
            </p>
          </div>
        </div>
      </h2>
      <div className='my-10'>
      <Footer />
      </div>

    </main>
  )
}
