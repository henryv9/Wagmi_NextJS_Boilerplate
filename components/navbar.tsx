import { useSession } from "next-auth/react"
import { useState } from "react"
import Dropdown from "./common/navbar-dropdown"
import Modal from "./Modal/index"
import { useAccount, useNetwork, useSignMessage } from "wagmi"

export default function Navbar() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const [isOpen, setIsOpen] = useState(false)
  const { isConnected } = useAccount()
  return (
    <div>
        <nav className="relative bg-gray-900 px-4 py-2 " aria-label="Global">
            <div className="flex flex-col sm:flex-row  justify-between items-center">
              <div  className="flex flex-row items-center mb-3 mt-3 sm:mb-0 sm:mt-0">
                  <div className="mx-2 ml-4 pt-1 w-6 h-6 bg-white shadow-md"></div>
                  <div className="mx-2">
                    <p className="font-robold text-white text-xs">INWEB3</p>
                  </div>
              </div>
              <div  className="flex flex-row items-center mb-3 mt-3 sm:mb-0 sm:mt-0">
              <div className="relative font-roboto">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="text" className="bg-zinc-700 text-white text-sm rounded-sm block w-full pl-10 p-2.5" placeholder="Search In Web 3"/>
              </div>                 
              </div>              
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex items-center gap-3 text-center xs:mb-0">
                  <a className="p-2 xs:px-4 mb-2 sm:mb-1 md:mb-0 font-bold text-xs mx-1 text-white" >HOME</a>
                  <a className="p-2 xs:px-4 mb-2 sm:mb-1 md:mb-0 font-bold text-xs mx-1 text-white" >EXPLORE</a>
                  { isConnected && session ? <Dropdown/> : <button type="button" 
                      onClick={() => setIsOpen(true)}
                      className="text-white hover:text-white border
                      border-white hover:bg-zinc-700 font-medium 
                      rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2">Connect Wallet</button>
                  }
                </div>
                <div className="flex flex-row items-center">
                </div>
              </div>
              
            </div>
          </nav>
           <Modal onClick={() => setIsOpen(false)}  show={isOpen}  />
    </div>
  )
}
