const request = require("supertest");
const app = require("../app");

describe("tasks", () => {
    // test("create", async () => {
    //   await request(app)
    //   .post("/tasks/new")
    //   .set(
    //     "Authorization",
    //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk5Mzg1NjY5LCJleHAiOjE2OTkzODkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCc"
    //   )
    //   .send({
    //     title:"jantar"
    //   })
    //   .expect(201)
    // });

    // test("listAll", async () => {
    //     await request(app)
    //     .get("/tasks/")
    //     .set(
    //       "Authorization",
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk5Mzg1NjY5LCJleHAiOjE2OTkzODkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCc"
    //     )
    //     // .expect((res)=>{
    //     //     console.log(res.body)
    //     // })
    //     .expect(200)
    // });

    // test("list - Done", async () => {
    //     await request(app)
    //     .get("/tasks/done")
    //     .set(
    //       "Authorization",
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk5Mzg1NjY5LCJleHAiOjE2OTkzODkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCc"
    //     )
    //     // .expect((res)=>{
    //     //     console.log(res.body)
    //     // })
    //     .expect(200)
    // });

    // test("list - ToDo", async () => {
    //     await request(app)
    //     .get("/tasks/to-do")
    //     .set(
    //       "Authorization",
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk5Mzg1NjY5LCJleHAiOjE2OTkzODkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCc"
    //     )
    //     // .expect((res)=>{
    //     //     console.log(res.body)
    //     // })
    //     .expect(200)
    // });

    // test("edit", async () => {
    //     await request(app)
    //     .put("/tasks/edit/1")
    //     .set(
    //       "Authorization",
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk5Mzg1NjY5LCJleHAiOjE2OTkzODkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCcDkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCc"
    //     )
    //     .send({
    //         title:'pegar o onibus 17:30'
    //     })
    //     .expect(200)
    // });

    // test("detail", async () => {
    //     await request(app)
    //     .get("/tasks/2")
    //     .set(
    //       "Authorization",
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk5Mzg1NjY5LCJleHAiOjE2OTkzODkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCcDkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCc"
    //     )
    //     .expect(200)
    //     .expect((res)=>{
    //         console.log(res.body);
    //     })
    // });

    // test("delete", async () => {
    //     await request(app)
    //     .delete("/tasks/trash/24")
    //     .set(
    //       "Authorization",
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk5Mzg1NjY5LCJleHAiOjE2OTkzODkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCcDkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCc"
    //     )
    //     .expect(200)
    //     .expect((res)=>{
    //         console.log(res.body);
    //     })
    // });

    // test("change the status", async () => {
    //     await request(app)
    //     .put("/tasks/1/check")
    //     .set(
    //       "Authorization",
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk5Mzg1NjY5LCJleHAiOjE2OTkzODkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCcDkyNjl9.h429Xag4V2jB3NpjfLezaMe7suVE-29eYPnemtk3jCc"
    //     )
    //     .expect(200)
    // });
})

