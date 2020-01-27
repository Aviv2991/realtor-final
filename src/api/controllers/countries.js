import fetcher from '../fetcher';

export async function getAllCountries(query = ''){
    try{
        const {data} = await fetcher.get(`/countries`)
        return data;
    }catch(error) {
      throw new Error(`Get Countries failed with:${error.message}`)
    }
  };

  export async function getCitiesByCountryName(countryName) {
      try{
          const citiesData = await fetcher.get(`/${countryName}/cities`);
          return citiesData.data;
      }catch(error){
          throw new Error(`Get Cities failed with:${error.message}`);
      }
  }

  