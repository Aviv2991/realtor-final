import fetcher from '../fetcher';

export async function getAllApartments(query = ''){
    try{
      console.log('getting here')
        const {data} = await fetcher.get(`/apartments?${query}`)
        console.log('data',data)
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
    for (let value of obj.values()) {
      console.log(value); 
  }
    const response = await fetcher.post('/apartments', obj);
    console.log(response)
    return response.data;
}catch(error){
    // throw new Error(`Cant login. ${error.message}`);
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

export async function getApartmentsByStatus(status){
  try{
    const response = await fetcher.get(`/apartments/status/${status}`)
    return response;
  }catch(error){
    throw new Error(`get apartments by status failed with: ${error.message}`);
  }
}

export async function deleteApartmentById(apartmentId){
  try{
    const response = await fetcher.put(`http://localhost:3000/apartments/remove/${apartmentId}`)
    return response
  }catch(error){
    throw new Error(`Delete apartment failed with:${error.message}`)
  }
}

export async function approveApartmentById(apartmentId){
  try{
    const response = await fetcher.put(`http://localhost:3000/apartments/approve/${apartmentId}`)
    return response;
  }catch(error){
    throw new Error(`Approve apartment failed with: ${error.message}`)
  }
}

export async function denyApartmentById(apartmentId){
  try{
    const response = await fetcher.put(`http://localhost:3000/apartments/deny/${apartmentId}`)
    return response;
  }catch(error){
    throw new Error(`Deny apartment failed with: ${error.message}`)
  }
}