import React from 'react';
import s from './Thumbnail.module.scss';

type Image = { n: string; h: number };

function Thumbnail({ image }: { image: Image }): JSX.Element {
  return (
    <div className={s.Thumbnail}>
      <img src={`/portfolio/${image.n}_thumb.avif`} alt={image.n} />
    </div>
  );
}

export default Thumbnail;
