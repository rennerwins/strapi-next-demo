import * as React from 'react';
import { Layout } from './Layout';
import { SectionBlockImage, SectionBlockImageProps } from './SectionBlockImage';

interface SectionBlockImageGroupProps {
  BlockImages: SectionBlockImageProps[];
}

export const SectionBlockImageGroup = ({
  BlockImages = [],
}: SectionBlockImageGroupProps) => {
  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        {BlockImages.map((block) => (
          <div key={block.id} className="col-span-6">
            <SectionBlockImage {...block} />
          </div>
        ))}
      </div>
    </Layout>
  );
};
