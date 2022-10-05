import React from 'react';
import discrodImage from '../../images/discord.png'
import twitterImage from '../../images/twitter.png'
import coverImage from '../../images/cover.png'
import checkIcon from '../../images/icon-check.png'
import profileImage from '../../images/profile-image.png'
import CarouselPersonal from './personal-carousel';
import Image from 'next/image';
function Personal (){
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
            <div className="avatar-parent w-[100px] h-[100px] -mt-16">
                <Image className="avatar w-[95px] h-[95px]" src={profileImage} alt="" />
                
            </div> 
            <span className="button__badge bg-amber-500">
                <Image src={checkIcon} width="12" height="12" alt="check" />
            </span>
        </div>
        <div className="flex flex-col sm:flex-row px-6 pt-2 pb-4 gap-4 -mt-2 mb-4 shadow-md bg-gray-700 rounded-lg items-center">
            <div className="basis-1/3 order-2 sm:order-1 mt-3 sm:mt-0">
                <p className="text-[9px] text-center sm:text-left font-robold">SOCIAL MEDIA FOLLOWERS</p>
                <div className="text-center sm:text-left">
                    <p className="font-rolight">55.4k</p>
                    <p className="text-[10px] font-robold mt-2">Badges</p>
                    <div className="w-4 h-4 m-auto sm:m-0 bg-gray-200 mt-2"></div>                    
                </div>
            </div>       
            <div className="basis-1/3 order-1 sm:order-2">
                <div className="text-center w-64 m-auto">
                    <p className="text-[10px] font-robold mt-4">Auph</p>
                    <p className="font-rolight">@auph</p>
                    <p className="text-[10px] font-rolight font-bold">From #esports to #tech to #web3. 11 years in tech. Web3 Technologist. Serial entrepreneur. </p>
                </div>            
            </div>       
            <div className="basis-1/3 order-3 flex justify-end mt-3 sm:mt-0">
                <div className="w-full sm:max-w-[110px] flex flex-col justify-end content-end">
                    <p className="text-[10px] font-robold text-center sm:text-left mb-2">SOCIAL MEDIA</p>
                    <div className="grid grid-cols-3 gap-2">
                        <Image className="bg-zinc-900 px-1.5 py-1.5 rounded-sm shadow-md w-6 h-6" src={twitterImage} alt="" />
                        <Image className="bg-zinc-900 px-1.5 py-1.5 rounded-sm shadow-md w-6 h-6" src={discrodImage} alt="" />
                        <Image className="bg-zinc-900 px-1.5 py-1.5 rounded-sm shadow-md w-6 h-6" src={twitterImage} alt="" />
                    </div>
                </div>            
            </div>       
        </div>          
        <div className="grid grid-cols-1 sm:grid-cols-7 pb-4 gap-4 mt-5">
            <div className="sm:col-span-2 order-last sm:order-first">
                <div className="px-6 py-7 mt-5 bg-gray-700 rounded-md">
                    <div className="flex flex-col text-left">
                       <p className="font-bold text-xs">TOTAL VALUE OF NFTs</p>
                       <p className="font-rolight">1.269M USD</p>
                    </div>
                </div>   
                                  
            </div>            
            <div className=" sm:col-span-3 pt-3">
                <div className="w-full ">
                    <CarouselPersonal/>                
                </div>
            </div>
            <div className="sm:col-span-2">
                <div className="px-3 mt-5 bg-gray-700 pt-1 pb-4 rounded-md">
                    <p className=" font-bold font-robold text-left text-xs my-3">CREDENTIALS</p>
                    <div className="mb-3 font-bold ">
                        {[...Array(3)].map((x, i) =>
                        <div className="w-full mt-2 rounded-md px-3 py-3  bg-zinc-800 items-center flex flex-row">
                            <div className="basis-1/3">
                                <div className="w-12 h-12 relative">
                                    <div className="avatar-wrapper w-fit m-auto">
                                        <div className="avatar-parent w-[50px] h-[50px]">
                                            <Image className="avatar w-[45px] h-[45px]" src={profileImage} alt="" />
                                        </div> 
                                    </div>
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
                <div className="mb-3 font-bold px-4 mt-4">
                    <div className="w-full mt-2 rounded-md px-3 py-3  bg-gray-400 items-center flex flex-row">
                        <div className="basis-1/3">
                            <div className="w-12 h-12 relative">
                                <div className="avatar-wrapper w-fit m-auto">
                                    <div className="avatar-parent w-[50px] h-[50px]">
                                        <Image className="avatar w-[45px] h-[45px]" src={profileImage} alt="" />
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/3 text-white text-left">
                            <p className="text-[12px] font-robold">Microsoft</p>
                            <p className="text-[10px] font-rolight">@microsoft</p>
                        </div>                            
                        <div className="basis-1/3 text-right">
                            <p className="text-[12px] font-robold">SVP</p>
                            <p className="text-[10px] font-rolight">Jan ‘18 - Feb ‘20</p>
                        </div>
                    </div>
                </div>                                   
            </div>                
        </div>           
    </div>
</div>    
    
}
  
export default Personal;