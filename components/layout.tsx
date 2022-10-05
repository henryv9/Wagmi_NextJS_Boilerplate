import Header from "./header"
import Footer from "./footer"
import type { ReactChildren } from "react"
import Navbar from "./navbar"

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
