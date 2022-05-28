import { server1 } from "./consts";

export interface Catel {
	id: number;
	name: string;
	age: number;
	foodId: number;
}

export interface Food {
	id: number;
	name: string;
	available: boolean;
}

export const getCatei = async () => {
	const header = {
		method: 'GET'
	}
	const request = await fetch(`${server1}/catei`, header)
	return await request.json()
}

export const getFood = async () => {
	const request = await fetch(`${server1}/food`)
	return await request.json()
}

export const addCatel = async (catel: Catel) => {
	const header = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(catel)
	}
	const request = await fetch(`${server1}/catei`, header)
	return await request.json()
}