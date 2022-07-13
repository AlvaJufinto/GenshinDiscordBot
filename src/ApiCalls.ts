const baseUrl: string = "https://api.genshin.dev/";

export const publicRoute: object = {
    getAllTypes: (): object => {
        return fetch(baseUrl);
    },
    getElements: (): object => {
      return fetch(`${baseUrl}/elements`)
    },
    // getPost: (body: string) => {
    //   return fetch(`${baseUrl}/public/post/${body}`);
    // },
    // getPostLikes: (body: string) => {
    //   return fetch(`${baseUrl}/public/post/likes/${body}`)
    // }
  }