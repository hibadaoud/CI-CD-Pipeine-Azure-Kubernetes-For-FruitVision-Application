const request = require("supertest");
const mongoose = require("mongoose");
const History = require("../../models/historyModel");
require('dotenv').config();

const createApp = require("../../createApp");

describe("Integration testing", () => {
	let app;
	beforeAll(async() => {
		try{
	
			const mongoUri = process.env.MONGO_BASE_URI ;
            options = {
                user: process.env.MONGO_INITDB_ROOT_USERNAME,
                pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
                dbName: process.env.DB_Test_NAME,
				connectTimeoutMS: 10000, // Connection timeout in milliseconds
     			family: 4, // Force IPv4
				authSource: 'admin', // Necessary for authentication in GitLab CI
            };     
        // Connect to MongoDB
		    console.log("trying to conenct to test database");
            await mongoose.connect(mongoUri, options);
			console.log("Connected to Test Database");
		}catch(err){
			console.error("Database connection error:",  err.stack || err);
			console.log("Attempting to connect to database at:", process.env.MONGO_BASE_URI, process.env.DB_Test_NAME );
		}
		app = createApp();
	});


	it("should create the history", async () => {
		const response = await request(app).post("/nodejs/api/history").send({
			type: "Mango",
			resultText: "5",
			full_url: "http://test.com",
		});
		expect(response.statusCode).toBe(201);
	});

    it("should return 400 for invalid input", async () => {
        const response = await request(app).post("/nodejs/api/history").send({
            type: 5, // Invalid input
            resultText: "5",
            full_url: "http://test.com",
        });

        expect(response.statusCode).toBe(400); // Expecting a 400 status code
        expect(response.body).toHaveProperty('title', 'Validation Failed'); // Adjust based on your error response
        expect(response.body).toHaveProperty('message', expect.stringContaining("You should respect the specifications !")); // Check for the specific error message
    });

    it("should handle database errors correctly", async () => {
        jest.spyOn(History, 'create').mockRejectedValue(new Error("Database error")); // Mocking a database error

        const response = await request(app).post("/nodejs/api/history").send({
            type: "Mango",
            resultText: "5",
            full_url: "http://test.com",
        });

        expect(response.statusCode).toBe(500); // Expecting a 500 status code for server error
        expect(response.body).toHaveProperty('title', 'Server Error');
        expect(response.body).toHaveProperty('message', 'Database error');
    });

    it("should get all the histories", async () => {
		const response = await request(app).get("/nodejs/api/history")
		expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy(); // Expecting an array of histories

	});

	afterAll(async () => {
		await mongoose.connection.dropDatabase();
		await mongoose.connection.close();
	});
});
