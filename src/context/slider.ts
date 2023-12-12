import { createContext, useContext } from 'react';

type SliderContextValue = {
  changeSlide?: (direction: number) => void;
  goToSlide: (index: number) => void;
  slidesCount: number;
  currentSlideIndex: number;
};

const SliderContext = createContext<SliderContextValue | null>(null);

const useSliderContext = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error(
      'useSliderContext must be used withing a <SliderContext.Provider>',
    );
  }
  return context;
};

export { SliderContext, useSliderContext };