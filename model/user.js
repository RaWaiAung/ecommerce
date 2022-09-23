import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt'
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});

userSchema.methods.matchPassword = async function (enterpassword) {
    return await bcrypt.compare(enterpassword, this.password);
}

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hashSync(this.password, 10);
})
const User = new model('User', userSchema);
export default User;