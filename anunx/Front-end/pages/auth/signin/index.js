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


const Signin = () => {
    const { setToasty} = useToasty()
    const router = useRouter()

    const handleFormSubmit = async values => {
        
    }

    return(
        <TemplateDefault>
            <Container maxWidth='sm' component='main' className={styles.container}>
                <Typography component="h1" variant="h2" align='center' color="textPrimary">
                    Entre na sua conta
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
                                              Entrar
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

export default Signin