const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (user) {
            return res.json({ message: "Usuário já existe." });
        }

        user = await User.create({ email });

        return res.json(user);
    },
};