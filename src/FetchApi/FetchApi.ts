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
export interface IFetchPutProps extends IFetchApiProps {
	body: object
	id: string
}
export interface IFetchFilterProps extends IFetchApiProps {
	params: object
}

const defaultHeaders = { 'Content-type': 'application/json; charset=UTF-8' }

const showInfoLog = (type: string, name: string) =>
	`${type} is required!!!, Example: ${name}({ ${type}: "http://google.com" }`

class FetchApi {
	seeAllMethods() {
		return console.info(`
			getApi({ url, headers? })
			getByIdApi({ url, id, headers? })
			postApi({ url, body, headers? })
			putApi({ url, body, id, headers? })
			patchApi({ url, body, id, headers? })
			deleteApi({ url, id, headers? })
			filterApi({ url, params, headers? })
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
			console.log(showInfoLog('Url', 'getByIdApi'))
			return
		}
		if (!id) {
			console.log(showInfoLog('Id', 'getByIdApi'))
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
			console.log(showInfoLog('Url', 'postApi'))
			return
		}

		if (typeof body !== 'object') {
			console.log(
				'body must be an object!!!, Example: body: { title: "Hello world", firstName: John}'
			)
			return
		}
		if (!body) {
			console.log(showInfoLog('body', 'postApi'))
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

	putApi({ url, id, headers, body }: IFetchPutProps) {
		if (!url) {
			console.log(showInfoLog('Url', 'putApi'))
			return
		}

		if (!id) {
			console.log(showInfoLog('Id', 'putApi'))
			return
		}

		if (typeof body !== 'object') {
			console.log(
				'body must be an object!!!, Example: body: { title: "Hello world", firstName: John}'
			)
			return
		}
		if (!body) {
			console.log(showInfoLog('body', 'putApi'))
			return
		}
		return fetch(`${url}`, {
			method: 'PUT',
			headers: headers ? { ...headers } : defaultHeaders,
			body: JSON.stringify({ ...body }),
		})
			.then((docJson: any) => docJson.json())
			.then((data: any) => data)
			.catch((error: any) => console.error(error))
	}

	patchApi({ url, id, headers, body }: IFetchPutProps) {
		if (!url) {
			console.log(showInfoLog('Url', 'patchApi'))
			return
		}

		if (!id) {
			console.log(showInfoLog('Id', 'patchApi'))
			return
		}

		if (typeof body !== 'object') {
			console.log(
				'body must be an object!!!, Example: body: { title: "Hello world", firstName: John}'
			)
			return
		}
		if (!body) {
			console.log(console.log(showInfoLog('body', 'patchApi')))
			return
		}
		return fetch(`${url}/${id}`, {
			method: 'PATCH',
			headers: headers ? { ...headers } : defaultHeaders,
			body: JSON.stringify({ ...body }),
		})
			.then((docJson: any) => docJson.json())
			.then((data: any) => data)
			.catch((error: any) => console.error(error))
	}

	deleteApi({ url, id, headers }: IFetchPutProps) {
		if (!url) {
			console.log(
				'Url is required!!!, Example: deleteApi({ url: "http://google.com" }'
			)
			return
		}

		if (!id) {
			console.log(showInfoLog('body', 'deleteApi'))
			return
		}
		return fetch(`${url}/${id}`, {
			method: 'DELETE',
			headers: headers ? { ...headers } : defaultHeaders,
		})
			.then((docJson: any) => docJson.json())
			.then((data: any) => data)
			.catch((error: any) => console.error(error))
	}

	filterApi({ url, params, headers }: IFetchFilterProps) {
		if (!url) {
			console.log(showInfoLog('Url', 'filterApi'))
			return
		}

		if (!params) {
			console.log(showInfoLog('params', 'filterApi'))
			return
		}

		return fetch(`${url}/${params}`, {
			method: 'GET',
			headers: headers ? { ...headers } : defaultHeaders,
		})
			.then((docJson: any) => docJson.json())
			.then((data: any) => data)
			.catch((error: any) => console.error(error))
	}
}

const api = new FetchApi()

const getApi = api.getApi
const getByIdApi = api.getByIdApi
const seeAllMethods = api.seeAllMethods
const postApi = api.postApi
const putApi = api.putApi
const patchApi = api.patchApi
const deleteApi = api.deleteApi
const filterApi = api.filterApi

export {
	getApi,
	getByIdApi,
	api,
	seeAllMethods,
	postApi,
	putApi,
	deleteApi,
	patchApi,
	filterApi,
}
