import { model , Schema} from 'mongoose';
const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    }
});

const Category = new model('Category', categorySchema);
export default Category;