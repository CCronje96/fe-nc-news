import { useEffect, useState } from "react"

const useApiRequest = (apiFunction, ...args) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
            setIsLoading(true);
            setIsError(null);
    
            apiFunction(...args).then((data) => {
                setData(data)
            })
            .catch((err) => {
                console.log(err)
                setIsError(err);
            })
            .finally(() => {
                setIsLoading(false);
            })
        }, [...args])
    return {data, isLoading, isError};

}

export default useApiRequest;