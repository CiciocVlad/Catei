import { useState } from 'react'
import { Catel } from '../requests/server1'
import classes from './App.module.css'
import { CateiFromServer1 } from './CateiFromServer1'
import { CateiFromServer2 } from './CateiFromServer2'

export default function App() {
	const [id, setId] = useState(Number)
	const [name, setName] = useState('')
	const [age, setAge] = useState(Number)
	const [catei, setCatei] = useState(Array<Catel>())

	return (
		<div className={classes.bigWrapper}>
			<CateiFromServer1 />
			<CateiFromServer2 />
		</div>
	)
}
