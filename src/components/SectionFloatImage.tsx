import * as React from 'react';
import { Image } from '../types';
import { getImage } from '../utils';
import { Layout } from './Layout';
import { twMerge } from 'tailwind-merge';

interface SectionFloatImageProps {
  title?: string;
  description?: string;
  image: Image;
  image_position: string;
}

export const SectionFloatImage = ({
  title,
  description,
  image,
  image_position,
}: SectionFloatImageProps) => {
  return (
    <Layout>
      <div className="flex">
        <div className="flex-1 flex flex-col justify-center ">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>

        <div
          className={twMerge(
            'flex-1',
            image_position === 'left' ? 'order-first' : 'order-last'
          )}
        >
          <img src={getImage(image.data.attributes.url)} />
        </div>
      </div>
    </Layout>
  );
};
