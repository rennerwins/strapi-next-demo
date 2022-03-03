import * as React from 'react';
import { Image } from '../types';
import { getImage } from '../utils';
import { Layout } from './Layout';

interface SectionBannerProps {
  title?: string;
  description?: string;
  banner_image?: Image;
  image?: Image;
}

export const SectionBanner = ({
  title,
  description,
  banner_image,
  image,
}: SectionBannerProps) => {
  return (
    <div className="relative">
      <div className="absolute z-0 top-0 w-full filter opacity-10">
        <img
          src={getImage(banner_image?.data.attributes.url)}
          className="h-[500px] w-full"
        />
      </div>

      <Layout>
        <div className="grid grid-cols-12 py-10">
          <div className="col-span-6 space-y-4 flex flex-col justify-center z-20 p-4">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p>{description}</p>
          </div>

          <div className="col-span-6 z-20 p-4">
            <img src={getImage(image?.data.attributes.url)} />
          </div>
        </div>
      </Layout>
    </div>
  );
};
