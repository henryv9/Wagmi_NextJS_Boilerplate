import dummyPic from "../../images/dummy-pic.png";
import Carousels from 'react-multi-carousel';
import Image from "next/image";
const responsive = {
    md: {
      breakpoint: { max: 3000, min: 768 },
      items: 3
    },
    sm: {
        breakpoint: { max: 768, min: 464 },
        items: 2
    },
    xs: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const CarouselPersonal = () => {
  return (
    <div className="w-full">
        <Carousels 
        ssr={true} // means to render carousel on server-side.
        responsive={responsive}>
        <div className="rounded-md shadow-md bg-white m-2">
            <Image src={dummyPic} className="w-full" alt="" />
            <p className="text-gray-700 font-robold text-xs text-left px-2 py-3">NFT #1234</p>
        </div>
        <div className="rounded-md shadow-md bg-white m-2">
            <Image src={dummyPic} className="w-full" alt="" />
            <p className="text-gray-700 font-robold text-xs text-left px-2 py-3">NFT #1234</p>
        </div>
        <div className="rounded-md shadow-md bg-white m-2">
            <Image src={dummyPic} className="w-full" alt="" />
            <p className="text-gray-700 font-robold text-xs text-left px-2 py-3">NFT #1234</p>
        </div>
        <div className="rounded-md shadow-md bg-white m-2">
            <Image src={dummyPic} className="w-full" alt="" />
            <p className="text-gray-700 font-robold text-xs text-left px-2 py-3">NFT #1234</p>
        </div>                

                     
    </Carousels>
    </div>
    
  );
};

export default CarouselPersonal;