import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0  scrollbar-thin scrollbar-track-neutral-700 scrollbar-thumb-neutral-500 scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
      <Head>
        <title>Ovee | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Portfolio */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Skills */}
      <section id="skill" className="snap-center">
        <Skills />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
}
