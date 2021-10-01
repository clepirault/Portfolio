import Prismic from '@prismicio/client';

export const apiEndpoint = 'https://clepi-portfolio.prismic.io/api/v2'
export const client = Prismic.client(apiEndpoint)

const init = async () => {
  const data = await client.query('')
  console.log(data)
}

init()
