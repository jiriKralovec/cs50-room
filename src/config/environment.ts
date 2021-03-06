import { Font } from "love.graphics";

interface IEnvironment {
  showBouncingBoxes: boolean;
  showInteractionRadius: boolean;
  showMasks: boolean;
  colours : { [key : string] : [number, number, number, number] };
  fonts : { [key : string] : Font };
}
export const environment : IEnvironment = {
  showBouncingBoxes: true,
  showInteractionRadius: true,
  showMasks: true,
  colours: {
    white: [1, 1, 1, 1],
    gray_1: [235 / 255, 235 / 255, 235 / 255, 1],
    gray_2: [220 / 255, 220 / 255, 220 / 255, 1],
    gray_3: [205 / 255, 205 / 255, 205 / 255, 1],
    floor: [45 / 255, 45 / 255, 45 / 255, 1],
    carpet: [10 / 255, 10 / 255, 10 / 255, 1],
    carpet_motive: [35 / 255, 35 / 255, 35 / 255, 1]
  },
  fonts: { }
}