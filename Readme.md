# fetch-api-react

    You should have react project to use it

## Description

**this npm fetch-api-react allow write short command for all REST api commands**

## Installation

## NPM

    npm i fetch-api-react

## Yarn

    yarn add fetch-api-react

**Example:**

get all data:
`` `where "?" means "options", not required ` ``

    getApi({ url: 'https://www.google.com', headers? })`

get data by id:

    getByIdApi({ url: 'https://www.google.com', id: 1, headers? })

# Example

```JavaScript
    import { useEffect, useState } from 'react'
    import { getApi, getByIdApi } from 'fetch-api-react'

    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)

	useEffect(() => {
        const getFetch = async () => {
            const allUsers = await getApi({ url: URL })
            const user = await getByIdApi({ url: URL, id: 3 })
            setUsers([allUsers]) // all users
            setUser(user) // one user
	    }
		getFetch()
	}, [])
```

# See all methods

```JavaScript
    import { seeAllMethods } from 'fetch-api-react'

	useEffect(() => {
        const getFetch = async () => {
           console.log(await seeAllMethods())
	    }
		getFetch()
	}, [])
```

[Home page](https://github.com/web-2017/fetch-api-react)
