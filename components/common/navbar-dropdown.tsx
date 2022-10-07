import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useDisconnect } from 'wagmi'
import arrowDownIcon from '../../public/img/icon-arrow-down.png'

export default function Dropdown() {
  const { data: session, status } = useSession()
  const { disconnect } = useDisconnect({
    onSuccess(){
      signOut()
    }
  })

  const handleLogout = () => {
    disconnect()
  }
  return (
    <div className="basis-1/3 inline-block" >
      <Menu as="div" className="text-left">
        <div>
          <Menu.Button className="flex w-full items-center gap-3 justify-center rounded-mdpx-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <img className="rounded-full" src={session?.user?.image ?? ""} width="40" height="40"  />
            <Image src={arrowDownIcon} width="10" height="10"  />
            {/* <Image
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            /> */}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full  items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Your Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Settings
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Business Account
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href={`/api/auth/signout`}
                    onClick={(e) => {
                        e.preventDefault()
                        handleLogout()
                      }}
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Logout
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}



