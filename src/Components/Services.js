import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

function Services() {
    return (
        <>
            <div className='text-white bg-[#c76b41] m-2 rounded-xl p-3 px-4 shadow-lg'>

                <article className="3 font-overpass mx-4 py-">
                    <section className='text-center mx-auto lg:text-4xl font-exo'>
                        <h2>
                            Available Services
                        </h2>
                    </section>

                    <ListItem className="font-poppins font-semibold text-xl mt-5 ">
                        <h2> Grading</h2>
                    </ListItem>
                    <Divider variant="inset" />
                    <p>
                        Achieve the perfect slope and contour for your land with our expert grading services. Whether you're preparing for construction, landscaping, or drainage, we ensure a level foundation that exceeds expectations.
                    </p>
                    <p>
                        Transform your driveway into a smooth, inviting entrance with our expert grading services. From rough terrain to flawless surfaces, we grade with precision, ensuring optimal functionality and aesthetics.
                    </p>

                    <ListItem className="font-poppins font-semibold text-xl mt-5 ">
                        <h2> Land Clearing</h2>
                    </ListItem>
                    <Divider variant="inset" />
                    <p>
                        Unlock the potential of your property with our meticulous land clearing services. From overgrown vegetation to stubborn debris, we clear the way for your project, leaving behind a blank canvas ready for development.
                    </p>

                    <ListItem className="font-poppins font-semibold text-xl mt-5 ">
                        <h2> Roadways</h2>
                    </ListItem>
                    <Divider variant="inset" />
                    <p>
                        Experience smooth travels and seamless connections with our roadway construction expertise. From driveways to highways, we design and build durable roads that stand the test of time, ensuring safe and efficient transportation routes.
                    </p>
                    <p>
                        When winter weather strikes, rely on us to keep roads clear and safe for travel. Our road clearing services ensure timely snow and debris removal, minimizing disruptions and maximizing safety for all.
                    </p>

                    <ListItem className="font-poppins font-semibold text-xl mt-5 ">
                        <h2> Site Clearing</h2>
                    </ListItem>
                    <Divider variant="inset" />
                    <p>
                        Start your project on the right foot with our comprehensive site clearing solutions. We remove obstacles and debris with precision and efficiency, creating a clean slate for your construction endeavors.
                    </p>

                    <ListItem className="font-poppins font-semibold text-xl mt-5 ">
                        <h2> Brush or Debris Hauling</h2>
                    </ListItem>
                    <Divider variant="inset" />
                    <p>
                        Let us handle the cleanup with our brush and debris hauling services. We collect and remove unwanted materials responsibly, leaving your site clean and ready for its next phase.
                    </p>

                    <ListItem className="font-poppins font-semibold text-xl mt-5 ">
                        <h2> Erosion Control</h2>
                    </ListItem>
                    <Divider variant="inset" />
                    <p>
                        Preserve the integrity of your land with our erosion control solutions. From sediment traps to vegetation stabilization, we safeguard against soil erosion and protect the environment for generations to come.
                    </p>

                </article>
            </div>
        </>
    );
}

export default Services;