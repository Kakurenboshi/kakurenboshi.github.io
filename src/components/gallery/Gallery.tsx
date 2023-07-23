import React, { useEffect, useState } from 'react';
import database from '../../db.json';
import GalleryColumn from '../gallery-column/GalleryColumn';
import s from './Gallery.module.scss';

type Image = { n: string; h: number };
type Column = Array<Image> & { height: number };

const columnNumberMap = [
  { width: 240, number: 12 },
  { width: 160, number: 8 },
  { width: 120, number: 6 },
  { width: 80, number: 5 },
  { width: 64, number: 4 },
  { width: 48, number: 3 },
  { width: 35.5, number: 2 },
  { width: 0, number: 1 },
];

function getColumnByEmWidth(width: number) {
  return columnNumberMap.find((c) => c.width <= width)?.number ?? 12;
}

function getEmWidth() {
  const fontSize = parseFloat(
    window.getComputedStyle(document.body, null).getPropertyValue('font-size'),
  );
  return window.innerWidth / fontSize;
}

function buildGallery(columnNumber: number): Column[] {
  const column = () => {
    const column = Array.from({ length: 0 }) as Column;
    column.height = 0;

    return column;
  };

  const gallery: Column[] = Array.from({ length: columnNumber }, column);

  for (const image of database) {
    const minimum = Math.min(...gallery.map((column) => column.height));
    const minIndex = gallery.findIndex((column) => column.height === minimum);

    gallery[minIndex].push(image);
    gallery[minIndex].height += image.h;
  }

  return gallery;
}

function Gallery() {
  const [columnNumber, setColumnNumber] = useState(getColumnByEmWidth(getEmWidth()));
  const [gallery, setGallery] = useState(buildGallery(columnNumber));

  useEffect(() => {
    function handleResize() {
      const newColumnNumber = getColumnByEmWidth(getEmWidth());

      if (newColumnNumber !== columnNumber) {
        setGallery(buildGallery(newColumnNumber));
        setColumnNumber(newColumnNumber);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setGallery, setColumnNumber, columnNumber]);

  return (
    <div className={s.Container}>
      <div className='pure-g'>
        {gallery.map((column, i) => (
          <GalleryColumn key={i} column={column} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
