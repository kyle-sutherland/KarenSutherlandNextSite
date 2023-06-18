import { ParallaxBanner } from "react-scroll-parallax";

export const AdvancedBannerTop = () => {

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="container-fluid lign-items-center text-center p-5">
        <h1 className="text-ghostwhite">Hello World!</h1>
      </div>
    )
  };

  const foreground = {
    opacity: [1, 0, 'easeOutCubic'],
    scale: [1, 0.6, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    children: <img src='/kslogo-banner-large.svg' className='img-fluid rounded' alt=''/>,
    scrollStart: 0,
    scrollEnd: 470
  };
  const background = {
    opacity: [1, 0],
    shouldAlwaysCompleteAnimation: true,
    children: <div className='container rounded-top bg-primary'></div>
  };

  return (
    <ParallaxBanner
      layers={[background, foreground]}
      className="full"
    />
  );
};