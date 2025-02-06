import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from './tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);

export function getStylesForClass(className: string) {
  return fullConfig.theme?.extend?.variants?.[className] || 
         fullConfig.theme?.extend?.utilities?.[className];
}