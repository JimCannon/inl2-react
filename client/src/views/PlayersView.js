import { useState, useEffect, useContext } from "react"
import { UserContext } from "../shared/provider/UserProvider"
import BackendAPIService from "../shared/api/service/BackendAPIService"
import "./PlayersView.css"

export const PlayersView = () => {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(false)
	const [newUser, setNewUser] = useState({
		username: "Flädersaft",
		age: 0,
		password: "secret",
	})

	const create = async () => {
		try {
			setLoading(true)
			await BackendAPIService.createUser(newUser)
			setLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	const fetchData = async () => {
		const response = await BackendAPIService.getAllUsers()
		setUsers(response.data)
	}

	const removePlayer = async () => {
		try {
			const response = await BackendAPIService.deleteUser()
		} catch (error) {}
	}

	useEffect(() => {
		fetchData()
	}, [loading])

	return (
		<div>
			<div className="playersContainer">
				{users.map((x) => (
					<div className="playersCard" key={x._id} onClick={() => console.log(x._id)}>
						<h3>Name: {x.username}</h3>
						{x.age ? <h3>Age: {x.age}</h3> : <h3>N/A</h3>}
						{/* <p onClick={() => console.log("hej")}>Remove player</p> */}
					</div>
				))}
			</div>
			<hr />
			<div>
				<h1>Backend API:</h1>
				<p>USERNAME</p>
				<input
					onChange={(event) => setNewUser({ ...newUser, username: event.target.value })}
				/>{" "}
				<br />
				<p>PASSWORD</p>
				<input onChange={(event) => setNewUser({ ...newUser, password: event.target.value })} />
				<br />
				<p>AGE</p>
				<input onChange={(event) => setNewUser({ ...newUser, age: event.target.value })} /> <br />
				<button onClick={() => create()}>Create User</button>
			</div>
		</div>
	)
}
