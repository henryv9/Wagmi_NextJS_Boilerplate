import Carousels from 'react-multi-carousel';
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
    <div>
        <Carousels 
        ssr={true} // means to render carousel on server-side.
        responsive={responsive}>
        {[...Array(4)].map((x, i) =>
        <div className="rounded-md shadow-md bg-white m-2">
            <img src="img/dummy-pic.png" className="w-full" alt="" />
            <p className="text-gray-700 font-robold text-xs text-left px-2 py-3">NFT #1234</p>
        </div>
        )}   

                     
    </Carousels>
    </div>
    
  );
};

export default CarouselPersonal;