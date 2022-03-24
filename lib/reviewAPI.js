import axios from 'axios';

const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const instance = axios.create({
    baseURL: CONTENTFUL_URL,
    headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
    },
});

const reviewQuery = `
query {
  reviewPostsCollection {
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

export const getReviewPosts = async () =>
    instance
        .post('/', {
            query: reviewQuery,
        })
        .then((response) => {
            return response.data;
        })
        .then((r) => {
            return r.data.reviewPostsCollection.items;
        })
        .catch((err) => console.error(err));
