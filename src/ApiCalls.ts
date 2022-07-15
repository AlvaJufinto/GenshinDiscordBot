import fetch from 'node-fetch';
const baseUrl: string = "https://api.genshin.dev";

export const getAllTypes = async (): Promise<object> => {
    try {
        let res = await fetch(`${baseUrl}`);
        return await res.json(); 
    } catch (err) {
        return err as object;
    }
}

// TODO: make get item stuff
export const getTypeItems = async (type: string): Promise<object> => {
    try {
        let res = await fetch(`${baseUrl}/${type}`);
        return await res.json(); 
    } catch (err) {
        return err as object;
    }
}