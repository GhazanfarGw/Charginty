import React from 'react'

export default function About() {
  return (
    <>
        <section id='about' className='mx-auto items-center justify-center overflow-hidden pt-10 md:pt-20 scroll-smooth duration-500 text-[#000] max-w-screen-xl md:px-10 px-5'>
            <div className='md:flex md:grid-cols-2 mx-auto justify-between md:gap-x-10'>
                <div className='mx-auto justify-center'>
                    <h1 className='first font-semibold block md:hidden lg:hidden xl:hidden text-[#000]'>
                        Ultra-Fast EV Charging Network in the UK
                    </h1>
                    <div className='first justify-center mx-auto items-center md:pt-32'>
                        <span className='text-wrap flex gap-2 font-semibold  text-[#000] pt-10 md:text-4xl text-xl'>
                            What we do <p className='bg-[#26C774]'>we do</p> 
                        </span>
                        <h1 className='md:text-3xl text-xl mx-auto md:pt-10 pt-3 text-[#26C774]'>
                            Accelerating the Future of Eco-Friendly Transportation
                        </h1>
                    </div>
                    <div className='second block md:hidden lg:hidden md:py-0 md:pt-10 pt-5'>
                        <img className='mx-auto' src='./2[1].jpg' alt='logo'/>
                    </div>
                    <div className='fourth mx-auto md:pt-8 pt-3'>
                        <div className='max-w-4xl justify-center mx-auto tracking-wide'>
                            <p className='md:text-lg text-sm text-[#303030]'>
                                At Charginity, we are revolutionizing sustainable transportation with a versatile network of EV charging solutions. Our stations, ranging from fast to ultra-fast (ranging from 150 kW up to 480 kW), are designed to meet diverse needs across the UK, Europe, and beyond. We empower customers, businesses, and governments with reliable, efficient charging, fostering global connections and a greener future. Partner with us to drive the electric revolution forward. Our vision and services are a testament to our dedication to environmental stewardship and innovation. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className='third hidden md:block lg:block md:py-0 py-10 mt-40'>
                    <img className='mx-auto' src='./2[1].jpg' alt='logo'/>
                </div>
            </div>

            <div className='md:flex md:grid-cols-2 mx-auto justify-between md:gap-x-10 md:pt-32 pt-10'>
                <div className='third hidden md:block lg:block md:py-0 pt-10'>
                    <img className='mx-auto' src='./1[1].jpg' alt='logo'/>
                </div>
                <div className='third mx-auto justify-center'>
                    <div className='justify-center mx-auto items-center md:pt-10'>
                        <h1 className='md:text-4xl text-xl mx-auto md:pt-10 pt-3 text-[#26C774]'>
                            Collaborative Efforts for Global Impact
                        </h1>
                    </div>
                    <div className='third block md:hidden lg:hidden md:py-0 md:pt-10 pt-5'>
                        <img className='mx-auto' src='./1[1].jpg' alt='logo'/>
                    </div>
                    <div className='fourth mx-auto md:pt-8 pt-3'>
                        <div className='max-w-4xl justify-center mx-auto tracking-wide'>
                            <p className='md:text-lg text-sm text-[#303030]'>
                                Our mission extends beyond merely installing charging stations; it's about weaving the fabric of a sustainable future through strategic partnerships and collaborative efforts. We actively engage with international stakeholders, including governments, developers, and infrastructure providers, to ensure that electric vehicle (EV) charging is accessible, efficient, and reliable across the globe. By weaving together strategic partnerships, we aim to accelerate the transition to sustainable energy, making EV charging a global standard for a greener future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:flex md:grid-cols-2 mx-auto justify-between md:gap-x-10 pb-10'>
                <div className='mx-auto justify-center'>
                    <div className='fourth justify-center items-center mx-auto md:pt-32 pt-10'>
                        <span className='md:text-4xl text-xl text-[#26C774]'>
                            Empowering Change with Strategic Partnerships
                        </span>
                    </div>
                    <div className='fourth block md:hidden lg:hidden md:py-0 md:pt-10 pt-5'>
                        <img className='mx-auto' src='./6[1].jpg' alt='logo'/>
                    </div>
                    <div className='five mx-auto md:pt-8 pt-3'>
                        <div className='max-w-4xl justify-center mx-auto tracking-wide'>
                            <p className='md:text-lg text-sm text-[#303030]'>
                                At Charginity, the journey to revolutionize the EV charging experience is a collective one. By collaborating with local councils, we strategically position our charging stations to serve communities and align with local sustainability goals. Our partnerships with private developers are focused on integrating charging infrastructure into both new and existing developments, making EV ownership more practical and convenient for residents. Furthermore, our cooperation with major infrastructure providers is key to rapidly and efficiently scaling our network, ensuring that EV drivers can enjoy seamless travel across the UK.
                            <br/>
                            <br/>
                                This collaborative approach marks a significant advancement in achieving the green energy objectives and demonstrates our commitment to promoting eco-friendly transportation solutions. Through these strategic partnerships, Charginity is not just installing charging stations; we are building the foundation for a sustainable future, making electric vehicle ownership an attractive and viable option for all.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block lg:block md:py-0 py-10 mt-40'>
                    <img className='mx-auto' src='./6[1].jpg' alt='logo'/>
                </div>
            </div>
    </section>
    </>
  )
}