import fetcher from '../fetcher';

export async function login(username, password){
    try{
        const response = await fetcher.post('/login', {username, password});
        return response.data;
    }catch(error){
        throw new Error(`Cant login. ${error.message}`);
    }
}

