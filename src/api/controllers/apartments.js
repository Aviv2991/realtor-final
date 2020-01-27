import fetcher from '../fetcher';

export async function getAllApartments(query = ''){
    try{
        const {data} = await fetcher.get(`/apartments?${query}`)
        return data;
    }catch(error) {
      throw new Error(`Get aprtment failed with:${error.message}`)
    }
  };

  export async function getApartmentsByUserId(userId) {
    try{
      const apartmentsData = await fetcher.get(`/apartments/users/${userId}`)
      return apartmentsData;
    }catch(error){
      throw new Error(`Get apartments failed with: ${error.message}`);
    }
  }

  export async function getWishListApartments(userId) {
    try{
      const wishListData = await fetcher.get(`/wish_list/${userId}`);
      return wishListData;
    }catch(error){
      throw new Error(`Get wish list failed with: ${error.message}`);
    }
  }

export async function addNewApartment (obj) {
  try{
    const response = await fetcher.post('/apartments', obj);
    return response.data;
}catch(error){
    throw new Error(`Cant login. ${error.message}`);
  }
}
export async function addApartmentToWishList(wishListObj){
  try{
    const response = await fetcher.post('/wish_list',wishListObj);
    console.log('response',response)

    return response.data;
  }catch(error){
    throw new Error(`adding apartment to wish list failed with ${error.message}`)
  }
}