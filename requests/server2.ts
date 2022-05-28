import { ApolloClient, gql, InMemoryCache } from "@apollo/client"
import { server2 } from "./consts"
import { Catel } from "./server1"

export const getCatei = async () => {
	const header = {
		method: 'POST',
		headers: { 'Content-Type': 'application/graphql' },
		body: 'query { allCateis { name, age, foodId } }'
	}
	const request = await fetch(server2, header)
	const data = await request.json()
	return data.data.allCateis
}

export const addCatel = async (catel: Catel) => {
	const header = {
		method: 'POST',
		headers: { 'Content-Type': 'application/graphql' },
		body: `mutation { 
			createCatei(name: "${catel.name}", age: ${catel.age}, foodId: ${catel.foodId}) {
				name
				age
				foodId
			}
		}`
	}
	const request = await fetch(server2, header)
	const data = await request.json()
	return data.data.allCateis
}

export const getFood = async () => {
	const client = new ApolloClient({
		uri: server2,
		cache: new InMemoryCache()
	})
	const query = gql`
		query {
			allFood {
				id
				name
				available
			}
		}
	`
	const request = await client.query({ query })
	return await request.data.allFood
}