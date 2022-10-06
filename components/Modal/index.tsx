import {useEffect,Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { getCsrfToken, signIn, useSession } from "next-auth/react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { SiweMessage } from "siwe"
import { useAccount, useNetwork, useSignMessage } from "wagmi"
import { useRouter } from 'next/router'
import Image from 'next/image'
import closeIcon from '../../public/img/icon-close.svg'
import metamaskIcon from '../../public/img/meta-mask.png'
import verifyIcon from '../../public/img/icon-verify.png'

const Modal = ({ show, onClick=()=>{}  }: { show: boolean; onClick?:() => void }) => {
    const { signMessageAsync } = useSignMessage()
    const router = useRouter()
    const { chain } = useNetwork()
    const { address, isConnected } = useAccount()
    const { data: session, status } = useSession()
  
    const handleLogin = async () => {
      try {
        loadingStarter()
        const callbackUrl = "/protected"
        const message = new SiweMessage({
          domain: window.location.host,
          address: address,
          statement: "Sign in with Ethereum to the app.",
          uri: window.location.origin,
          version: "1",
          chainId: chain?.id,
          nonce: await getCsrfToken(),
        })
        const signature = await signMessageAsync({
          message: message.prepareMessage(),
        })
        signIn("credentials", {
          message: JSON.stringify(message),
          redirect: false,
          signature,
          callbackUrl,
        })
      } catch (error) {
        window.alert(error)
        errorSignIn()
      }
    }   
   
    // const show:boolean = false
    const cancelButtonRef = useRef(null)
    var bodyPart = null;
    const [loading, setLoading] = useState(false)
    const [dialogStatus, setDialogStatus] = useState(0)
      const errorSignIn = () => {
        setLoading(false)
        setDialogStatus(0)
      }
      const confirm = () => {
        setDialogStatus(2)
      }  
    
      const Loader = () => {
        return (
            <div className="flex justify-center flex-col items-center text-white">
                <p className="font-bold">Connecting</p>
                <svg className="inline mr-2 w-24 h-24 mt-8 text-gray-700 animate-spin dark:text-gray-600 fill-gray-100" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                            
                <span className="sr-only">Loading...</span>
            </div>
        );
      }
    
      const loadingStarter = () => {
        setLoading(true)
      }
      useEffect(() => {
        if(session && isConnected) {
            router.replace("/protected")
        }
      },[session,isConnected]);
    
      if(!loading){
        if(dialogStatus === 0){
            bodyPart = (
                <div className="mt-3 text-center sm:mt-0 sm:ml-4">
                <Dialog.Title as="h3" className="text-white text-lg text-center leading-7 font-bold">
                    <p>Welcome to InWeb3</p>
                    <p>Connect your Wallet to continue</p>
                </Dialog.Title>
                <div className="mt-7">
                    {address ? 
                    session ? "" :
                    (
                        <button type="button" onClick={(e) => {
                            e.preventDefault()
                            handleLogin()
                        }}  className="shadow-md justify-start w-1/2 text-white bg-sky-700/75 hover:bg-sky-700 text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 rounded-md">
                        <Image className="mr-2 -ml-1 w-5 h-5" src={metamaskIcon} alt="" />
                        <p className="ml-2">Metamask</p>
                        </button>
                    ) : (
                        <div className="shadow-2xl bg-sky-600 rounded-md text-white w-fit px-5 py-3 m-auto">
                          <ConnectButton />
                          </div>
                    )}                    
                </div>
                <p className="text-xs px-16 text-white mt-6">By connecting your wallet and using inWeb3, 
                you agree to our <strong>Terms of Service</strong> and <strong>Privacy Policy</strong>.</p>
                </div> 
            )
        } else if(dialogStatus === 1) {
            bodyPart = (
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4">
                    <Dialog.Title as="h3" className="text-white text-lg text-center leading-7 font-bold">
                        <p className="text-lg font-bold">Connect Wallet with InWeb3</p>
                    </Dialog.Title>
                        <Image className="mt-5 m-auto w-9 h-9 " src={metamaskIcon} alt="" />
                        <p className="font-sans italic text-sm mt-5 text-gray-200/80">
                            You will receive signature request. 
                            We will not ask for access your assets. 
                            Signing is free and will not send a transaction.
                        </p>
                        <Image className="mt-5 m-auto w-12 h-12 " src={verifyIcon} alt="" />
                        <div className="text-white">
                            <p className="font-bold text-md mt-3">Verify Ownership</p>
                            <p className="font-bold text-xs mt-1">Confirm you are the owner of :</p>
                            <div className=" text-green-200 text-[11px] mt-2">
                                <p>auph.eth</p>
                                <p>0xca4943fdAe24Fe6bC202e6ed736883ADF2EEFB75</p>
                            </div>
    
                            <div className="flex xs:flex-row mx-7 my-6">
                                <div className="basis-1/2">Remember me</div>
                                <div className="basis-1/2">
                                    <label className="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                                    </label>                            
                                </div>                            
                            </div>
                            <button type="button" onClick={confirm} className="mt-5 w-48 shadow-md justify-center text-white bg-sky-700/75 hover:bg-sky-700 text-xs tracking-widest px-5 py-2.5 inline-flex items-center mr-2 rounded-sm font-bold">
                                CONNECT
                            </button>                        
                            <p className="text-xs px-16 mt-6 font-rolight">
                            By using INWEB3, you agree to the  <strong>Terms of Service</strong>
                            </p>
                        </div>
                    </div> 
            )
            /* SASAS */
    
            
        } else if(dialogStatus === 2) {
            bodyPart = (
                <div className="mt-3 text-center sm:mt-0 sm:ml-4">
                <Dialog.Title as="h3" className="text-white text-lg text-center leading-7 font-bold">
                    <p className="text-lg font-bold">Create your INWEB3 username</p>
                </Dialog.Title>
                    <p className="my-2 font-rolight text-gray-100 mb-8 text-sm">This username is your handle.</p>
                    <p className="font-sans italic text-xs mt-2 mx-16 text-gray-200/80">
                      Must only contain lowercase letters, numbers. You may also change it later, subject to availability.
                    </p>
                    <input type="text" className="bg-zinc-700 text-white mt-3 text-sm rounded-sm block w-72 m-auto pl-10 p-2.5" placeholder="Search In Web 3"/>                
                    <div className="text-white">
                        <button type="button" onClick={confirm}  className="mt-7 w-48 shadow-md justify-center text-white bg-sky-700/75 hover:bg-sky-700 text-xs tracking-widest px-5 py-2.5 inline-flex items-center mr-2 rounded-sm font-bold">
                            CONFIRM
                        </button>                        
                    </div>
                </div>
            )
        }
      }else{
        bodyPart = <Loader/>
      }

    const handleClick = () => {
        onClick();
      }
    return (
    <Transition.Root show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => {}}>
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
                <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 mb-8">
                <div className="flex justify-end">
                    {dialogStatus === 0 && !loading ? 
                    <Image  onClick={handleClick} src={closeIcon} width="20" height="20" alt=""/> : ""}  
                </div>
                    <div className="flex justify-center flex-col">
                    {bodyPart}
                    </div>
                </div>

                </Dialog.Panel>
            </Transition.Child>
            </div>
        </div>
        </Dialog>
    </Transition.Root>
    )    
};

export async function getServerSideProps(context: any) {
    return {
      props: {
        csrfToken: await getCsrfToken(context),
      },
    }
  }

export default Modal;