const request = require("supertest");
const app = require("../app");

describe("comments", () => {
    // test("create", async () => {
    //   await request(app)
    //   .post("/tasks/2/comments")
    //   .set(
    //     "Authorization",
    //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk5Mzg1NjY5LCJleHAiOjE2OTkzODkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCcDkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCc"
    //   )
    //   .send({
    //     comment: "estudar estequiometria"
    //   })
    // // .expect((res)=>{
    // //   console.log(res.body);
    // // })
    //   .expect(201)
    // });

    // test("list comments from task", async () => {
    //   await request(app)
    //   .get("/tasks/2/comments")
    //   .set(
    //     "Authorization",
    //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk5Mzg1NjY5LCJleHAiOjE2OTkzODkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCcDkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCc"
    //   )
    //   // .expect((res)=>{
    //   //   console.log(res.body);
    //   // })
    //   .expect(200)
    // });

    // test("list all my comments", async () => {
    //   await request(app)
    //   .get("/my-comments")
    //   .set(
    //     "Authorization",
    //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk5Mzg1NjY5LCJleHAiOjE2OTkzODkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCcDkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCc"
    //   )
    // //   .expect((res)=>{
    // //     console.log(res.body);
    // //   })
    //   .expect(200)
    // });

    // test("delete", async () => {
    //   await request(app)
    //   .delete("/my-comments/1")
    //   .set(
    //     "Authorization",
    //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk5Mzg1NjY5LCJleHAiOjE2OTkzODkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCcDkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCc"
    //   )
    //   .expect(200)
    // });
})