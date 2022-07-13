import fetch from 'node-fetch';
const baseUrl: string = "https://api.genshin.dev/";

export const publicRoute: object = {
    getAllTypes: async (): Promise<object> => {
        try {
            let res = await fetch(baseUrl);
            return res; 
        } catch (err) {
            return err as object;
        }

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