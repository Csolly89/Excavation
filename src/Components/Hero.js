import background from "../assets/WalterBg.png"
import bulldozer from "../assets/Bulldozer.png"


function Hero() {
    return (
        <>
        <div className="overflow-hidden h-full" >
            {/* tablet+ view */}
            <div className="hidden md:flex  ">
                <h1 className="xl:text-8xl font-exo font-semibold  "> Higgins Excavation LLC</h1>
                <h2 className="xl:text-4xl font-overpass ">If it needs diggin, call Walter Higgins</h2>
                <img src={background} alt="backwoods cabin and roadway" className='shadow-2xl w-full h-full md:object-contain px-12 '/>
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