const request = require("supertest");
const app = require("../app");

describe("users", () => {
  // test("create", async () => {
  //   const res = await request(app).post("/").send({
  //     name: "",
  //     email: "@gmail.com",
  //     password: "123",
  //   });
  //   console.log(res.body)
  //   expect(res.statusCode).toBe(201);
  // });
  
  // test("listAll", async () => {
  //   const res = await request(app)
  //     .get("/")
  //     .set(
  //       "Authorization",
  //       "Bearer "
  //     );
  //   //console.log(res);
  //   expect(res.statusCode).toBe(200);
  // });

  // test("detail", async () => {
  //   await request(app)
  //     .get("/user")
  //     .set(
  //       "Authorization",
  //       "Bearer ")
  //     .expect(200)
  //     .expect(function (res) {
  //       console.log(res.body); 
  //     });
  // });

  // test("update", async () => {
  //   const res = await request(app)
  //     .put("/user")
  //     .send({
  //       name: "",
  //     })
  //     .set(
  //       "Authorization",
  //       "Bearer "
  //     );
  //   expect(res.statusCode).toBe(200);
  // });

  // test("delete", async () => {
  //   await request(app)
  //     .delete("/user")
  //     .set(
  //       "Authorization",
  //       "Bearer ")
  //     .expect(200)
  //     .expect(function (res) {
  //       console.log(res.body); 
  //     });
  // });
});

describe('recuperar senha', ()=>{
  //   test("forgot-pass", async () => {
  //     await request(app)
  //       .post("/user/forget-password")
  //       .send({
  //         email: "mandy@gmail.com"
  //       })
  //       .expect(function (res) {
  //         console.log(res.body); 
  //       })
  //       .expect(200)
  //   });
  
    // test("new-pass", async () => {
    //   await request(app)
    //     .put("/user/new-password")
    //     .send({
    //       email: "mandy@gmail.com",
    //       token: "2108b7521db",
    //       password: "123",
    //     })
    //     .expect(200)
    // });
  })


