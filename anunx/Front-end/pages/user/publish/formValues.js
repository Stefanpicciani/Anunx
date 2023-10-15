import *  as yup from 'yup';


const initialValues = {
    title: '',
    category: '',
    description: '',
    price: '',
    email: '',
    name: '',
    phone: '',
    files: [],
}

const validationSchema = yup.object().shape({
    title: yup.string()
        .min(6, 'Digite no mínimo 6 caracteres!')
        .max(100, 'Valor máximo de 100 caracteres!')
        .required('Campo obrigatório!'),
    category: yup.string()
        .required('Campo obrigatório!'),    
    description: yup.string()
        .min(50, 'Descrição mínima de 50 caracteres')
        .max(1000, "Descrição máxima de 1000 caracteres")
        .required('Campo obrigatório!'),
    price: yup.number()
        .required('Campo obrigatório!'),
    email: yup.string()
        .email('Digite um e-mail válido')
        .required('Campo obrigatório!'),
    name: yup.string()
        .required('Campo obrigatório!'),
    phone: yup.number()
        .required('Campo obrigatório!'),
    files: yup.array()
        .min(1, 'Obrigatório ao menos uma foto!')
        .required('Campo obrigatório!'),

});

export {
    initialValues,
    validationSchema,
}