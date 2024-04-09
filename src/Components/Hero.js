import Bobcat from '../assets/bobcat.jpg'

function Hero() {
    return (
        <>
        <div>
            <div>
                <h1 className="text-8xl font-exo font-semibold"> Higgins Excavation LLC</h1>
                <h2 className="text-4xl font-overpass  ml-96">If it needs diggin, call Walter Higgins</h2>
            </div>
            <img src={Bobcat} alt="Bobcat machine"  />
        </div>
        </>
    );
}

export default Hero;