import { useCallback, useEffect, useState } from '~/libs/hooks/hooks.ts';

type useSliderProps = {
  slidesCount: number;
  autoPlay?: boolean;
};

type useSliderReturn = {
  currentSlideIndex: number;
  changeSlide: (direction: number) => void;
  goToSlide: (index: number) => void;
};

const useSlider = ({
  slidesCount,
  autoPlay = false,
}: useSliderProps): useSliderReturn => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const changeSlide = useCallback(
    (direction = 1) => {
      let slideIndex = 0;

      if (currentSlideIndex + direction < 0) {
        slideIndex = slidesCount - 1;
      } else {
        slideIndex = (currentSlideIndex + direction) % slidesCount;
      }

      setCurrentSlideIndex(slideIndex);
    },
    [currentSlideIndex, slidesCount],
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

  return {
    currentSlideIndex,
    changeSlide,
    goToSlide,
  };
};

export { useSlider };
