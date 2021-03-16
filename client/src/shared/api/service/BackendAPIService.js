import http from "../BackendAPI"

const createUser = (data) => {
	return http.post("/user", data)
}

const getAllUsers = () => {
	return http.get("/user")
}

// const deleteUser = async (id) => {
// 	return await http.delete("/delete", id)
// }

export default {
	createUser,
	getAllUsers,
}
