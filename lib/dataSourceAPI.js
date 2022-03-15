import axios from 'axios';

const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const instance = axios.create({
    baseURL: CONTENTFUL_URL,
    headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
    },
});

// Get Destination List
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

// Get Destination Slugs
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

// Get Blog Posts
const blogQuery = `
query {
  blogPostsCollection {
    items {
      sys {
        id
      }
      slug
      headline
      descriptionBox
      featuredImage {
        url
        title
        description
      }
    }
  }
}`;

export const getBlogPosts = async () =>
    instance
        .post('/', {
            query: blogQuery,
        })
        .then((response) => {
            return response.data;
        })
        .then((r) => {
            return r.data.blogPostsCollection.items;
        })
        .catch((err) => console.error(err));

// Get Blog Slugs
const blogSlugQuery = `
query {
  blogPostsCollection {
    items {
      slug
    }
  }
}
`;
export const getBlogSlugs = async () =>
    instance
        .post('/', {
            query: blogSlugQuery,
        })
        .then((response) => {
            return response.data;
        })
        .then((r) => {
            return r.data.blogPostsCollection.items;
        })
        .catch((err) => console.error(err));

// Get Blog Detail By Slug
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

const postBySlug = (slug) => `query {
  blogPostsCollection(where: { slug: "${slug}"}) {
    items {
      sys {
        id
      }
      slug
      headline
      subheadline
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
    }
  }
}
`;

export const getBlogBySlug = async (slug) => {
    return instance
        .post('/', {
            query: postBySlug(slug),
        })
        .then((response) => {
            return response.data;
        })
        .then((r) => r.data.blogPostsCollection.items[0])
        .catch((err) => console.error(JSON.stringify(err)));
};
