import axios from 'axios';

const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const instance = axios.create({
    baseURL: CONTENTFUL_URL,
    headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
    },
});

const blogQuery = `
query {
  blogPostsCollection {
    items {
      sys {
        id
      }
      slug
      headline
      subheadline
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

const postBySlug = (slug) => `query {
            blogPostsCollection(where: { slug: "${slug}"}) {
              items {
                sys {
                  id
                }
                slug
                headline
                subheadline
                descriptionBox
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
