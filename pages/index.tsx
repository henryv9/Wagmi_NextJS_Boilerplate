import Layout from "../components/layout"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { getCsrfToken, signIn, useSession } from "next-auth/react"
import { SiweMessage } from "siwe"
import { useAccount, useNetwork, useSignMessage } from "wagmi"

function IndexPage() {
  const { signMessageAsync } = useSignMessage()
  const { chain } = useNetwork()
  const { address } = useAccount()
  const { data: session, status } = useSession()

  const handleLogin = async () => {
    try {
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
    }
  }

  return (
    <Layout>
      {address ? 
      session ? "" :
      (
        <button
          onClick={(e) => {
            e.preventDefault()
            handleLogin()
          }}
        >
          Sign-in
        </button>
      ) : (
        <ConnectButton />
      )}
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}

IndexPage.Layout = Layout

export default IndexPage