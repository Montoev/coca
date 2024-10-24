import '/scss/about.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useAboutSlider, useTeamSlider } from './components/about/slider';

useTheme();
useBurger();
useAboutSlider();
useTeamSlider();
