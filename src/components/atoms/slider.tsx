import { SliderContext } from '~/context/slider.ts';
import { useCallback, useEffect, useState } from '~/libs/hooks/hooks.ts';

type Props = {
  slides: React.ReactNode[];
  indicators?: React.ReactNode;
  arrows?: React.ReactNode;
  autoPlay?: boolean;
};

const Slider: React.FC<Props> = ({ slides, indicators, arrows, autoPlay }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const changeSlide = useCallback(
    (direction = 1) => {
      let slideIndex = 0;

      if (currentSlideIndex + direction < 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex = (currentSlideIndex + direction) % slides.length;
      }

      setCurrentSlideIndex(slideIndex);
    },
    [currentSlideIndex, slides.length],
  );

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = setInterval(() => {
      changeSlide(1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [autoPlay, changeSlide]);

  return (
    <SliderContext.Provider
      value={{
        changeSlide,
        goToSlide,
        slidesCount: slides.length,
        currentSlideIndex: currentSlideIndex,
      }}
    >
      {arrows && arrows}
      {slides}
      {indicators && indicators}
    </SliderContext.Provider>
  );
};

export { Slider };
