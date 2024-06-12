export const ExportAllApis = () => {

    const fetchTourPackages = async () => {
        try {
            let result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apis/packages/index`)
            let resp = await result.json()
            return resp.data
        } catch (error) {
            console.log(error)

        }
    }

    const fetchAlldestinations = async () => {
        try {
            let result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apis/packages/package_category_with_city`)
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
            return resp.data
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




    return {
        fetchTourPackages,
        fetchAlldestinations,
        fetchFilterDestination,
        fetchSingledestination
    }

}