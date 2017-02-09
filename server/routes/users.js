import express from 'express';
import validateInput from '../shared/validations/signup';
import bcrypt from 'bcrypt';

import User from '../models/user';

const router = express.Router();

router.post('/', (req, res) => {
	const {errors, isValid} = validateInput(req.body);

	if (isValid) {
		const {username, password, timezone, email} = req.body;
		const password_digest = bcrypt.hashSync(password, 10);
		console.log('valid');
		User.forge({
			username, timezone, email, password_digest
		}, { hasTimeStamps: true })
			.save()
			.then(user => res.json({ success: true }))
			.catch(err => {
				console.log(err);
				res.status(500).json({ error: err });
			});
	} else {
		res.status(400).json(errors);
	}
});

export default router;