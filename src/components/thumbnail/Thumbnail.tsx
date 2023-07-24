import React, { useContext } from 'react';
import { CurrentImageContext } from '../current-image/CurrentImage.context';
import s from './Thumbnail.module.scss';

type Image = { n: string; h: number };

function Thumbnail({ image }: { image: Image }): JSX.Element {
  const [, setCurrentImage] = useContext(CurrentImageContext) || [undefined, () => {}];

  return (
    <div className={s.Thumbnail}>
      <img
        src={`/portfolio/${image.n}_thumb.avif`}
        alt={image.n}
        onClick={() => setCurrentImage(image)}
      />
    </div>
  );
}

export default Thumbnail;
