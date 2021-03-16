import UserModel from "../models/User.model.js"

const createUser = async (req, res) => {
	const user = new UserModel({
		username: req.body.username,
		age: req.body.age,
		password: req.body.password,
	})

	try {
		const databaseResponse = await user.save()
		res.status(201).send(databaseResponse)
	} catch (error) {
		res.status(500).send({ message: error.message })
	}
}

const getAllUsers = async (req, res) => {
	try {
		const databaseResponse = await UserModel.find()
		if (databaseResponse) {
			res.status(200).send(databaseResponse)
		} else {
			res.status(400).send(databaseResponse)
		}
	} catch (error) {
		res.status(500).send({ message: error.message })
	}
}

const deleteUser = async (req, res) => {
	try {
		const databaseResponse = await UserModel.findByIdAndDelete(req.params.userId)
		if (databaseResponse) {
			res.status(200).send({
				message: "Successfully deleted user",
				data: databaseResponse,
			})
		} else {
			res.status(400).send({
				message: "Something went wrong",
				data: databaseResponse,
			})
		}
	} catch (error) {
		res.status(500).send({
			message: "Error occured while trying to retrieve user with ID: " + req.params.userId,
			message: error.message,
		})
	}
}

const updateUser = async (req, res) => {
	const data = {
		username: req.body.username,
		password: req.body.password,
	}
	try {
		const databaseResponse = await UserModel.findByIdAndUpdate(req.params.userId, data, {
			new: true,
		})
		if (databaseResponse) {
			res.status(200).send({
				message: "Successfully updated user",
				data: databaseResponse,
			})
		} else {
			res.status(400).send({
				message: "Something went wrong",
				data: databaseResponse,
			})
		}
	} catch (error) {
		res.status(500).send({
			message: "Error occured while trying to retrieve user with ID: " + req.params.userId,
			message: error.message,
		})
	}
}

const queryUsername = async (req, res) => {
	try {
		const databaseResponse = await UserModel.find({ username: req.query.username })
		res.status(200).send(databaseResponse)
	} catch (error) {
		res.status(500).send({
			message: `Error occured while trying to retrieve user with username: ${req.query.username}`,
			message: error,
		})
	}
}

const getUserById = async (req, res) => {
	try {
		const databaseResponse = await UserModel.findOne({ _id: req.query._id })
		res.status(200).send(databaseResponse)
	} catch (error) {
		res.status(500).send({
			error: `Error occured while trying to retrieve user with the ID: ${req.query._id}`,
			message: error,
		})
	}
}

export default {
	createUser,
	getAllUsers,
	deleteUser,
	updateUser,
	queryUsername,
	getUserById,
}
