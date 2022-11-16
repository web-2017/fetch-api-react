import fetch from 'node-fetch'

export interface IFetchApiProps {
	url: string
	headers?: object
}

export interface IFetchByIdApiProps extends IFetchApiProps {
	id: string
}

class FetchApi {
	getApi({ url, headers }: IFetchApiProps) {
		if (!url) {
			console.log('Url is required')
			return
		}
		return fetch(url, { method: 'GET', headers: { ...headers } })
			.then((docJson) => docJson.json())
			.then((data) => data)
			.catch((error) => console.error(error))
	}
	getByIdApi({ url, id, headers }: IFetchByIdApiProps) {
		if (!url) {
			console.log('Url is required!!!')
			return
		}
		if (!id) {
			console.log('Id is required!!!')
			return
		}
		return fetch(`${url}/${id}`, { method: 'GET', headers: { ...headers } })
			.then((docJson) => docJson.json())
			.then((data) => data)
			.catch((error) => console.error(error))
	}
}

export default FetchApi
