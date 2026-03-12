import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-0 text-black dark:bg-white bg-white">
      <div className="relative z-10 mx-auto h-full w-full max-w-full">
        <div className="grid grid-cols-1 md:h-[80vh] md:grid-cols-12">
          <div className="h-64 w-full md:col-span-6 md:h-full">
            <img
              alt="Global talent"
              className="h-full w-full overflow-hidden object-cover object-center"
              height={1080}
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920"
              width={1920}
            />
          </div>

          <div className="flex w-full items-center justify-between px-6 pt-8 pb-10 text-left md:col-span-6 md:pt-20 md:pr-6 md:pb-0 md:pl-10">
            <div className="w-full max-w-3xl space-y-6">
              <h1 className="font-display font-normal text-4xl tracking-tighter md:text-5xl lg:text-6xl text-primary">
                Breaking Down Borders to Connect Talent with Opportunity
              </h1>

              <p className="max-w-2xl font-light text-base md:text-lg lg:text-xl text-gray-600">
                Founded in 2020, OpenDoor removes the friction of international relocation, building a platform that connects brilliant minds with innovative companies.
              </p>
              <div className="mt-auto space-y-7">
                <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-auto">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=64&h=64",
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=64&h=64",
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=64&h=64"
                    ].map((imgUrl, i) => (
                      <Avatar
                        className="size-12 border-2 border-white transition-all duration-300 hover:grayscale-0"
                        key={i}
                      >
                        <AvatarImage src={imgUrl} />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <div className="flex flex-col font-normal text-sm">
                    <span className="text-base sm:text-lg font-bold">2,000+</span>
                    <span className="text-gray-500">Successful Placements</span>
                  </div>
                </div>
                <div className="flex w-fit gap-6">
                  <Link to="/contact">
                    <Button className="group not-disabled:inset-shadow-none mx-auto flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-5 font-normal shadow-none hover:bg-transparent [:hover,[data-pressed]]:bg-transparent">
                      <span className="rounded-full bg-primary px-6 py-3 text-white duration-500 ease-in-out group-hover:bg-primary/90 transition-colors font-semibold">
                        Contact Us
                      </span>
                      <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-primary p-5 text-white duration-500 ease-in-out group-hover:bg-primary/90 transition-colors">
                        <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
                        <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative -mx-4 mt-8 sm:-mx-6 lg:-mx-8 opacity-50">
                <div className="absolute left-0 z-40 h-full w-20 bg-linear-to-r from-white" />
                <div className="absolute right-0 z-40 h-full w-20 bg-linear-to-l from-white" />

                <Marquee className="[--duration:25s]" pauseOnHover repeat={4}>
                  {[1, 2, 3, 4, 5].map((_, index) => {
                    const k = `cmp_sno_${index}`;
                    return (
                      <div
                        className="flex items-center justify-center px-3 md:px-5"
                        key={k}
                      >
                        <div className="h-5 w-24 bg-gray-200 rounded md:h-8" />
                      </div>
                    );
                  })}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
