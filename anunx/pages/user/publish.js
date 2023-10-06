import { useState } from "react";
import TemplateDefault from "../../src/templates/Default"
import styles  from "./publish.module.css";

import {
    Container,
    Typography,
    Box,
    TextField,
    Select,
    Button,
    MenuItem,
    IconButton } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import { useDropzone } from "react-dropzone";

const Publish = () => {
    const [age, setAge] = useState('');
    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
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

    const handleChangeCategory = (event) => {
      setAge(event.target.value);
    };

    const handleRemoveFile = fileName => {
        const newFileState = files.filter(file => file.name !== fileName)
        setFiles(newFileState);
    }

    return(
        <TemplateDefault>
            <Container maxWidth="sm" className={`${styles.container} ${styles.boxContainer}`}>
                <Typography component="h1" variant="h2" align="center" color="primary">
                    Públicar anúncio
                </Typography>
                <Typography component="h5" variant="h5" align="center" color="primary">
                   Quanto mais melhor
                </Typography>
            </Container>
           
            <Container maxWidth="md" className={styles.boxContainer}>
                <Box className={styles.box}>
                    <Typography component="h6" variant="h6" align="left" color="primary">
                        Título do anúncio
                    </Typography> 
                    <TextField
                        label="ex.: Bicicleta aro 18 com garantia"
                        size="small"
                        variant="standard"
                        fullWidth
                    />
                    <br /><br />
                      <Typography component="h6" variant="h6" color="textPrimary">
                        Categoria
                      </Typography>
                     
                      <Select
                        variant="standard"
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={age}
                        fullWidth
                        onChange={handleChangeCategory}     
                        placeholder="Selecione"                                       
                      >                        
                        <MenuItem value="">
                            <em>Selecione</em></MenuItem>
                        <MenuItem value={1}>Bebê e Criança</MenuItem>
                        <MenuItem value={2}>Agricultura</MenuItem>
                        <MenuItem value={3}>Moda</MenuItem>
                        <MenuItem value={4}>Carros, Motos e Barcos</MenuItem>
                        <MenuItem value={5}>Serviços</MenuItem>
                        <MenuItem value={6}>Lazer</MenuItem>
                        <MenuItem value={7}>Animais</MenuItem>
                        <MenuItem value={8}>Moveis, Casa e Jardim</MenuItem>
                        <MenuItem value={9}>Imóveis</MenuItem>
                        <MenuItem value={10}>Equipamentos e Ferramentas</MenuItem>
                        <MenuItem value={11}>Celulares e Tablets</MenuItem>
                        <MenuItem value={12}>Esporte</MenuItem>
                        <MenuItem value={13}>Tecnologia</MenuItem>
                        <MenuItem value={14}>Emprego</MenuItem>
                        <MenuItem value={15}>Outros</MenuItem>
                      </Select>                  
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
                        multiline
                        rows={6}
                        fullWidth
                        variant="outlined"
                    />
                </Box>
            </Container>

            <Container maxWidth="md" className={styles.boxContainer}>
                <Box className={styles.box}>
                    <Typography component="h6" variant="h6" align="left" color="primary" gutterBottom>
                      Dados de contato
                    </Typography> 
                    <TextField 
                        label="Nome"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br/> <br/>
                    <TextField 
                        label="Email"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br/> <br/>
                    <TextField 
                        label="Telefone"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                </Box>
            </Container>

            <Container maxWidth="md" className={styles.boxContainer}>
                <Box textAlign="right">
                   <Button variant="contained" color="primary">Públicar anúncio</Button>
                </Box>
            </Container>
        </TemplateDefault>
    );
}

export default Publish

