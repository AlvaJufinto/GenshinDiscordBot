import fetch from 'node-fetch';
const baseUrl: string = "https://api.genshin.dev";

// export const publicRoute: object = {
export const getAllTypes = async (): Promise<object> => {
    try {
        let res = await fetch(`${baseUrl}`);
        return await res.json(); 
    } catch (err) {
        return err as object;
    }
}