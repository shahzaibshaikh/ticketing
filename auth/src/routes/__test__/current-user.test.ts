import request from "supertest";
import { app } from "../../app";

it("respond with details about current user", async () => {
  const authResponse = await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test123.com",
      password: "password"
    })
    .expect(201);

  const cookie = authResponse.get("Set-Cookie");

  const response = await await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  expect(response.body.currentUser.email).toEqual("test@test123.com");
});
