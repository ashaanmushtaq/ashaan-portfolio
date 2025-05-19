import { useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  useEffect(() => {
    // Select the element with the typewriter animation
    const heading = document.querySelector(".animate-typewriter");

    // Reset the animation by removing and adding the class
    const resetTypewriterAnimation = () => {
      heading.classList.remove("animate-typewriter");
      // Trigger a reflow to restart the animation
      void heading.offsetWidth; // This forces a reflow
      heading.classList.add("animate-typewriter");
    };

    // Add event listener to reset animation when coming into view
    const handleScroll = () => {
      const rect = heading.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        resetTypewriterAnimation();
      }
    };

    // Add the scroll event listener to reset animation
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right animate-typewriter">
            Hi, I'm Muhammad Ashaan
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a UI/UX designer passionate about creating simple,
            beautiful, and user-friendly designs. I focus on making sure users
            have a smooth and enjoyable experience. I'm also excited to explore
            mobile app development to bring my designs to life and reach more
            users.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
