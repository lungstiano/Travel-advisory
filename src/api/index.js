import axios from 'axios';



export const getPlaceData = async (type, sw, ne) =>{
    try{
        const { data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
  
          params: {
              bl_latitude: sw.lat,
              bl_longitude: ne.lat,
              tr_longitude: sw.lng,
              tr_latitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'e444b845c3mshff125d2d1d4eb97p19c213jsnb17e1551da89'
          }
        });

        return data;

    } catch(error){
        console.log(error)
        

    }
}