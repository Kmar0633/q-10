import express from "express";
import user from "./handlers/user.js";
import validateHeaders from "./middlewares/validateUser.js";


const router = express.Router();

router.get("/user/getData", validateHeaders,user.get);
router.post("/user/postData", validateHeaders, user.post);

export default router;
