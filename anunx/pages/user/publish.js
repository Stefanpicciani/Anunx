import { useState } from "react";
import TemplateDefault from "../../src/templates/Default"
import styles  from "./publish.module.css";
import { Formik } from "formik";
import *  as yup from 'yup';

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
    OutlinedInput, 
    InputAdornment,
    Input} from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import { useDropzone } from "react-dropzone";


const validationSchema = yup.object().shape({
    title: yup.string()
        .min(6, 'Digite no mínimo 6 caracteres!')
        .max(100, 'Valor máximo de 100 caracteres!')
        .required('Campo obrigatório!'),

    category: yup.string().required('Campo obrigatório!'),
    
    description: yup.string()
    .min(50, 'Descrição mínima de 50 caracteres')
    .max(1000, "Descrição máxima de 1000 caracteres")
    .required('Campo obrigatório!'),

    price: yup.number().required('Campo obrigatório!'),

    email: yup.string().email('Digite um e-mail válido').required('Campo obrigatório!'),

    name: yup.string().required('Campo obrigatório!'),

    phone: yup.number().required('Campo obrigatório!'),

});



const Publish = () => {   
    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/jpg, image/png',
        onDrop: (acceptedFile) => {
            const newFiles = acceptedFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })

            setFiles([
                ...files,
                ...newFiles,
            ]);
        }
    })

    
    const handleRemoveFile = fileName => {
        const newFileState = files.filter(file => file.name !== fileName)
        setFiles(newFileState);
    }

    return(
        <TemplateDefault>
            <Formik
                initialValues={{
                    title: '',
                    category: '',
                    description: '',
                    price: '',
                    email: '',
                    nome: '',
                    phone: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log('ok enviou o form', values)
                }}
            >
                {
                    ({
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                    }) => {
                        console.log(errors)
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

                                        <FormControl error={errors.title} fullWidth>
                                            <InputLabel className={styles.inputLabel}>Título do anúncio</InputLabel>
                                            <Input
                                                name="title"
                                                value={values.title}
                                                onChange={handleChange}   
                                                labe                                                                                                        
                                            />
                                            <FormHelperText>
                                                {errors.title}
                                            </FormHelperText>  
                                        </FormControl>

                                        <br /><br />

                                        <FormControl error={errors.category} fullWidth>
                                            <InputLabel className={styles.inputLabel}>Categoria</InputLabel>
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
                                            <FormHelperText>
                                                {errors.category}                                               
                                            </FormHelperText>     
                                        </FormControl>                                                  
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={styles.boxContainer}>
                                    <Box className={styles.box}>

                                        <Typography component="h6" variant="h6" align="left" color="primary">
                                            Imagens
                                        </Typography> 

                                        <Typography component="div" variant="body2" align="left" color="primary">
                                            A primeira imagem é a foto principal do seu anúncio!
                                        </Typography> 

                                        <Box className={styles.thumbsContainer}>
                                            <Box className={styles.dropzone} {...getRootProps()}>
                                                <input {...getInputProps()}/>
                                                <Typography variant="body2" color="textPrimary">
                                                    Clique para adicionar ou arraste a imagem para aqui.
                                                </Typography>
                                            </Box>       

                                            {
                                                files.map((file, index) =>(
                                                    <Box
                                                    key={file.name}
                                                    className={styles.thumb}
                                                    style={{ backgroundImage : `url(${file.preview})`}}
                                                >      
                                                    {
                                                        index === 0 ? 
                                                        <Box className={styles.mainImage}>
                                                            <Typography variant="body2" color="secondary">
                                                                Principal
                                                            </Typography>
                                                        </Box>
                                                    
                                                    : null
                                                    }
                                                    <Box className={styles.mask}>
                                                            <IconButton color="secondary" onClick={() => handleRemoveFile(file.name)}>
                                                                <DeleteForever fontSize="large"/>
                                                            </IconButton>
                                                        </Box> 
                                                    </Box>       
                                                ))
                                            }                                   
                                        </Box>                                    
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={styles.boxContainer}>
                                     <Box className={styles.box}>
                                        <Typography component="h6" variant="h6" align="left" color="primary">
                                            Descrição
                                        </Typography> 
                                        <Typography component="div" variant="body2" align="left" color="primary">
                                            Escreva os detalhes do que está vendendo!
                                        </Typography> 
                                        <TextField 
                                            name="description"
                                            multiline
                                            rows={6}
                                            fullWidth
                                            variant="outlined"
                                            onChange={handleChange}
                                        />
                                        <FormHelperText className={styles.errorForm}>
                                                {errors.description}
                                        </FormHelperText>  
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={styles.boxContainer}>
                                    <Box className={styles.box}>
                                    <FormControl error={errors.price} fullWidth>
                                            <InputLabel className={styles.inputLabel}>Preço de venda</InputLabel>
                                            <Input 
                                                name="price"
                                                rows={6}                                               
                                                variant="outlined"      
                                                onChange={handleChange}
                                                startAdornment={ <InputAdornment position="start">€</InputAdornment>}
                                            />
                                             <FormHelperText>
                                                {errors.price}
                                            </FormHelperText>  
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={styles.boxContainer}>
                                    <Box className={styles.box}>
                                        <Typography component="h6" variant="h6" align="left" color="primary" gutterBottom>
                                        Dados de contato
                                        </Typography> 

                                        <FormControl error={errors.name} fullWidth>
                                            <InputLabel className={styles.inputLabel}>Nome</InputLabel>
                                            <Input
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}                                                                                                           
                                            />
                                            <FormHelperText>
                                                {errors.name}
                                            </FormHelperText>  
                                        </FormControl>

                                        <br/> <br/>

                                        <FormControl error={errors.email} fullWidth> 
                                            <InputLabel className={styles.inputLabel}>E-mail</InputLabel>
                                            <Input
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}                                                                                                           
                                            />
                                            <FormHelperText>
                                                {errors.email}
                                            </FormHelperText>  
                                        </FormControl>


                                        <br/> <br/>

                                        <FormControl error={errors.phone} fullWidth> 
                                            <InputLabel className={styles.inputLabel}>Telefone</InputLabel>
                                            <Input
                                                name="phone"
                                                value={values.phone}
                                                onChange={handleChange}                                                                                                           
                                            />
                                            <FormHelperText>
                                                {errors.phone}
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

