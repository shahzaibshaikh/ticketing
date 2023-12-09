import request from "supertest";
import { app } from "../../app";
import { authSignin } from "../../services/authSignin";

it("respond with details about current user", async () => {
  const cookie = await authSignin();

  const response = await await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  expect(response.body.currentUser.email).toEqual("test@test123.com");
});

it("responds with null if not authenticated", async () => {
  const response = await request(app).get("/api/users/currentuser").send().expect(200);

  expect(response.body.currentUser).toEqual(null);
});
