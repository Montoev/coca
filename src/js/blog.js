import '/scss/blog.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import {
  useBlogSlider,
  useArticlesSlider
} from './components/blog/slider';

useTheme();
useBurger();
useBlogSlider();
useArticlesSlider();


