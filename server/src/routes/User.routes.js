import UserController from "../controllers/User.controller.js"

const routes = (app) => {
	app.post("/user", UserController.createUser)
	app.get("/user", UserController.getAllUsers)
	app.delete("/user/:userId", UserController.deleteUser)
	app.put("/user/:userId", UserController.updateUser)
	app.get("/search", UserController.queryUsername)
	app.get("/users", UserController.getUserById)
}

export default {
	routes,
}
