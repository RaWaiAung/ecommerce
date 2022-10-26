import express from 'express';
import { createCategory, deleteCategory, getAllCategory, updateCategory } from '../controller/categoryController.js';

const categoryRoute = express.Router();

// router.get('/', async (req, res) => {
//     try {
//         const categoryList = await Category.find();
//         res.status(200).json({
//             status: 'success',
//             result: categoryList.length,
//             data: categoryList
//         })

//     } catch (error) {
//         res.status(404).json({
//             status: 'fail',
//             message: error
//         })
//     }
// });

// router.post(`/`, async (req, res) => {
//     const category = new Category(req.body);

//     const savCategory = await category.save();

//     if (!savCategory) {
//         res.status(404).send('The category cannot created');
//     }
//     res.status(200).json({
//         status: 'success',
//         data: {
//             savCategory
//         }
//     })
// });

// router.get('/:id', async (req, res) => {
//     const category = await Category.findById(req.params.id);
//     if (!category) {
//         res.status(500).json({ message: 'This category id was not found' })
//     }
//     res.status(200).json({
//         status: 'success',
//         data: {
//             category
//         }
//     })
// });

// router.delete('/:id', async (req, res) => {
//     try {
//         const category = await Category.findByIdandRemove(req.params.id);
//         if (category) {
//             res.status(200).json({
//                 status: 'success',
//                 message: 'The category has been removed'
//             })
//         } else {
//             res.status(404).json({
//                 status: 'fail',
//                 message: 'The category not found'
//             })
//         }
//     } catch (err) {
//         res.json(400).json({
//             status: 'fail',
//             error: err
//         })
//     }
// });

// router.put('/:id', async (req, res) => {
//     try {
//         const category = await Category.findByIdandUpdate(req.params.id, {
//             name: req.body.name,
//             icon: req.body.icon,
//             image: req.body.image
//         }, { new: true });
//         if (category) {
//             res.status(200).json({
//                 status: 'success',
//                 data: {
//                     category
//                 }
//             })
//         } else {
//             res.status(404).json({
//                 status: 'fail',
//                 message: 'Category updated fail'
//             })
//         }
//     } catch (err) {
//         res.status(400).json({
//             status: 'fail',
//             error: err
//         })
//     }
// })
categoryRoute.route('/').get(getAllCategory).post(createCategory);
categoryRoute.route('/:id').delete(deleteCategory).patch(updateCategory);


export default categoryRoute;
;