import { gql, GraphQLClient } from 'graphql-request';
import * as React from 'react';
import {
  SectionBanner,
  SectionBlockImageGroup,
  Layout,
  SectionFloatImage,
} from '../src/components';
import { SectionBlockImage } from '../src/components/SectionBlockImage';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_API!);

const HomePage = ({ about }: any) => {
  const Component: any = {
    ComponentSectionBanner: SectionBanner,
    ComponentSectionBlockImageGroup: SectionBlockImageGroup,
    ComponentSectionBlockImage: SectionBlockImage,
    ComponentSectionFloatImage: SectionFloatImage,
  };

  return (
    <>
      <div className="space-y-20">
        {about.content.map((section: any) => {
          let Comp: any = Component?.[section.__typename];
          if (!Comp) {
            return null;
          }
          return <Comp key={section.__typename} {...section} />;
        })}
      </div>
    </>
  );
};

const About = gql`
  query {
    about {
      data {
        attributes {
          content {
            __typename
            ... on ComponentSectionBlockImage {
              description
              id
              title
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            ... on ComponentSectionBlockImageGroup {
              id
              BlockImages {
                description
                id
                title
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
            ... on ComponentSectionFloatImage {
              __typename
              description
              id
              title
              image_position
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            ... on ComponentSectionBanner {
              description
              title
              id
              banner_image {
                data {
                  attributes {
                    url
                  }
                }
              }
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getStaticProps = async () => {
  const data = await client.request(About);
  console.log('data:', data);

  return {
    props: {
      about: data.about.data.attributes,
    },
  };
};

export default HomePage;
