const request = require("supertest");
const app = require("../app");

describe("comments", () => {
    test("create", async () => {
      await request(app)
      .post("/tasks/22/comments")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY5OTI5NjkwMiwiZXhwIjoxNjk5MzAwNTAyfQ.0ynN6S5gwcjzZN0cSvuimoMF_i297b4VddpHg7icHc8"
      )
      .send({
        comment: ""
      })
    // .expect((res)=>{
    //   console.log(res.body);
    // })
      .expect(201)
    });

    test("list comments from task", async () => {
      await request(app)
      .get("/tasks/22/comments")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY5OTI5NjkwMiwiZXhwIjoxNjk5MzAwNTAyfQ.0ynN6S5gwcjzZN0cSvuimoMF_i297b4VddpHg7icHc8"
      )
    //   .expect((res)=>{
    //     console.log(res.body);
    //   })
      .expect(200)
    });

    test("list all my comments", async () => {
      await request(app)
      .get("/my-comments")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY5OTI5NjkwMiwiZXhwIjoxNjk5MzAwNTAyfQ.0ynN6S5gwcjzZN0cSvuimoMF_i297b4VddpHg7icHc8"
      )
    //   .expect((res)=>{
    //     console.log(res.body);
    //   })
      .expect(200)
    });

    test("delete", async () => {
      await request(app)
      .delete("/my-comments/10")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY5OTI5NjkwMiwiZXhwIjoxNjk5MzAwNTAyfQ.0ynN6S5gwcjzZN0cSvuimoMF_i297b4VddpHg7icHc8"
      )
      .expect((res)=>{
        console.log(res.body);
      })
      .expect(200)
    });
})