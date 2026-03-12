import { InfiniteSlider } from "@/components/ui/infinite-slider";

export function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={24} reverse className="w-full bg-white opacity-40 hover:opacity-100 transition-opacity duration-500">
      <span className="font-display text-2xl font-bold px-4">VOLVO</span>
      <span className="font-display text-2xl font-bold px-4">Spotify</span>
      <span className="font-display text-2xl font-bold px-4">SIEMENS</span>
      <span className="font-display text-2xl font-bold px-4">zalando</span>
      <span className="font-display text-2xl font-bold px-4">Klarna.</span>
      <span className="font-display text-2xl font-bold px-4">HelloFresh</span>
      <span className="font-display text-2xl font-bold px-4">DeliveryHero</span>
    </InfiniteSlider>
  );
}

export default InfiniteSliderBasic;
