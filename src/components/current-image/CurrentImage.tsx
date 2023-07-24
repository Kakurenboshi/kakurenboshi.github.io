import React, { useContext } from 'react';
import { CurrentImageContext } from './CurrentImage.context';
import s from './CurrentImage.module.scss';

function CurrentImage() {
  const [currentImage, setCurrentImage] = useContext(CurrentImageContext) ||  [undefined, () => {}];

  if (currentImage) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
  
  return currentImage ? <section className={s.Content} onClick={() => setCurrentImage(undefined)}>
    <div className={s.Image}>
      <img src={`/portfolio/${currentImage.n}.avif`} alt={currentImage.n} onClick={e => e.stopPropagation()} />
    </div>
  </section> : null;
}

export default CurrentImage;