import express from 'express'
import verifyToken from '../middlewares/verifyToken.js'
import forms from '../controllers/forms.js';

const router = express.Router();


router.get('/',forms.getForms)

router.delete('/delete/:formId',forms.deleteForm);

router.post('/create',forms.createForm);

router.put('/update/:formId', forms.updateForm);

router.get('/public/:id', forms.getOneForm);

router.post('/submit/:id', forms.submitForm);

router.get('/submissions/:id',forms.getSubmittedForm);

export default router
