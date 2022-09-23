import bcrypt from 'bcrypt';

const user = [
    {
        name: "Admin",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456", 12),
        isAdmin: true
    },
    {
        name: "User",
        email: "user@example.com",
        password: bcrypt.hashSync("123456", 10)
    }
];

export default user;