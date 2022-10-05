import React from 'react';
import discrodImage from '../images/discord.png'
import twitterImage from '../images/twitter.png'
import coverImage from '../images/cover.png'
import checkIcon from '../images/icon-check.png'
import profileImage from '../images/profile-image.png'
import nftImageOne from '../images/nft-dummy1.png'
import nftImageTwo from '../images/nft-dummy2.png'
import jewelIcon from '../images/jewel-icon.png'
import boatIcon from '../images/boat-icon.png'
import leafIcon from '../images/leaf-icon.png'
import ethIcon from '../images/eth-icon.png'
import ethSmall from '../images/eth-sm.png'
import arrowDown from '../images/arrow-down.png'
import spiralIcon from '../images/spiral-icon.png'
import nftImageThree from '../images/nft-dummy3.png'
import eventDummy from '../images/event-dummy1.png'
import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
function BusinessTwo (){
    return <div className="fit pt-10 bg-gray-800">
    <div className=" w-11/12 m-auto  max-w-6xl rounded-md  text-white">
        <div className="relative">
           <Image src={coverImage} alt="" className="shadow-md rounded-md w-full h-36 max-h-48 object-cover " />
           <div className="bg-yellow-500/80 absolute bottom-0 right-0 w-16 text-xs py-1 font-rolight font-bold">EDIT</div>
           <div className="bg-gray-700/80 border-b-2 border-yellow-500 absolute top-8 right-0 text-left w-auto px-4 text-xs py-1 font-rolight font-bold">
            <p className="text-white tracking-widest font-robold text-[10px]">TRUST SCORE</p>
            <p className="text-white tracking-widest font-rolight text-[10px]">99.20%</p>
           </div>
        </div>
        <div className="avatar-wrapper w-fit m-auto">
            <div className="avatar-parent -mt-20">
                <Image className="avatar" src={profileImage} alt="" />
                
            </div> 
            <span className="button__badge bg-amber-500">
                <Image src={checkIcon} width="12" height="12" alt="check" />
            </span>
        </div>
        <div className="flex flex-col md:flex-row pb-4 gap-4 -mt-5">
            <div className="basis-3/12 order-last sm:order-first">
                <div className="px-9 mt-5 bg-gray-700 pt-1 rounded-md">
                    <p className="font-bold font-robold text-left text-[10px] my-3">SOCIALS</p>
                    <div className="flex flex-col items-center mb-10 ">
                        <button type="button" className="text-[10px] font-bold w-44 shadow-md justify-start md:w-full mb-4 text-white bg-sky-500 hover:bg-sky-600 text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 rounded-md">
                            <Image className="mr-2 -ml-1 w-5 h-5" src={twitterImage} alt="" />
                            12,129 FOLLOWERS
                        </button>
                        <button type="button" className="text-[10px] font-bold w-44 shadow-md justify-start md:w-full mb-4 text-white bg-sky-700/75 hover:bg-sky-700 text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 rounded-md">
                            <Image className="mr-2 -ml-1 w-5 h-5" src={discrodImage} alt="" />
                            5,100 MEMBERS
                            </button>
                            <button type="button" className="text-[10px] font-bold w-44 shadow-md justify-start md:w-full mb-4 text-white bg-zinc-800 hover:bg-sky-700 text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 rounded-md">
                            <Image className="mr-2 -ml-1 w-5 h-5" src={discrodImage} alt="" />
                            renkon.com
                        </button>                        
                    </div>
                </div>   
                <div className="mt-5 pt-1 rounded-md">
                    <Disclosure>
                        <Disclosure.Button className="bg-gray-700 items-center w-full  rounded-t-2xl flex flex-row">
                           <div className="basis-1/6">
                              <div className=" bg-lime-400 h-12 w-7 relative rounded-tl-lg">
                                <p className=" pr-7 text-black rotate-[270deg] absolute -left-[10px] bottom-[30px] text-xs font-robold text-center">NFT</p>
                              </div>
                            </div> 
                           <div className="basis-2/6 text-xs text-left">Azuki</div> 
                           <div className="basis-3/6 justify-end grid auto-cols-max grid-cols-4">
                              <Image src={spiralIcon} className="w-5" alt="" />
                              <Image src={jewelIcon} className="w-5" alt="" />
                              <Image src={boatIcon} className="w-5" alt="" />
                            </div> 
                        </Disclosure.Button>
                        <Disclosure.Panel className=" text-white bg-gray-700 px-5 py-5">
                            <div className="text-left">
                                <p className="text-[10px] font-robold">MINT DATE</p>
                                <p className="font-rolight">04 June 2021</p>
                            </div>
                            <div className="flex flex-row mt-4">
                              <div className="basis-1/2 text-left">
                                <p className="text-[10px] font-robold">SUPPLY</p>
                                <p className="font-rolight">10,000</p>                                
                              </div>
                              <div className="basis-1/2 text-left ">
                                <p className="text-[10px] font-robold">FLOOR PRICE</p>
                                <div className="flex flex-row items-center gap-2">
                                    <Image src={ethIcon} className="w-2" alt=""/>
                                    <p className="font-rolight">
                                     2.4</p>
                                </div>
                              </div>                              
                            </div>
                            <div className="text-left mt-5">
                                <p  className="text-[10px] font-robold">MINT PRICE</p>
                                <div className="flex flex-row items-center gap-2">
                                    <Image src={ethSmall} className="w-2" alt=""/>
                                    <p className="font-rolight">
                                     0.1</p>
                                    <Image src={arrowDown} className="w-2" alt=""/>
                                </div>                                
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>             
                </div>
                <div className="mt-2 pt-1 rounded-md">
                    <Disclosure>
                        <Disclosure.Button className="bg-gray-700 items-center w-full  rounded-t-2xl flex flex-row">
                           <div className="basis-1/6">
                              <div className=" bg-purple-800 h-12 w-7 relative rounded-tl-lg">
                                <p className=" pr-7  rotate-[270deg] absolute -left-[10px] bottom-[30px] text-xs font-robold text-center">DEFI</p>
                              </div>
                            </div> 
                           <div className="basis-2/6 text-xs text-left">BEANZ</div> 
                           <div className="basis-3/6 justify-end grid auto-cols-max grid-cols-4">
                              <Image src={spiralIcon} className="w-5" alt="" />
                              <Image src={jewelIcon} className="w-5" alt="" />
                              <Image src={boatIcon} className="w-5" alt="" />
                              <Image src={leafIcon} className="w-5" alt="" />
                            </div> 
                        </Disclosure.Button>
                        <Disclosure.Panel className=" text-white bg-gray-700 px-5 py-5">
                            <div className="text-left">
                                <p className="text-[10px] font-robold">MINT DATE</p>
                                <p className="font-rolight">04 June 2021</p>
                            </div>
                            <div className="flex flex-row mt-4">
                              <div className="basis-1/2 text-left">
                                <p className="text-[10px] font-robold">SUPPLY</p>
                                <p className="font-rolight">10,000</p>                                
                              </div>
                              <div className="basis-1/2 text-left ">
                                <p className="text-[10px] font-robold">FLOOR PRICE</p>
                                <div className="flex flex-row items-center gap-2">
                                    <Image src={ethIcon} className="w-2" alt=""/>
                                    <p className="font-rolight">
                                     2.4</p>
                                </div>
                              </div>                              
                            </div>
                            <div className="text-left mt-5">
                                <p  className="text-[10px] font-robold">MINT PRICE</p>
                                <div className="flex flex-row items-center gap-2">
                                    <Image src={ethSmall} className="w-2" alt=""/>
                                    <p className="font-rolight">
                                     0.1</p>
                                    <Image src={arrowDown} className="w-2" alt=""/>
                                </div>                                
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>      
                           
                </div>   
                <div className="px-9 mt-5 bg-gray-700 pt-1 rounded-md">
                    <div className="flex flex-col items-center mb-10 mt-3">
                        <button type="button" className="shadow-md justify-center w-full max-w-xs  mb-4 text-white bg-zinc-800 hover:bg-sky-700 px-5 py-3.5 text-center font-bold text-xs inline-flex items-center mr-2 rounded-md">
                            Setup Collection
                        </button>                        
                    </div>
                </div>                                    
            </div>            
            <div className="basis-6/12">
                <div className="mt-5  pb-2 bg-gray-700 pt-7 rounded-md  text-center">
                    <p className="font-bold text-md">Renkon NFT</p>
                    <p className="font-rolight text-sm">@renkon</p>
                    <p className="text-sm mt-3 mb-5 w-3/6 m-auto">Discover the mystery behind 'The Pond'. Embrace your roots.</p>
                    <p className="font-bold text-xs text-left ml-5">LATEST 3 HIGHEST TRANSACTIONS</p>       
                    <div className="mt-3 grid px-4 gap-6 sm:px-6 grid-cols-1 xs:grid-cols-2 mb-5 sm-3 lg:grid-cols-3">
                        <div className="bg-white w-full rounded-md">
                            <Image src={nftImageThree} alt="" className="w-full" />
                            <p className="text-gray-600 text-xs font-robold px-2 py-2">RENKON #1202</p>
                        </div>                        
                        <div className="bg-white w-full rounded-md">
                            <Image src={nftImageTwo} alt="" className="w-full" />
                            <p className="text-gray-600 text-xs font-robold px-2 py-2">RENKON #1202</p>
                        </div>                        
                        <div className="bg-white w-full rounded-md">
                            <Image src={nftImageOne} alt="" className="w-full" />
                            <p className="text-gray-600 text-xs font-robold px-2 py-2">RENKON #1202</p>
                        </div>
                    </div>
                </div>   
                <div className="mt-5 pb-2 bg-gray-700 pt-7 rounded-md  text-center">
                    <p className="font-bold text-xs text-left ml-3">EVENT</p>       
                    <div className="mt-3 grid px-2 gap-2 sm:px-3 grid-cols-1 xs:grid-cols-2 mb-5 sm-3 lg:grid-cols-3">
                        <div className="w-full relative">
                            <Image src={eventDummy} alt="" className="w-full"  />
                            <div className="overlay absolute top-0 left-0 w-full h-full bg-black/40">
                            </div>                        
                            <div className="text-xs absolute bottom-0 left-0 w-full text-left ml-2 text-white py-1 font-robold">
                                <p className="text-[8px]">20 Jun - 30 Sep 2023</p>
                                <p className="text-[12px]">Gathering at the Pond</p>
                            </div>
                            <div className="bg-green-500/80 absolute top-2 right-0 text-left w-auto px-2 text-[8px] py-1 font-rolight font-bold rounded-md">
                                <p className="text-white tracking-widest font-robold text-[8px]">V1 HOLDERS ONLY</p>
                            </div>                            
                        </div>
                        <div className="w-full relative">
                            <Image src={eventDummy} alt="" className="w-full"  />
                            <div className="overlay absolute top-0 left-0 w-full h-full bg-purple-600/30">
                            </div>                        
                            <div className="text-xs absolute bottom-0 left-0 w-full text-left  text-white py-1 font-robold">
                                <p className="text-[8px] ml-2">20 Jun - 30 Sep 2023</p>
                                <p className="text-[12px] ml-2">Gathering at the Pond V2</p>
                                <button className=" w-11/12 mt-1 m-auto block text-black bg-gray-200 px-2 py-2 rounded-md">RSVP</button>
                            </div>
                            <div className=" bg-indigo-900 absolute top-2 right-0 text-left w-auto px-2 text-[8px] py-1 font-rolight font-bold rounded-md">
                                <p className="text-white tracking-widest font-robold text-[8px]">V2 HOLDERS ONLY</p>
                            </div>                            
                        </div> 
                        <div className="w-full h-52 sm:h-auto">
                            <div className="top-0 left-0 w-full h-full bg-purple-600/30">
                                <div className="text-xs flex items-center justify-center content-center bottom-0 left-0 w-full h-full text-left  text-white py-1 font-robold">
                                    <button className="w-fit mt-1 text-black bg-gray-200 px-2 py-1 text-[9px] rounded-md">CREATE EVENT</button>
                                </div>
                            </div>                  
                        </div>                                                
                    </div>
                </div>         
            </div>
            <div className="basis-3/12 ">
                <div className="px-3 mt-5 bg-gray-700 pt-1 pb-4 rounded-md">
                    <p className=" font-bold font-robold text-left text-xs my-3">TEAM MEMBERS</p>
                    <div className="mb-3 font-bold ">
                        {[...Array(4)].map((x, i) =>
                        <div className="w-full mt-2 rounded-sm border-l-4 px-3 py-3 border-blue-500 bg-zinc-800 items-center flex flex-row">
                            <div className="basis-1/3">
                                <div className="w-12 h-12 relative">
                                    <div className="w-full h-full bg-gray-200 rounded-full"></div>
                                    <Image src={checkIcon} className="bg-yellow-600 w-3 h-3 shadow-md rounded-full absolute bottom-0 right-0" width="12" height="12" alt="check" />
                                </div>
                            </div>
                            <div className="basis-1/3 text-left">
                                <p className="text-[12px] font-robold">Edja</p>
                                <p className="text-[10px] font-rolight">@edcx</p>
                            </div>                            
                            <div className="basis-1/3 text-right">
                                <p className="text-[12px] font-robold">Co-Founder</p>
                                <p className="text-[10px] font-rolight">Since Sep ‘22</p>
                            </div>
                        </div>
                        )}
                    </div>
                </div>                    
            </div>                
        </div>           
    </div>
</div>    
    
}
  
export default BusinessTwo;