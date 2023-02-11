import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_7h28bys", "template_3mozyax", form.current, "pSrFeQE6jNanC-PjM").then(
      (result) => {
        // console.log(result.text);
        form.current.reset();

        Swal.fire({
          icon: "success",
          position: "center",
          title: "Thanks for sending the message",
          background: "#334155",
          color: "#fff",
          showConfirmButton: false,
          timer: 3000,
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <div className="pb-8 lg:mt-[13.2rem] px-16 mt-28 scroll-mt-7 " id="contact">
        <h4 className="text-4xl font-semibold text-center text-violet-100 mb-16">Contact me</h4>
        <div className="flex justify-center">
          <div className="mx-auto w-full max-w-[550px]">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-slate-300">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  name="user_name"
                  id="name"
                  placeholder="Jhon doe"
                  className="w-full rounded-md bg-slate-800 py-3 px-6 text-base font-medium transition-all duration-500 text-slate-300 focus:outline-offset-0 outline-none focus:outline focus:outline-violet-700 focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="mb-3 block text-base font-medium text-slate-300">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  name="user_email"
                  id="email"
                  placeholder="example@domain.com"
                  className="w-full rounded-md bg-slate-800 py-3 px-6 text-base font-medium text-slate-300 outline-none focus:outline focus:outline-offset-0 transition-all duration-500 focus:outline-violet-700 focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="mb-3 block text-base font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  required
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  className="w-full resize-none rounded-md bg-slate-800 py-3 px-6 text-base font-medium text-slate-300 focus:outline-offset-0 outline-none   focus:outline transition-all duration-500  focus:outline-violet-700 focus:shadow-md"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="hover:shadow-form rounded-md transition-all duration-500 active:bg-violet-800 bg-violet-700 py-2 px-5 text-base font-semibold text-white outline-none">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
