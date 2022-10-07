import Footer from "./footer"
import {  useEffect } from "react"
import Navbar from "./navbar"
import { signOut, useSession } from "next-auth/react"
import { useAccount, useDisconnect } from "wagmi"
interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const { address, status } = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log('Connected', { address, connector, isReconnected })
    }
  })
  const { data: session} = useSession()
  const { disconnect } = useDisconnect()


  useEffect(() => {
    if(session && address){
      if(session?.address !== address){
        disconnect()
        signOut()
      }
    }
  }, [address, status])
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
