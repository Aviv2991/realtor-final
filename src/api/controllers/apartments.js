import fetcher from '../fetcher';

export async function getAllApartments(query = ''){
    try{
        const {data} = await fetcher.get(`/apartments?${query}`)
        return data;
    }catch(error) {
      throw new Error(`Get aprtment failed with:${error.message}`)
    }
  }