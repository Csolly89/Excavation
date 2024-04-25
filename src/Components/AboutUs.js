import * as React from 'react';
import Divider from '@mui/material/Divider';


function About() {
    return (
        <> 
        <div className='text-white leading-7'>

            <article className="font-overpass mx-4 py-3 ">
                <h1 className='font-exo font-semibold text-3xl text-center -mt-10 mb-5'>About us</h1>
                <Divider variant="center" />
                <section className='text-center mx-auto'>
                    At Higgins Excavation, we believe in the power of precision, dedication, and personalized service. Founded and operated by Walter Higgins, we are a single-manned company with a big vision and an even bigger commitment to excellence in excavation services.
                    Our Story
                    Walter Higgins founded Higgins Excavation with a simple yet powerful mission: to provide unmatched quality and reliability in excavation services while fostering lasting relationships with our clients. With years of experience under his belt, Walter recognized the need for a company that prioritized attention to detail, reliability, and customer satisfaction above all else. Thus, Higgins Excavation was born.
                </section>

                    <h2 className="font-poppins font-semibold mt-5 ml-5 pb-2 "> Our Values</h2>
                <Divider variant="inset" />
                At Higgins Excavation, our values are the cornerstone of everything we do. We pride ourselves on:
                <section className='ml-5'>
                    <p>
                        <b>Quality:</b> We hold ourselves to the highest standards of quality in every project we undertake. From the initial consultation to the final touches, we ensure that our work meets and exceeds your expectations.
                    </p>
                    <p>
                        <b>Reliability: </b>When you choose Higgins Excavation, you can trust that we will be there for you every step of the way. We understand the importance of deadlines and budgets, and we are committed to delivering results on time and within budget, every time.
                    </p>
                    <p>
                        <b>Reliability: </b>  Honesty and transparency are at the heart of our business. We believe in building trust with our clients through open communication, integrity, and fairness in all our dealings.
                    </p>
                    <p>
                        <b>Safety: </b> Safety: The safety of our team, clients, and the community is our top priority. We adhere to the highest safety standards and take every precaution to ensure a safe working environment on every project.
                    </p>
                </section>

                    <h2 className="font-poppins font-semibold mt-5 ml-5 pb-2">Our Services</h2>
                <Divider variant="inset" />
                <p>
                    Higgins Excavation offers a comprehensive range of excavation services tailored to meet the unique needs of each client. Our services include:
                    Site Preparation: From land clearing to grading, we prepare your site for construction with precision and efficiency.
                    Excavation: Whether you need foundation excavation, trenching, or earthmoving, we have the expertise and equipment to get the job done right.
                    Demolition: We specialize in safe and efficient demolition services, carefully removing structures to make way for new development.
                    Drainage Solutions: Our drainage solutions are designed to prevent water damage and ensure the longevity of your property.
                    Utility Installation: From sewer lines to water mains, we handle the installation of utility systems with skill and precision.
                </p>

                    <h2 className="font-poppins font-semibold mt-5 ml-5 pb-2">Why choose us?</h2>
                <Divider variant="inset" />
                <p>
                    When you choose Higgins Excavation, you're not just hiring a contractor – you're partnering with a dedicated team committed to your project's success. Here's why our clients trust us:
                    Personalized Service: As a single-manned company, we offer personalized service tailored to your specific needs. You'll work directly with Walter Higgins, ensuring clear communication and attention to detail throughout the process.
                    Competitive Pricing: We believe that quality excavation services shouldn't break the bank. That's why we offer competitive pricing without sacrificing quality or reliability.
                    Get in Touch
                </p>
                <p className='mt-4 italic text-center font-extralight'>
                    Ready to experience the Higgins Excavation difference for yourself? Contact us today to discuss your project and request a free quote. We look forward to exceeding your expectations and earning your trust as your go-to excavation partner.
                </p>
            </article>
        </div>
        </>
    );
}

export default About;