import React from 'react';
import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from './progressive-carousel';

const items = [
  {
    img: "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1170&auto=format&fit=crop",
    title: 'Berlin, Germany',
    desc: 'A thriving tech hub with a vibrant international community, offering countless opportunities for software engineers and IT professionals.',
    sliderName: 'berlin',
  },
  {
    img: "https://images.unsplash.com/photo-1518972734183-c5b490a7c637?q=80&w=1170&auto=format&fit=crop",
    title: 'Stockholm, Sweden',
    desc: 'Known for its work-life balance and innovative tech scene, making it a top destination for global talent.',
    sliderName: 'stockholm',
  },
  {
    img: "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1170&auto=format&fit=crop",
    title: 'Amsterdam, Netherlands',
    desc: 'A picturesque city with a booming startup ecosystem and excellent English proficiency.',
    sliderName: 'amsterdam',
  },
  {
    img: "https://images.unsplash.com/photo-1628965882741-570e75becd5d?q=80&w=687&auto=format&fit=crop",
    title: 'Munich, Germany',
    sliderName: 'munich',
    desc: 'Home to global engineering giants and a strong economy, perfect for advancing your career.',
  },
];

export default function ProgressiveCarouselDemo() {
  return (
    <div className="max-w-5xl mx-auto my-12 relative w-full overflow-hidden rounded-3xl">
      <ProgressSlider vertical={false} activeSlider='berlin'>
        <SliderContent>
          {items.map((item, index) => (
            <SliderWrapper key={index} value={item?.sliderName}>
              <img
                className='w-full 2xl:h-[600px] h-[500px] object-cover rounded-3xl'
                src={item.img}
                alt={item.desc}
              />
            </SliderWrapper>
          ))}
        </SliderContent>

        <SliderBtnGroup className='absolute bottom-0 w-full dark:text-white text-black bg-black/40 backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4 rounded-b-3xl'>
          {items.map((item, index) => (
            <SliderBtn
              key={index}
              value={item?.sliderName}
              className='text-left cursor-pointer p-4 border-r border-white/20 last:border-0'
              progressBarClass='bg-primary h-full'
            >
              <h2 className='relative px-4 py-1 rounded-full w-fit text-black bg-white mb-2 text-sm font-bold'>
                {item.title}
              </h2>
              <p className='text-sm font-medium line-clamp-2 text-white'>{item.desc}</p>
            </SliderBtn>
          ))}
        </SliderBtnGroup>
      </ProgressSlider>
    </div>
  );
}
