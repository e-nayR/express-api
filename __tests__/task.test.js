const request = require("supertest");
const app = require("../app");

describe("tasks", () => {
    // test("create", async () => {
    //   await request(app)
    //   .post("/tasks/new")
    //   .set(
    //     "Authorization",
    //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY5OTI5NjkwMiwiZXhwIjoxNjk5MzAwNTAyfQ.0ynN6S5gwcjzZN0cSvuimoMF_i297b4VddpHg7icHc8"
    //   )
    //   .send({
    //     title: "varrer a casa",
    //     finished: 1 
    //   })
    //   .expect(201)
    // });

    test("listAll", async () => {
        await request(app)
        .get("/tasks/")
        .set(
          "Authorization",
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY5OTI5NjkwMiwiZXhwIjoxNjk5MzAwNTAyfQ.0ynN6S5gwcjzZN0cSvuimoMF_i297b4VddpHg7icHc8"
        )
        // .expect((res)=>{
        //     console.log(res.body)
        // })
        .expect(200)
    });

    test("list - Done", async () => {
        await request(app)
        .get("/tasks/done")
        .set(
          "Authorization",
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY5OTI5NjkwMiwiZXhwIjoxNjk5MzAwNTAyfQ.0ynN6S5gwcjzZN0cSvuimoMF_i297b4VddpHg7icHc8"
        )
        // .expect((res)=>{
        //     console.log(res.body)
        // })
        .expect(200)
    });

    test("list - ToDo", async () => {
        await request(app)
        .get("/tasks/to-do")
        .set(
          "Authorization",
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY5OTI5NjkwMiwiZXhwIjoxNjk5MzAwNTAyfQ.0ynN6S5gwcjzZN0cSvuimoMF_i297b4VddpHg7icHc8"
        )
        // .expect((res)=>{
        //     console.log(res.body)
        // })
        .expect(200)
    });

    // test("edit", async () => {
    //     await request(app)
    //     .put("/tasks/edit/23")
    //     .set(
    //       "Authorization",
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY5OTI5NjkwMiwiZXhwIjoxNjk5MzAwNTAyfQ.0ynN6S5gwcjzZN0cSvuimoMF_i297b4VddpHg7icHc8"
    //     )
    //     .send({
    //         title:'fazer as compras do mês'
    //     })
    //     .expect(200)
    // });

    // test("detail", async () => {
    //     await request(app)
    //     .get("/tasks/23")
    //     .set(
    //       "Authorization",
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY5OTI5NjkwMiwiZXhwIjoxNjk5MzAwNTAyfQ.0ynN6S5gwcjzZN0cSvuimoMF_i297b4VddpHg7icHc8"
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
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY5OTI5NjkwMiwiZXhwIjoxNjk5MzAwNTAyfQ.0ynN6S5gwcjzZN0cSvuimoMF_i297b4VddpHg7icHc8"
    //     )
    //     .expect(200)
    //     .expect((res)=>{
    //         console.log(res.body);
    //     })
    // });

    // test("change the status", async () => {
    //     await request(app)
    //     .put("/tasks/23/check")
    //     .set(
    //       "Authorization",
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY5OTI5NjkwMiwiZXhwIjoxNjk5MzAwNTAyfQ.0ynN6S5gwcjzZN0cSvuimoMF_i297b4VddpHg7icHc8"
    //     )
    //     .expect(200)
    //     .expect((res)=>{
    //         console.log(res.body);
    //     })
    // });
})

