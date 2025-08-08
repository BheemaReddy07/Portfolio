import React, { useEffect, useRef, useState } from 'react'
import ContactExperience from '../components/Models/Contact/ContactExperience';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';
import AOS  from "aos";
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  const formRef = useRef(null);
 useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        })
    },[])

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again later.");
    }
    finally {
      setLoading(false);
    }

  }


  return (
    <section id="contact" className="flex-center section-padding" ref={formRef}>
      <div className="w-full h-full md:px-10 px-5">
        <h2 data-aos="zoom-in" delay={500} className="text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#2563EB]">Get in Touch</h2>
        <div className="grid-12-cols mt-16 items-stretch xl:items-end">
          <div data-aos="zoom-in" delay={1000} className="xl:col-span-5 flex h-full">
            <div className="flex-grow flex-center  bg-gradient-to-br from-white/10 to-white/5 rounded-2xl  py-8 backdrop-blur-xl p-10  transition-all duration-200  hover:shadow-[0_0_20px_5px_rgba(37,99,235,0.5)] border-2 border-transparent bg-clip-padding hover:border-[#06B6D4] hover:bg-gradient-to-br hover:from-[#2563EB]/20 hover:to-[#2563EB]/20">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name" className='text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#2563EB]'>Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className='text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#2563EB]'>Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className='text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#2563EB]'>Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="px-4 py-4 rounded-lg bg-gradient-to-r from-[#06B6D4] to-[#2563EB] flex justify-center items-center relative cursor-pointer overflow-hidden group transition-colors duration-300 group-hover:from-[#2563EB] group-hover:to-[#06B6D4]">
                    <div className="absolute -right-10 origin-center top-1/2 -translate-y-1/2 
                      w-[120%] h-[120%] group-hover:size-10 group-hover:right-10
                      rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] transition-all duration-500" />
                    <p className="uppercase md:text-lg text-white transition-all duration-500
    group-hover:text-white group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="group-hover:bg-white size-10 rounded-full absolute right-10 top-1/2 
    -translate-y-1/2 flex justify-center items-center overflow-hidden">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div data-aos="zoom-in" delay={1000}   className="xl:col-span-7 flex h-full">
            <div className="flex-grow bg-white/5 backdrop-blur-xl rounded-3xl p-3 py-3 md:p-10 md:py-8 shadow-2xl transition-all duration-200  hover:shadow-[0_0_20px_5px_rgba(37,99,235,0.5)] border-2 border-transparent bg-clip-padding hover:border-[#06B6D4] hover:bg-gradient-to-br hover:from-[#2563EB]/20 hover:to-[#2563EB]/20 ">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact