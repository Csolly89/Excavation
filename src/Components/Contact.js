import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    // env variable for keys here
        emailjs
            .sendForm(
                `${process.env.REACT_APP_SERVICE_ID}`,
                `${process.env.REACT_APP_TEMPLATE_ID}`, 
                form.current, {
                    publicKey: `${process.env.REACT_APP_PUBLIC_KEY}`,
            })
            .then(
            () => {
                console.log('SUCCESS!');
                // e.target.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <>
            <div className="mb-12">
                <div  className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold font-exo leading-tight text-white sm:text-4xl lg:text-5xl">Contact us</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed font-overpass text-white">Lets get in touch to start your free estimate</p>
                    </div>

                    <div className="max-w-6xl mx-auto mt-5 overflow-hidden bg-white rounded-md shadow-md lg:mt-8">
                        <div className="grid items-stretch grid-cols-1 lg:grid-cols-5">
                            <form ref={form} onSubmit={sendEmail} className="lg:col-span-3">
                                <div className="p-6 sm:p-10">
                                    <h3 className="text-2xl font-poppins font-semibold text-black">Send us a message</h3>
                                    {/* action="#" */}
                                    <div  className="mt-8">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                            <div>
                                                <label className="text-base font-poppins font-medium text-gray-900"> Your name </label>
                                                <div className="mt-2.5 relative">
                                                    <input type="text"  name="user_name"  className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-base font-poppins font-medium text-gray-900"> Your email </label>
                                                <div className="mt-2.5 relative">
                                                    <input type="email" name="user_email" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-base font-poppins font-medium text-gray-900"> Phone number </label>
                                                <div className="mt-2.5 relative">
                                                    <input type="text" name="user_phone" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label className="text-base font-poppins font-medium text-gray-900"> Message </label>
                                                <div className="mt-2.5 relative">
                                                    <textarea
                                                        name="message"
                                                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md resize-y bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                        rows="4"
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <input type="submit" value="Send" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-poppins  text-white bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="bg-gray-100 lg:col-span-2">
                                <div className="h-full p-6 sm:p-10">
                                    <div className="flex flex-col justify-between h-full">
                                        <div>
                                            <h4 className="text-2xl font-semibold font-poppins text-black">Contact info</h4>

                                            <div className="mt-8 space-y-7">
                                                <div className="flex items-start">
                                                    <svg className="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="1.5"
                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                        />
                                                    </svg>
                                                    <div className="ml-3">
                                                        <span className="block text-base font-overpass text-gray-900"> (704) 330-3774 </span>
                                                    </div>
                                                </div>

                                                <div className="flex items-start">
                                                    <svg className="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    <span className="block ml-3 text-base font-overpass text-gray-900"> WeHiggins996@gmail.com</span>
                                                </div>

                                                <div className="flex items-start">
                                                    <svg className="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span className="block ml-3 text-base font-overpass text-gray-900"> Lacaster Sc, 29720 USA </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 lg:mt-auto">
                                            <hr className="border-gray-200" />
                                            <div className="flex items-center justify-between mt-7">
                                                <p className="text-lg font-semibold font-overpass text-black">Follow us on</p>
                                                
                                                
                                                <ul className="flex items-center justify-end space-x-3">
                                                    <li>
                                                        <a
                                                            href=" https://www.instagram.com/higginsexcavationsllc/"
                                                            title=" instagram link"
                                                            className="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-gray-800
                                                    transition-all
                                                    duration-200
                                                    bg-transparent
                                                    border border-gray-300
                                                    rounded-full
                                                    w-10
                                                    h-10
                                                    focus:bg-blue-600
                                                    hover:text-white
                                                    focus:text-white
                                                    hover:bg-blue-600 hover:border-blue-600
                                                    focus:border-blue-600
                                                    mr-10
                                                    ">
                                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                                                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                                                <path
                                                                    d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                                                ></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;