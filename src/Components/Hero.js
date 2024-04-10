import Bobcat from '../assets/Bulldozer.png'
import Bg from "../assets/WalterBg.png"

function Hero() {
    return (
        <>
        <div>
            <div>
                <h1 className="text-8xl font-exo font-semibold"> Higgins Excavation LLC</h1>
                <h2 className="text-4xl font-overpass  ml-96">If it needs diggin, call Walter Higgins</h2>
            <img src={Bobcat} alt="Bobcat machine"  />
            <img src={Bg} alt="background image of trees" />
            </div>
        </div>
        </>
    );
}

export default Hero;