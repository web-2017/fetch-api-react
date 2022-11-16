import FetchApi from './FetchApi/FetchApi'

const api = new FetchApi()

const getApi = api.getApi
const getByIdApi = api.getByIdApi

export { getApi, getByIdApi }
