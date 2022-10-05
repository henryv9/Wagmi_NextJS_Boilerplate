import Layout from "../components/layout"
import Image from "next/image"

import discrodImage from '../images/discord.png'
import twitterImage from '../images/twitter.png'
import coverImage from '../images/cover.png'
import checkIcon from '../images/icon-check.png'
import profileImage from '../images/profile-image.png'
import { getSession } from "next-auth/react"

function IndexPage() {
  return (
    <Layout>
    <div className="fit bg-gray-800">
        <p className="text-3xl font-robold text-white pt-8 ml-10 text-left">New to INWEB3</p>           
        <div className="w-full pt-10 pb-10 grid px-8 sm:px-10 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6">

            {[...Array(4)].map((x, i) =>
            <div key={i} className="w-full  max-w-6xl shadow-md rounded-md bg-zinc-900 text-white">
                <Image
                  className="w-full h-36 max-h-32 object-cover "
                  layout="responsive"
                  src={coverImage}
                />   
                <div className="avatar-wrapper w-fit m-auto">
                    <div className="avatar-parent">
                        <Image
                            className="avatar"
                            src={profileImage}
                          />
                      
                    </div> 
                    <span className="button__badge bg-amber-500">
                        <Image
                            src={checkIcon}
                            width="12"
                            height="12"
                          />
                    </span>
                </div>

                <div className="px-9 mt-5">
                    <p className="font-bold text-md">Renkon NFT</p>
                    <p className="font-rolight text-sm">@renkon</p>
                    <p className="text-sm mt-3 mb-5">Discover the mystery behind 'The Pond'. Embrace your roots.</p>
                    <div className="flex flex-col items-center mb-10 ">
                        <button type="button" className="shadow-md justify-start w-48 mb-2 text-white bg-sky-500 hover:bg-sky-600 text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 rounded-md">
                            <Image
                              className="mr-2 -ml-1 w-5 h-5"
                              src={twitterImage}
                            />                            
                            12,129 FOLLOWERS
                        </button>
                        <button type="button" className="shadow-md justify-start w-48 mb-2 text-white bg-sky-700/75 hover:bg-sky-700 text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 rounded-md">
                            <Image
                              className="mr-2 -ml-1 w-5 h-5"
                              src={discrodImage}
                            />                               
                            5,100 MEMBERS
                            </button>
                            <button type="button" className="shadow-md justify-start w-48 mb-2 text-white bg-zinc-800 hover:bg-sky-700 text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 rounded-md">
                            <Image
                              className="mr-2 -ml-1 w-5 h-5"
                              src={discrodImage}
                            />                                
                            renkon.com
                        </button>                        
                    </div>
                </div>                
            </div>
            )}
        </div>
        </div>      
      
    </Layout>
  )
}



IndexPage.Layout = Layout

export async function getServerSideProps(context: any) {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/protected',
        permanent: false,
      },
    }
  }
  return {
    props: { session }
  }
}
export default IndexPage