export const ExportAllApis=()=>{
    const port = process.env.NEXT_PUBLIC_API_PORT;
    const fetchAllDestinations = async () => {
        let data = await fetch(`http://localhost:${port}/destinationsData`);
        let resp = await data.json();
        return resp;
      };
      const fetchAllDestinationsPackages = async () => {
        let data = await fetch(`http://localhost:${port}/destinationInnerData`);
        let resp = await data.json();
        return resp;
      };
     

      return{
        fetchAllDestinations,
        fetchAllDestinationsPackages
      }
}