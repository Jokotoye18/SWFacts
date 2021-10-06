import {useCallback, useEffect, useState} from 'react';

import RNShake from 'react-native-shake';

import {planets} from '../data';
import {random} from '../utils';

export const useHomeHelper = () => {
  const planetsData = planets.data.allPlanets.planets;
  const [activeIndex, setActiveIndex] = useState(0);

  const {
    name,
    filmConnection: {films},
  } = planetsData[activeIndex];

  const getNewPlanet = useCallback(() => {
    const newIndex = random(planetsData.length);
    setActiveIndex(newIndex);
  }, [planetsData.length]);

  useEffect(() => {
    RNShake.addListener(() => {
      getNewPlanet();
    });
    return () => RNShake.addListener(() => {}).remove();
  }, [getNewPlanet]);

  return {
    name,
    films,
  };
};
