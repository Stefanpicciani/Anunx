import axios from 'axios';
import {
    Box, 
    Paper,
    Container,
    Typography,
    Input,
    InputLabel,
    FormControl,
    FormHelperText,
    Button,
    CircularProgress,
} from '@mui/material';
import styles from  './index.module.css';
import { Formik } from 'formik';
import { initialValues, validationSchema } from './formValues';
import TemplateDefault from '../../../src/templates/Default';
import useToasty from  '../../../src/contexts/Toasty'
import { useRouter } from 'next/router'


const Signup = () => {
    const { setToasty} = useToasty()
    const router = useRouter()

    const handleFormSubmit = async values => {
        const response = await axios.post('/api/users', values)
        
        if((await response).data.success)
        {
           setToasty({
            open: true,
            severity: 'success',
            text: 'Cadastro realizado com sucesso!'
           })

           router.push('/auth/signin')
        }
    }

    return(
        <TemplateDefault>
            <Container maxWidth='sm' component='main' className={styles.container}>
                <Typography component="h1" variant="h2" align='center' color="textPrimary">
                    Crie sua conta
                </Typography>     
                <Typography component="h5" variant="h5" align='center' color="TextPrimary">
                    E anuncie para todo o Brasil
                </Typography>           
            </Container>
            <Container maxWidth="md">
                <Box>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {
                            ({
                                touched,
                                values,
                                errors,
                                handleChange, 
                                handleSubmit,                     
                                isSubmitting,         
                            }) => {
                                return (
                                    <form className={styles.box} onSubmit={handleSubmit}>
                                         <FormControl fullWidth error={errors.name  && touched.name} className={styles.formControl}>
                                            <InputLabel  variant="standard">Nome</InputLabel>
                                            <Input
                                                name="name"
                                                value={values.name}                                               
                                                onChange={handleChange}                                                                                                           
                                            />
                                            <FormHelperText  variant='standard'>
                                               {errors.name && touched.name ? errors.name : null}
                                            </FormHelperText>  
                                        </FormControl>

                                        <FormControl fullWidth error={errors.email  && touched.email}  className={styles.formControl}>  
                                            <InputLabel  variant="standard">E-mail</InputLabel>
                                            <Input
                                                name="email"
                                                type="email"
                                                value={values.email}
                                                onChange={handleChange}                                                                                                           
                                            />
                                            <FormHelperText  variant='standard'>
                                                {errors.email && touched.email ? errors.email : null}
                                            </FormHelperText>  
                                        </FormControl>

                                        <FormControl fullWidth error={errors.password  && touched.password} className={styles.formControl}> 
                                            <InputLabel  variant="standard">Senha</InputLabel>
                                            <Input
                                                name="password"
                                                type="password"
                                                value={values.password}
                                                autoComplete='off'
                                                onChange={handleChange}                                                                                                           
                                            />
                                            <FormHelperText  variant='standard'>
                                                {errors.password && touched.password ? errors.password : null}
                                            </FormHelperText>  
                                        </FormControl>

                                        <FormControl fullWidth error={errors.passwordConf  && touched.passwordConf} className={styles.formControl}> 
                                            <InputLabel  variant="standard">Confirmação de Senha</InputLabel>
                                            <Input
                                                name="passwordConf"
                                                type="password"
                                                value={values.passwordConf}
                                                onChange={handleChange}                                                                                                           
                                            />
                                            <FormHelperText  variant='standard' color="error">
                                                {errors.passwordConf && touched.passwordConf ? errors.passwordConf : null}
                                            </FormHelperText>  
                                        </FormControl>

                                        <Container align='center' className={styles.containerButton}>
                                        {
                                            isSubmitting 
                                            ? (
                                                <CircularProgress className={styles.loading}/>
                                            ) : (
                                            
                                                <Button
                                                fullWidth
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                className={styles.submit}
                                                align='left'
                                                // disabled={isSubmiting}
                                                >
                                                Criar conta
                                            </Button>
                                            )
                                        }
                                        </Container>
                                    </form>
                                )
                            }
                        }
                    </Formik>
                </Box>
            </Container>
        </TemplateDefault>
    );
}

export default Signup