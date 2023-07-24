import React, { createContext } from 'react';

export type Image = { n: string; h: number };
export type ImageState = Image | undefined;
export type CurrentImageContextType = [
  ImageState,
  React.Dispatch<React.SetStateAction<Image | undefined>>,
];

export const CurrentImageContext = createContext<CurrentImageContextType | undefined>(undefined);
