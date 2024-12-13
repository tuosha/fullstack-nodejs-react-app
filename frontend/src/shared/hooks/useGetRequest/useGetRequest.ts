import { useCallback, useEffect, useState } from 'react'

type TUseGetTypesFn = (url: string) => Promise<object>

const useGetRequest = (url: string, fn: TUseGetTypesFn) => {
    const [data, setData] = useState<object[] | []>([])
    const [error, setError] = useState<string | null>('')
    const [loaded, setLoaded] = useState<boolean>(false)
    const request = useCallback(
        async () =>
            await fn(url)
                .then((res: object[]) => {
                    setData(res)
                    return data ? setLoaded(true) : setLoaded(false)
                })
                .catch((err: string) => setError(err)),
        [],
    )
    useEffect(() => {
        const sendRequest = () => request()
        sendRequest()
    }, [])
    return { data, loaded, error }
}

export default useGetRequest
