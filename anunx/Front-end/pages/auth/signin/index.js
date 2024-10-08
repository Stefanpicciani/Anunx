import axios from 'axios';
import { signIn, useSession  } from  'next-auth/client';
import Image from 'next/image'
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
    Alert,
} from '@mui/material';
import styles from  './index.module.css';
import { Formik } from 'formik';
import { initialValues, validationSchema } from './formValues';
import TemplateDefault from '../../../src/templates/Default';
import useToasty from  '../../../src/contexts/Toasty'
import { useRouter } from 'next/router'


const Signin = ({ APP_URL }) => {
    const { setToasty} = useToasty()
    const router = useRouter()
    const [ session ] = useSession()

        console.log(session, router.query.i)

    const handleFormSubmit = values => {
        signIn('credentials', {
            email: values.email,
            password: values.password,
            callbackUrl: `${APP_URL}/user/dashboard`
        })
    }

    const handleGoogleLogin = () =>{
        signIn('google', {
            callbackUrl: `${APP_URL}/user/dashboard`
        })
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
                                        {
                                            router.query.i === '1'
                                                ? (
                                                    <Alert severity="error" className={styles.errorMessage}>
                                                        Usuário ou senha inválidos
                                                    </Alert>
                                                )
                                                : null
                                        }
                                        <Box display="flex" justifyContent="center">
                                            <Button
                                                variant='contained'
                                                color='primary'
                                                startIcon={
                                                    <Image 
                                                        src="/images/logo_google.svg" 
                                                        width={20} 
                                                        height={20}
                                                        alt="Login com Google"
                                                    />
                                                }
                                                onClick={handleGoogleLogin}
                                            >
                                                Entrar com Google
                                            </Button>
                                        </Box>

                                        <Box className={styles.orSeparator}>
                                            <span>ou</span>
                                        </Box>

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

Signin.getInitialProps = async function() {
    return {
        APP_URL: process.env.APP_URL
    }
}

export default Signin