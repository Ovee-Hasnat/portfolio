import React from "react";
import { PhoneIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) =>
    (window.location.href = `mailto:hasnat.ovee@gmail.com?subject=${formData.subject}&body=Hello, this is ${formData.name}. ${formData.message} (${formData.email})`);

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="h-screen relative flex flex-col text-center sm:text-left max-w-5xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 text-gray-500 uppercase tracking-[5px]">
        Contact <span className="text-yellow-500">me</span>
      </h3>

      <motion.h4
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="lowercase tracking-[3px] font-thin"
      >
        Let's discuss something{" "}
        <span className="underline decoration-yellow-400">new</span>.
      </motion.h4>

      <div className="space-y-2">
        <div className="flex space-x-4">
          <PhoneIcon className="h-6 w-6 text-neutral-500" />
          <p className="text-gray-400 tracking-wider">+880 1521 436302</p>
        </div>
        <div className="flex space-x-4">
          <EnvelopeIcon className="h-6 w-6 text-neutral-500" />
          <p className="text-gray-400 tracking-wider">hasnat.ovee@gmail.com</p>
        </div>
        <div className="flex space-x-4">
          <MapIcon className="h-6 w-6 text-neutral-500" />
          <p className="text-gray-400 tracking-wider">Dhaka, Bangladesh</p>
        </div>
      </div>

      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-1 min-w-[360px] mx-auto"
        >
          <input
            {...register("name")}
            placeholder="Name"
            className="formInput"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="formInput"
            type="email"
          />
          <input
            {...register("subject")}
            placeholder="Subject"
            className="formInput"
            type="text"
          ></input>
          <textarea
            {...register("message")}
            placeholder="Message"
            className="formInput"
          />
          <button
            type="submit"
            className="py-3 px-10 bg-yellow-600/60 rounded-md text-black text-lg font-semibold uppercase tracking-[3px] hover:bg-yellow-600 transition-all duration-500 ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactMe;
