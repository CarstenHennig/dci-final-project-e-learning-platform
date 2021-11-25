import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { connect } from "./libs/database.js";
import User from "./models/UserProfile.js";
import { messageRules } from "./validation/messageValidation.js";

/** Testing special type of comments for documentation with APIDoc */

//connect NodeJS to database
dotenv.config();
await connect();

//============

const app = express();
app.use(express.json());
app.use(cors());
//===============

// Test server connection
/*  app.use("/", (req,res)=>{
	res.send("Welcome")
	console.log("Backend here!")
})  */
//============

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 * @apiParam {String} test something
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

// Register New User ==

app.post("/register", async (req, res) => {
  const user = await User.register(req.body);

  if (!user) {
    return res.status(400).json({ success: false });
  }

  res.status(201).json({ success: true, user: user });
});

// Login User with password and email
app.post("/login", async (req, res) => {
  const user = await User.login(req.body);

  if (!user) {
    return res.status(400).json({ user });
  }

  // create JWT token
  const token = jwt.sign({ _id: user._id }, process.env.SECRET);

  res.json({ user, token });
  console.log(user);
});

// JWT validation middleware
const checkLogin = (req, res, next) => {
  const rawJWTHeader = req.headers.authorization;

  if (!rawJWTHeader) {
    return res.sendStatus(401);
  }
  const token = rawJWTHeader.slice(7);
  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) {
      console.log("Cannot verify JWT", err.message);
      return res.sendStatus(401);
    }
    next();
  });
};

//REQUEST HAndling Middlewares

const validate = (rules) => {
  const middlewares = rules;
  middlewares.push((req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    res.status(400).json({
      errors: errors.array(),
    });
  });
  return middlewares;
};

// Blog Post endpoint
const messages = ["First!"];
app.post("/message", checkLogin, validate(messageRules), (req, res) => {
  messages.push(req.body.message);
  res.send(messages);
});

// GET USER PROFILE

app.get("/users/:_id", async (req, res) => {
  try {
    let user = await User.findById(req.params._id);
    console.log("USER_PROFILE: ", user);
    const data = user;
    res.status(200);
    return res.send(data);
  } catch (err) {
    res.status(500).json({
      Message: err.message,
    });
  }
});

//==========================

// Final error check middleware
app.use((req, res) => {
  res.status(404);
  res.json({ error: "Resource not found 😥" });
});

app.listen(process.env.PORT, () => {
  console.log("Listening on http://localhost:" + process.env.PORT);
});
