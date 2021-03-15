import http from "../BackendAPI"

const createUser = (data) => {
	return http.post("/user", data)
}

const getAllUsers = () => {
	return http.get("/user")
}

const deleteUser = () => {
	return http.delete("/delete")
}

export default {
	createUser,
	getAllUsers,
}
