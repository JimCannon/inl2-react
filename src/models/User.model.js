import mongoose from "mongoose"

const UserSchema = mongoose.Schema(
	{
		username: {
			type: String,
			unique: true,
			allowNull: false,
			required: true,
		},
		age: {
			type: Number,
			required: false,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

const UserModel = mongoose.model("user", UserSchema)
export default UserModel
