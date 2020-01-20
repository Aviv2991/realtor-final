import fetcher from '../fetcher';

export async function signup({role_id,first_name,last_name,email,password,phone}){
    try{
        const response = await fetcher.post('/signup', {role_id,first_name,last_name,email,password,phone});
        return response.data;
    }catch(error){
        throw new Error(`Cant login. ${error.message}`);
    }
}
