import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from "aos";

const Certifications = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        })
    }, [])
    const CertificatePhotos = [
        {
            photo: "/images/AWS-GFG.png",
            title: "AWS Cloud",
            link: "https://media.geeksforgeeks.org/courses/certificates/52ab7c93af773ce04224ca1e9e88fe97.pdf"
        }, {
            photo: "/images/Nextjs-GFG.png",
            title: "Next.js",
            link: "https://media.geeksforgeeks.org/courses/certificates/465c5e056a59a98495fd9a9bb1a525f1.pdf"
        }, {
            photo: "/images/ReactNative-GFG.png",
            title: "React Native ",
            link: "https://media.geeksforgeeks.org/courses/certificates/a1977830c075c1fa6fba8c61288f6cb3.pdf"
        },
    ]


    return (
        <section id="certifications" className="w-full mt-10 px-5 md:px-20 py-10 md:py-20 flex items-center justify-center mb-10">

            <div className="w-full">
                <div>
                    <h1 data-aos="zoom-in" className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#2563EB]">
                        My Certifications
                    </h1>
                </div>

                <div className="bg-black-100 border border-black-50 shadow-xl rounded-xl  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {
                        CertificatePhotos.map((certificate, index) => {
                            const delay = index * 200;
                            return <div data-aos="fade-right" data-aos-delay={delay} key={index}>
                                <CertificateCard title={certificate.title} photo={certificate.photo} link={certificate.link} />
                            </div>
                        })
                    }


                </div>
            </div>
        </section>
    );
};

const CertificateCard = ({ title, photo, link }) => {
    const handleClick = () => {
        window.open(link, "_blank", "noopener,noreferrer");
    };
    return (
        <div onClick={handleClick} className="bg-black-200   p-2   rounded-xl m-5 hover:scale-105 transition-all duration-200 max-h-[600px] hover:cursor-pointer hover:shadow-[0_0_20px_5px_rgba(37,99,235,0.5)] border-2 border-transparent bg-clip-padding hover:border-[#06B6D4] hover:bg-gradient-to-br hover:from-[#2563EB]/20 hover:to-[#2563EB]/20 group">
            <img src={photo} className="rounded-lg p-1 h-60 w-100" />
            <div className="flex flex-col items-center px-2 p-2  mt-2">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#2563EB] transition-colors duration-200 group-hover:text-white">{title}</h2>
            </div>
        </div>
    )
}

export default Certifications;
