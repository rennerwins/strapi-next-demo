import * as React from 'react';
import { Image } from '../types';
import { getImage } from '../utils';

export interface SectionBlockImageProps {
  id: string;
  title: string;
  description: string;
  image: Image;
}

export const SectionBlockImage = ({
  id,
  title,
  description,
  image,
}: SectionBlockImageProps) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <img
        className="h-50 object-cover"
        src={getImage(image.data.attributes.url)}
      />
      <p>{description}</p>
    </div>
  );
};
