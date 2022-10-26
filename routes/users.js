import User from '../model/user.js';
import express from 'express';
import generateToken from '../utils/generateToken.js';
import verifyUser from '../utils/verifyUser.js';
import { getUserProfile, signInUser, signUpUser, updateProfile } from '../controller/userController.js';

const userRouter = express.Router();

// userRouter.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (user && (await user.matchPassword(password))) {
//         res.json({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             isAdmin: user.isAdmin,
//             token: generateToken(user._id),
//             createdAt: user.createdAt
//         })
//     } else {
//         res.status(401).send('Invalid email or password')
//     }
// });

// userRouter.post('/register', async (req, res) => {
//     const { name, email, password } = req.body;
//     const userExist = await User.findOne({ email });
//     if (userExist) {
//         res.status(401).send('User already exist')
//     };
//     const user = await User.create({
//         name,
//         email,
//         password
//     });
//     if (user) {
//         res.status(200).json({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             isAdmin: user.isAdmin,
//             token: generateToken(user._id)
//         })
//     } else {
//         res.status(400).send('Invaild user data')
//     }
// });

// userRouter.put('/profile', verifyUser, async (req, res) => {
//     const user = await User.findById(req.user._id);
//     if (user) {
//         user.name = req.body.name || user.name
//         user.email = req.body.email || user.email
//         if (req.body.password) {
//             user.password = req.body.password
//         }
//         const updatedUser = await user.save();
//         res.status(201).json({
//             _id: updatedUser._id,
//             name: updatedUser.name,
//             email: updatedUser.email,
//             isAdmin: updatedUser.isAdmin,
//             token: generateToken(updatedUser._id),
//             createdAt: updatedUser.createdAt
//         })
//     } else {
//         res.status(404).send('User not found')
//     }
// })

// userRouter.get('/profile', verifyUser, async (req, res) => {
//     const user = await User.findById(req.user.id);
//     if (user) {
//         res.json({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             isAdmin: user.isAdmin,
//             createdAt: user.createdAt
//         })
//     } else {
//         res.status(404).send('User not found')
//     }
// })

userRouter.route('/login').post(signInUser);
userRouter.route('/register').post(signUpUser);
userRouter.route('/profile').patch(updateProfile).get(getUserProfile);
export default userRouter;