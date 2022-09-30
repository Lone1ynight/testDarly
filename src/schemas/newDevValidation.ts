import * as Yup from 'yup';
import 'yup-phone';

export const newDevValidation = Yup.object({
	name: Yup.string().required(),
	job: Yup.string().required(),
	phoneNumber: Yup.string().phone('UA').required(),
	email: Yup.string().email().required(),
	age: Yup.number().min(18).required(),
});