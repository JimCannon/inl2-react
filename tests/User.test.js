import Chai from "chai"
import ChaiHTTP from "chai-http"
import { describe, it as test } from "mocha"
import app from "../Server.js"

Chai.should()
Chai.use(ChaiHTTP)

const testingNonExistentRoute = () => {
	describe("testingNonExistentRoute", () => {
		test("HTTP Call against a route that doesnt exist in the API", (done) => {
			Chai.request(app)
				.get("/wwadw")
				.end((request, response) => {
					response.should.have.a.status(404)
					done()
				})
		})
	})
}

// const getAllUsers = () => {
// 	test("Expecting a return of all users in database", (done) => {
// 		Chai.request(app)
// 			.get("/user")
// 			.end((request, response) => {
// 				response.should.have.a.status(200)
// 				response.body.should.be.a("array")
// 				done()
// 			})
// 	})
// }

describe("TESTING THE USER API ENTITY", () => {
	testingNonExistentRoute()
	// getAllUsers()
})
