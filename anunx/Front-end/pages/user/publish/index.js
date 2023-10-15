import TemplateDefault from "../../../src/templates/Default"
import styles  from "./publish.module.css";
import { Formik } from "formik";
import { initialValues, validationSchema } from "./formValues";
import {
    Container,
    Typography,
    Box,
    TextField,
    Select,
    Button,
    MenuItem,
    IconButton, 
    FormControl,
    FormHelperText,
    InputLabel,
    InputAdornment,
    Input} from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import FileUpload from "@/src/components/FileUpload/FileUpload";







const Publish = () => {   
    

    return(
        <TemplateDefault>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log('ok enviou o form', values)
                }}
            >
                {
                    ({
                        touched,
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                    }) => {                       

                        return(
                            <form  onSubmit={handleSubmit}>
                                <Container maxWidth="sm" className={styles.boxContainer}>
                                    <Typography component="h1" variant="h2" align="center" color="primary">
                                        Públicar anúncio
                                    </Typography>
                                    <Typography component="h5" variant="h5" align="center" color="primary">
                                        Quanto mais melhor
                                    </Typography>
                                </Container>
                            
                                <Container maxWidth="md" className={styles.boxContainer}>
                                    <Box className={styles.box}>

                                        <FormControl error={errors.title && touched.title} fullWidth>
                                            <InputLabel className={styles.inputLabel} variant="standard">Título do anúncio</InputLabel>
                                            <Input
                                                name="title"
                                                value={values.title}
                                                onChange={handleChange}   
                                                labe                                                                                                        
                                            />
                                            <FormHelperText  variant='standard'>
                                                {errors.title && touched.title ? errors.title : null}
                                            </FormHelperText>  
                                        </FormControl>

                                        <br /><br />

                                        <FormControl error={errors.category  && touched.category} fullWidth>
                                            <InputLabel className={styles.inputLabel} variant="standard">Categoria</InputLabel>
                                            <Select
                                                name="category"
                                                value={values.category}
                                                fullWidth
                                                variant="standard"
                                                placeholder="Selecione"                                       
                                                onChange={handleChange}     
                                            >   
                                                <MenuItem value="" selected><em>Selecione</em></MenuItem>
                                                <MenuItem value="Bebê e Criança">Bebê e Criança</MenuItem>
                                                <MenuItem value="Agricultura">Agricultura</MenuItem>
                                                <MenuItem value="Moda">Moda</MenuItem>
                                                <MenuItem value="Carros, Motos e Barcos">Carros, Motos e Barcos</MenuItem>
                                                <MenuItem value="Serviços">Serviços</MenuItem>
                                                <MenuItem value="Lazer">Lazer</MenuItem>
                                                <MenuItem value="Animais">Animais</MenuItem>
                                                <MenuItem value="Moveis, Casa e Jardim">Moveis, Casa e Jardim</MenuItem>
                                                <MenuItem value="Imóveis">Imóveis</MenuItem>
                                                <MenuItem value="Equipamentos e Ferramentas">Equipamentos e Ferramentas</MenuItem>
                                                <MenuItem value="Celulares e Tablets">Celulares e Tablets</MenuItem>
                                                <MenuItem value="Esporte">Esporte</MenuItem>
                                                <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                                                <MenuItem value="Emprego">Emprego</MenuItem>
                                                <MenuItem value="Outros">Outros</MenuItem>
                                            </Select>   
                                            <FormHelperText  variant='standard'>
                                                {errors.category && touched.category ? errors.category : null}                                    
                                            </FormHelperText>     
                                        </FormControl>                                                  
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={styles.boxContainer}>
                                    <Box className={styles.box}>
                                        <FileUpload 
                                         files={values.files}
                                         errors={errors.files}
                                         touched={touched.files}
                                         setFieldValue={setFieldValue}
                                        />
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={styles.boxContainer}>
                                     <Box className={styles.box}>
                                        <Typography component="h6" variant="h6" align="left" color="textPrimary">
                                            Descrição
                                        </Typography> 
                                        <Typography component="div" variant="body2" align="left" color="textPrimary">
                                            Escreva os detalhes do que está vendendo!
                                        </Typography> <br/>
                                        <TextField 
                                            name="description"
                                            multiline
                                            rows={6}
                                            fullWidth
                                            variant="outlined"
                                            onChange={handleChange}
                                        />
                                        {
                                            errors.description && touched.description
                                            ?  <Typography variant="body2" color="error"  gutterBottom>{errors.description}</Typography>
                                            : null
                                        } 
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={styles.boxContainer}>
                                    <Box className={styles.box}>
                                    <FormControl error={errors.price  && touched.price} fullWidth>
                                            <InputLabel className={styles.inputLabel} variant="standard">Preço de venda</InputLabel>
                                            <Input 
                                                name="price"
                                                rows={6}                                               
                                                variant="outlined"      
                                                onChange={handleChange}
                                                startAdornment={ <InputAdornment position="start">€</InputAdornment>}
                                            />
                                             <FormHelperText  variant='standard'>
                                                {errors.price && touched.price ? errors.price : null}
                                            </FormHelperText>  
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={styles.boxContainer}>
                                    <Box className={styles.box}>
                                        <Typography component="h6" variant="h6" align="left" color="primary" gutterBottom>
                                            Dados de contato
                                        </Typography> 

                                        <FormControl error={errors.name  && touched.name} fullWidth>
                                            <InputLabel className={styles.inputLabel} variant="standard">Nome</InputLabel>
                                            <Input
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}                                                                                                           
                                            />
                                            <FormHelperText  variant='standard'>
                                               {errors.name && touched.name ? errors.name : null}
                                            </FormHelperText>  
                                        </FormControl>

                                        <br/> <br/>

                                        <FormControl error={errors.email  && touched.email} fullWidth> 
                                            <InputLabel className={styles.inputLabel} variant="standard">E-mail</InputLabel>
                                            <Input
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}                                                                                                           
                                            />
                                            <FormHelperText  variant='standard'>
                                                {errors.email && touched.email ? errors.email : null}
                                            </FormHelperText>  
                                        </FormControl>


                                        <br/> <br/>

                                        <FormControl error={errors.phone  && touched.phone} fullWidth> 
                                            <InputLabel className={styles.inputLabel} variant="standard">Telefone</InputLabel>
                                            <Input
                                                name="phone"
                                                value={values.phone}
                                                onChange={handleChange}                                                                                                           
                                            />
                                            <FormHelperText  variant='standard'>
                                                {errors.phone && touched.phone ? errors.phone : null}
                                            </FormHelperText>  
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={styles.boxContainer}>
                                    <Box textAlign="right">
                                        <Button type="submit" variant="contained" color="primary">
                                            Públicar anúncio
                                        </Button>
                                    </Box>
                                </Container>
                            </form>
                        )
                    }
                }
            </Formik>           
        </TemplateDefault>
    );
}

export default Publish

