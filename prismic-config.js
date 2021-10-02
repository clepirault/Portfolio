/* import Prismic from '@prismicio/client'; */
import Prismic from "prismic-javascript";

export const apiEndpoint = process.env.PRISMIC_URL;

export const accessToken = process.env.PRISMIC_TOKEN;

export const client = Prismic.client(apiEndpoint, { accessToken })
