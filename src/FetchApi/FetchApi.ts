import fetch from 'node-fetch'

export interface IFetchApiProps {
	url: string
	headers?: object
}

export interface IFetchByIdApiProps extends IFetchApiProps {
	id: string
}
export interface IFetchPostProps extends IFetchApiProps {
	body: object
}

const defaultHeaders = { 'Content-type': 'application/json; charset=UTF-8' }

class FetchApi {
	seeAllMethods() {
		return console.info(`
			getApi({ url, headers })
			getByIdApi({ url, id, headers })
		`)
	}
	getApi({ url, headers }: IFetchApiProps) {
		if (!url) {
			console.log('Url is required')
			return
		}
		return fetch(url, {
			method: 'GET',
			headers: headers ? { ...headers } : defaultHeaders,
		})
			.then((docJson: any) => docJson.json())
			.then((data: any) => data)
			.catch((error: any) => console.error(error))
	}
	getByIdApi({ url, id, headers }: IFetchByIdApiProps) {
		if (!url) {
			console.log(
				'Url is required!!!, Example: getByIdApi({ url: "http://google.com" }'
			)
			return
		}
		if (!id) {
			console.log('Id is required!!!, Example: getByIdApi({ id: 1 }')
			return
		}
		return fetch(`${url}/${id}`, {
			method: 'GET',
			headers: headers ? { ...headers } : defaultHeaders,
		})
			.then((docJson: any) => docJson.json())
			.then((data: any) => data)
			.catch((error: any) => console.error(error))
	}
	postApi({ url, body, headers }: IFetchPostProps) {
		if (!url) {
			console.log(
				'Url is required!!!, Example: getByIdApi({ url: "http://google.com" }'
			)
			return
		}

		if (typeof body !== 'object') {
			console.log(
				'body must be an object!!!, Example: body: { title: "Hello world", firstName: John}'
			)
			return
		}
		if (!body) {
			console.log(
				'body object is required!!!, Example: getByIdApi({ body: {title: hello} }'
			)
			return
		}
		return fetch(`${url}`, {
			method: 'POST',
			headers: headers ? { ...headers } : defaultHeaders,
			body: JSON.stringify({ ...body }),
		})
			.then((docJson: any) => docJson.json())
			.then((data: any) => data)
			.catch((error: any) => console.error(error))
	}
}

const api = new FetchApi()

export default api
