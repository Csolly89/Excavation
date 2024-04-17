import background from "../assets/WalterBg.png"
import bulldozer from "../assets/Bulldozer.png"


function Hero() {
    return (
        <>
        <div className="" >
            <div className=''>
                <h1 className="text-8xl font-exo font-semibold "> Higgins Excavation LLC</h1>
                <h2 className="text-4xl font-overpass  ml-96 ">If it needs diggin, call Walter Higgins</h2>
            </div>
            <div className="hidden md:flex lg:flex justify-center items-center ">
                <img src={background} alt="backwoods cabin and roadway" className='shadow-2xl rounded-3xl w-full mx-12 my-8'/>
            </div>
            <div className="flex md:hidden lg:hidden justify-center items-center">
                <img src={bulldozer} alt="backwoods cabin and roadway" className='shadow-2xl rounded-3xl w-full mx-12 my-8'/>
            </div>
        </div>
        </>
    );
}

export default Hero;