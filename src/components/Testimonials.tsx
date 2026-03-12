import React from 'react';
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "OpenDoor made relocating to Germany incredibly smooth. They handled my visa, helped me find an apartment, and I started my new job stress-free.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    name: "Briana Patton",
    role: "Software Engineer at Zalando",
  },
  {
    text: "As an employer, finding international tech talent was a nightmare before OpenDoor. Now we have access to pre-vetted candidates who fit perfectly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    name: "Bilal Ahmed",
    role: "Engineering Manager",
  },
  {
    text: "The transition to Stockholm was a dream thanks to their dedicated relocation experts. They were with me every step of the way.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    name: "Saman Malik",
    role: "Data Scientist at Spotify",
  },
  {
    text: "Hiring from outside the EU used to be a daunting process. OpenDoor took care of all the legal and relocation hurdles for us.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    name: "Omar Raza",
    role: "HR Director at Delivery Hero",
  },
  {
    text: "I never thought working in Amsterdam was possible until OpenDoor found me a company willing to sponsor my visa.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    name: "Zainab Hussain",
    role: "Frontend Developer at Adyen",
  },
  {
    text: "Their cultural onboarding and city guides helped my family and me settle into our new life in Berlin within weeks.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop",
    name: "Aliza Khan",
    role: "Product Manager at N26",
  },
  {
    text: "Partnering with OpenDoor gave us a competitive edge in recruiting top-tier engineers from across the globe.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
    name: "Farhan Siddiqui",
    role: "VP of Engineering",
  },
  {
    text: "From interview prep to the first day at my new job in Munich, OpenDoor's support was absolutely invaluable.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop",
    name: "Sana Sheikh",
    role: "Backend Developer at BMW",
  },
  {
    text: "A fantastic platform that bridges the gap between ambitious global talent and innovative European companies.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    name: "Hassan Ali",
    role: "Talent Acquisition Lead",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
