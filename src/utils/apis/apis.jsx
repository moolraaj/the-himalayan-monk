export const ExportAllApis = () => {

    const fetchTourPackages = async (ALL_TOUSR_PER_PAGE,page) => {
        try {
            let result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apis/packages/index?limit=${ALL_TOUSR_PER_PAGE}&page=${page}`)
            let resp = await result.json()
            let {data,totalCount,totalPerPage}=resp.data
            return {data,totalCount,totalPerPage}
        } catch (error) {
            console.log(error)

        }
    }

    const fetchAlldestinations = async (ALL_DESTINATIONS_PER_PAGE, page) => {
        try {
            let result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apis/packages/package_category_with_city?limit=${ALL_DESTINATIONS_PER_PAGE}&page=${page}`)
            let resp = await result.json()
            let {data,totalCount}=resp.data
            return {data,totalCount}
        } catch (error) {
            console.log(error)
        }
    }



    const fetchAllActivities = async (ALL_ACTIVITIES_PER_PAGE,page) => {
        try {
            let result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apis/packages/typePacakge/2?limit=${ALL_ACTIVITIES_PER_PAGE}&page=${page}`)
            let resp = await result.json()
            let {data,totalCount}=resp.data
            return {data ,totalCount}
        } catch (error) {
            console.log(error)
        }
    }
    

    const fetchCityBasedActivities = async (id) => {
        try {
            let result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apis/packages/typePacakge/2/${id}`)
            let resp = await result.json()
            let{data,totalCount}=resp.data
            return {data,totalCount}
        } catch (error) {
            console.log(error)
        }
    }

    const fetchSingleActivityDetails = async (id, key) => {
        try {
            let result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apis/packages/details/${id}/${key}`)
            let resp = await result.json()
            return resp.data
        } catch (error) {
            console.log(error)
        }
    }




    const fetchFilterDestination = async (id) => {
        try {

            let formData = new FormData()
            formData.append('city_id', id)
            let result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apis/packages/package_with_city`, {
                method: 'POST',
                body: formData
            })
            let resp = await result.json()
            let {totalCount,data}=resp.data
            return {totalCount,data}
        } catch (error) {
            console.log(error)
        }
    }

    const fetchSingledestination = async (id, key) => {
        try {

            let result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apis/packages/details/${id}/${key}`)
            let resp = await result.json()
            return resp.data
        } catch (error) {
            console.log(error)
        }
    }



    const SubmitDestinmationsformData = async (user) => {
        try {
            const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apis/query/savequery`, user);
            const resp = await result.json();
            return resp
        } catch (error) {
            console.log(error);

        }
    };







    return {
        fetchTourPackages,
        fetchAlldestinations,
        fetchAllActivities,
        fetchCityBasedActivities,
        fetchSingleActivityDetails,
        fetchFilterDestination,
        fetchSingledestination,
        SubmitDestinmationsformData
    }

}

export const ALL_TOUSR_PER_PAGE=6
export const ALL_DESTINATIONS_PER_PAGE=6
export const ALL_ACTIVITIES_PER_PAGE=3