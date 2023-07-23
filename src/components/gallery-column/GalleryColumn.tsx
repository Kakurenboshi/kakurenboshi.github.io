import React from 'react';
import Thumbnail from '../thumbnail/Thumbnail';

function GalleryColumn({ column }: { column: { n: string; h: number }[] }) {
  return (
    <div className='pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-4 pure-u-xl-1-5 pure-u-xxl-1-6 pure-u-xxxl-8 pure-u-x4k-12'>
      {column.map((image) => (
        <Thumbnail key={image.n} image={image} />
      ))}
    </div>
  );
}

export default GalleryColumn;
