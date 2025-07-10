import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS  from "aos";

const Certifications = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        })
    },[])
    const CertificatePhotos = [
        {
            photo: "/images/AWS-GFG.png",
            title: "AWS Cloud"
        }, {
            photo: "/images/Nextjs-GFG.png",
            title: "Next.js"
        }, {
            photo: "/images/ReactNative-GFG.png",
            title: "React Native "
        },
    ]

    return (
        <section id="work" className="w-full mt-10 px-5 md:px-20 py-10 md:py-20 flex items-center justify-center mb-10">

            <div className="w-full">
                <div>
                    <h1 data-aos="zoom-in" className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-5 text-center">
                        My Certifications
                    </h1>
                </div>

                <div className="bg-black-100 border border-black-50 shadow-xl rounded-xl  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {
                        CertificatePhotos.map((project, index) => {
                            const delay  = index * 200;
                            return <div data-aos="fade-right" data-aos-delay={delay} key={index}>
                                <CertificateCard  title={project.title} photo={project.photo} />
                            </div>
                        })
                    }


                </div>
            </div>
        </section>
    );
};

const CertificateCard = ({ title, photo }) => {

    return (
        <div className="bg-black-200 border border-black-50 p-2   rounded-xl m-5 hover:scale-105 transition-all duration-200 max-h-[600px]">
            <img src={photo} className="rounded-lg p-1 h-60 w-100" />
            <div className="flex flex-col items-center px-2 p-2  mt-2">
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>
        </div>
    )
}

export default Certifications;
