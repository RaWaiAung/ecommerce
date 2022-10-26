import Product from '../model/product.js';
import Category from '../model/category.js';

export const getAllProduct = async (req, res) => {
    try {
        const productList = await Product.find();
        res.status(200).json({
            status: 'success',
            result: productList.length,
            data: productList
        })

    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
};

export const createProduct = async (req, res) => {
    // const category = await Category.findById(req.body.category);
    // if(!category){
    //     return res.status(400).send('Invalid Category');
    // } category: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Category',
    //     required: true
    // },
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        brand: req.body.brand,
        price: req.body.price,
        // category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured
    });

     product = await Product.save();

    if (!product) {
       return res.status(500).send('The product cannot created');
    }
    res.status(200).json({
        status: 'success',
        data: {
            product
        }
    })
};

export const singleProduct = async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        res.status(500).json({ message: 'This category id was not found' })
    }
    res.status(200).json({
        status: 'success',
        data: {
            category
        }
    })
};

export const deleteProduct = async (req, res) => {
    try {
        const category = await Category.findByIdandRemove(req.params.id);
        if (category) {
            res.status(200).json({
                status: 'success',
                message: 'The category has been removed'
            })
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'The category not found'
            })
        }
    } catch (err) {
        res.json(400).json({
            status: 'fail',
            error: err
        })
    }
};

export const updateProduct = async (req, res) => {
    try {
        const category = await Category.findByIdandUpdate(req.params.id, {
            name: req.body.name,
            icon: req.body.icon,
            image: req.body.image
        }, { new: true });
        if (category) {
            res.status(200).json({
                status: 'success',
                data: {
                    category
                }
            })
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'Category updated fail'
            })
        }
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            error: err
        })
    }
};