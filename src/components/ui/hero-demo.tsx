import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-0 text-black dark:bg-white">
      <div className="relative z-10 mx-auto h-full w-full max-w-full">
        <div className="grid grid-cols-1 md:h-screen md:grid-cols-12">
          <div className="h-64 w-full md:col-span-6 md:h-full">
            <img
              alt=""
              className="h-full w-full overflow-hidden object-cover object-center"
              height={1080}
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
              width={1920}
            />
          </div>

          <div className="flex w-full items-center justify-between px-6 pt-8 pb-10 text-left md:col-span-6 md:pt-20 md:pr-6 md:pb-0 md:pl-10">
            <div className="w-full max-w-3xl space-y-6">
              <h1 className="font-kanturmuy font-normal text-4xl tracking-tighter md:text-6xl lg:text-7xl">
                Sustainable Solutions for a Better Future
              </h1>

              <p className="max-w-2xl font-light text-base md:text-lg lg:text-xl">
                Empowering businesses and communities to thrive in a low-carbon
                world through tailored clean energy solutions.
              </p>
              <div className="mt-auto space-y-7">
                <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-auto">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <Avatar
                        className="size-12 border-2 border-white transition-all duration-300 hover:grayscale-0"
                        key={i}
                      >
                        <AvatarImage
                          src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=64&h=64`}
                        />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <div className="flex flex-col font-normal text-sm">
                    <span className="text-base sm:text-lg">15,000+</span>
                    <span className="">Teams Connected</span>
                  </div>
                </div>
                <div className="flex w-fit gap-6">
                  <Button className="group not-disabled:inset-shadow-none mx-auto flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-5 font-normal shadow-none hover:bg-transparent [:hover,[data-pressed]]:bg-transparent">
                    <span className="rounded-full bg-[#e1fcad] px-6 py-3 text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors">
                      Start a Project
                    </span>
                    <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-[#e1fcad] p-5 text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors">
                      <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
                      <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
                    </div>
                  </Button>
                </div>
              </div>
              <div className="relative -mx-4 mt-8 sm:-mx-6 lg:-mx-8">
                <div className="absolute left-0 z-40 h-full w-20 bg-linear-to-r from-white" />
                <div className="absolute right-0 z-40 h-full w-20 bg-linear-to-l from-white" />

                <Marquee className="[--duration:25s]" pauseOnHover repeat={4}>
                  {Array.from({ length: 5 }).map((_, index) => {
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
