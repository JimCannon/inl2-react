import Axios from "axios"

const devURL = "http://localhost:3001"

const BackendAPI = Axios.create({
	baseURL: devURL,
})

export default BackendAPI
