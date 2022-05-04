import{ useEffect, useState } from 'react'

function useFetch({api, method, path, data = null, config = null}) {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {

		setTimeout(() => {
			
		}, 1000);

		( async () => {
			try{
				api[method](path, JSON.parse(config), JSON.parse(data))
				.then((res) => {
					setResponse(res.data)
					console.log(res.data)
				})
				.finally(() => {
					setIsLoading(false);
				})
			}catch(err){
				setError(err);
			}
		})()


		
	},[api, method, path, data, config])

  return { response, error , isLoading}
}

export default useFetch