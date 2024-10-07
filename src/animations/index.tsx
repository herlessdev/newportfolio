import { Variants } from "framer-motion";

export const fadeInFromXY = (
  x: number,
  y: number,
  opacity: number
): Variants => ({
  initial: { opacity, x, y },
  animate: { opacity: 1, x: 0, y: 0 },
});
