import axios from 'axios';

const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const instance = axios.create({
    baseURL: CONTENTFUL_URL,
    headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
    },
});

const destinationQuery = `
query {
  travelPostsCollection {
    items {
      sys {
        id
      }
      slug
      headline
      country
      featuredImage {
        url
        description
      }
      tags
    }
  }
}
`;

export const getDestinations = async () =>
    instance
        .post('/', {
            query: destinationQuery,
        })
        .then((response) => {
            return response.data;
        })
        .then((r) => r.data.travelPostsCollection.items)
        .catch((err) => console.error(err));

const destinationSlugQuery = `
query {
  travelPostsCollection {
    items {
      slug
    }
  }
}
`;

export const getDestinationSlugs = async () =>
    instance
        .post('/', {
            query: destinationSlugQuery,
        })
        .then((response) => {
            return response.data;
        })
        .then((r) => {
            return r.data.travelPostsCollection.items;
        })
        .catch((err) => console.error(err));

const destinationBySlug = (slug) => `query {
  travelPostsCollection(where: { slug: "${slug}"}) {
    items {
      sys {
        id
      }
      slug
      headline
      country
      desktopImage {
        url
        title
        description
      }
      mobileImage {
        url 
        title
        description
      }
      destinationInfo
      destinationContainer
      tags
    }
  }
}
`;

export const getDestinationBySlug = async (slug) => {
    return instance
        .post('/', {
            query: destinationBySlug(slug),
        })
        .then((response) => {
            return response.data;
        })
        .then((r) => r.data.travelPostsCollection.items[0])
        .catch((err) => console.error(JSON.stringify(err)));
};
