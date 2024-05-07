import background from "../assets/WalterBg.png"
import bulldozer from "../assets/Bulldozer.png"


function Hero() {
    return (
        <>
        <div className="overflow-hidden h-full -mt-10" >
            {/* tablet+ view */}
            <div className="hidden md:inline ">
                <div className="relative z-10 md:top-[29vh] md:left-[8vw] lg:left-[25vw] lg:top-[42vh]">
                    <h1 className="lg:text-6xl md:text-4xl md:font-semibold font-exo"> Higgins Excavation LLC</h1>
                    <h2 className="lg:text-2xl font-overpass md:ml-44 lg:ml-56">If it needs diggin, call Walter Higgins</h2>
                </div>
                <img src={background} alt="backwoods cabin and roadway" className='shadow-2xl shadow-black relative rounded-2xl  lg:ml-[20vw]'/>
            </div>
            {/* mobile view */}
            <div className="block md:hidden text-center pt-8">
                <h1 className="font-exo font-semibold text-4xl "> Higgins Excavation LLC</h1>
                <h2 className="font-overpass font-medium pt-[.5] ml-10  ">If it needs diggin, call Walter Higgins</h2>
            </div>
                <div className="flex md:hidden justify-center items-center pt-8">

                <img src={bulldozer} alt="backwoods cabin and roadway" className='shadow-2xl rounded-3xl w-full h-[32rem] mx-12 px-2'/>
                </div>
        </div>
        </>
    );
}

export default Hero;