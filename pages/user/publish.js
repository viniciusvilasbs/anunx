import { useState } from 'react'
import {Formik} from 'formik'
import * as yup from 'yup'

import {
    Box,
    Container,
    TextField,
    Typography,
    Select,
    Button,
    IconButton,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    MenuItem,
    FormHelperText,
    Input,
} from '@material-ui/core'
import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core/styles'
import { DeleteForever } from '@material-ui/icons'

import TemplateDefault from '../../src/templates/Default'


const useStyles = makeStyles((theme) => ({
    mask:{},
    mainImage:{},

    boxContainer:{
        paddingBottom: theme.spacing(3),
    },
    box:{
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
    },
    thumbsContainer:{
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 15,
    },
    inputLabel:{
        fontWeight: 400,
        color: theme.palette.primary.main,
    },
    dropZone:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
        margin: '0 15px 15px 0',
        width: 200,
        height: 150,
        backgroundColor: theme.palette.background.default,
        border: '2px dashed black',
    },
    thumb:{
        position: 'relative',
        width: 200,
        height: 150,
        backgroundSize: 'cover',
        margin: '0 15px 15px 0',
        backgroundPosition: 'center center',

        '& $mainImage':{
            backgroundColor: 'blue',
            padding: '6px 10px',
            position: 'absolute',
            bottom: 0,
            left: 0,
        },

        '&:hover $mask':{
            display: 'flex',
        },

        '& $mask':{
            display: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            width: '100%',
            height: '100%',

        },
    },
}))

const validationSchema = yup.object().shape({
    title: yup.string()
        .min(6, 'Escreva um título maior')
        .max(100, 'Título muito grande')
        .required('Campo obrigatório'),
    
    category: yup.string().required('Campo obrigatório'),
    
    description: yup.string()
        .min(50, 'Escreva uma descrição com pelo menos 50 caracteres')
        .required('Campo obrigatório'),
    
    price: yup.number().required('Campo obrigatório'),

    email: yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),

    name: yup.string().required('Campo obrigatório'),

    phone: yup.number().required('Campo obrigatório'),
})


const Publish = () => {
    const classes = useStyles()
    const [files, setFiles] = useState([])

    const {getRootProps, getInputProps} = useDropzone({
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
            ])
        }
    })

    const handleRemoveFile = fileName => {
        const newFileState = files.filter(file => file.name !== fileName)
        setFiles (newFileState)
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
                    name: '',
                    phone: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log('ok, enviou o form', values)
                }}
            >
                {
                    ({
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                    }) => {
                        return(
                            <form onSubmit={handleSubmit}>
                                <Container maxWidth="sm">
                                    <Typography component="h1" variant="h2" align="center" color="textPrimary">
                                        Publicar Anúncio
                                    </Typography>
                                    <Typography component="h5" variant="h5" align="center" color="textPrimary">
                                        Quanto mais detalhado melhor.
                                    </Typography>
                                </Container>

                                <br /> <br />

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}>

                                        <FormControl error={errors.title} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Título do anúncio</InputLabel>
                                            <Input
                                                name="title"
                                                value={values.title}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.title}
                                            </FormHelperText>
                                        </FormControl>

                                        <br /><br />

                                        <FormControl error={errors.category} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Categoria</InputLabel>
                                            <Select
                                                name="category"
                                                value={values.category}
                                                fullWidth
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="Bebê e criança">Bebê e criança</MenuItem>
                                                <MenuItem value="Agricultura">Agricultura</MenuItem>
                                                <MenuItem value="Moda">Moda</MenuItem>
                                                <MenuItem value="Carro, Moto e Barcos">Carro, Moto e Barcos</MenuItem>
                                                <MenuItem value="Serviços">Serviços</MenuItem>
                                                <MenuItem value="Lazer">Lazer</MenuItem>
                                                <MenuItem value="Móveis, Casa e Jardim">Móveis, Casa e Jardim</MenuItem>
                                                <MenuItem value="Imóveis">Imóveis</MenuItem>
                                                <MenuItem value="Equipamentos e Ferramentas">Equipamentos e Ferramentas</MenuItem>
                                                <MenuItem value="Celulares e Tablets">Celulares e Tablets</MenuItem>
                                                <MenuItem value="Esportes">Esportes</MenuItem>
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

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        <Typography component="h6" variant="h6" color="textPrimary">
                                            Imagens
                                        </Typography>
                                        <Typography component="div" variant="body2" color="textPrimary">
                                            A primeira imagem é a foto principal do seu anúncio.
                                        </Typography>
                                        <Box className={classes.thumbsContainer}>
                                            <Box className={classes.dropZone} {...getRootProps()}>
                                                <input {...getInputProps()}/>
                                                <Typography variant="body2" color="textPrimary">
                                                    Clique para adicionar ou arraste a imagem até aqui.
                                                </Typography>
                                            </Box>
                                            {
                                                files.map((file, index) => (
                                                    <Box
                                                    key={file.name}
                                                    className={classes.thumb}
                                                    style={{backgroundImage: `url(${file.preview})`}}
                                                    >
                                                        {
                                                            index === 0 ?
                                                            <Box className={classes.mainImage}>
                                                                <Typography variant="body2" color="secondary">
                                                                    Principal
                                                                </Typography>
                                                            </Box>
                                                            : null
                                                        }
                                                        <Box className={classes.mask}>
                                                            <IconButton color="secondary" onClick={() =>{
                                                                handleRemoveFile(file.name)
                                                            }}>
                                                                <DeleteForever fontSize="large" />
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        <FormControl error={errors.description} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Descreva seu produto em detalhes.</InputLabel>
                                            <Input
                                                name="description"
                                                multiline
                                                rows={6}
                                                variant="outlined"
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.description}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                    <FormControl error={errors.price} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Preço de venda</InputLabel>
                                            <Input
                                                name="price"
                                                variant="outlined"
                                                onChange={handleChange}
                                                startAdornment = {<InputAdornment position="start">R$</InputAdornment>}
                                            />
                                            <FormHelperText>
                                                {errors.price}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </ Container>

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                                            Dados de contato
                                        </Typography>
                                        <FormControl error={errors.name} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Nome</InputLabel>
                                            <Input
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.name}
                                            </FormHelperText>
                                        </FormControl>
                                        <br/><br/>

                                        <FormControl error={errors.email} fullWidth>
                                            <InputLabel className={classes.inputLabel}>E-mail</InputLabel>
                                            <Input
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.email}
                                            </FormHelperText>
                                        </FormControl>
                                        <br/><br/>

                                        <FormControl error={errors.phone} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Telefone</InputLabel>
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

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box textAlign="right">
                                        <Button type="submit" variant="contained" color="primary">
                                            Publicar anúncio
                                        </Button>
                                    </Box>
                                </Container>
                            </form>
                        )
                    }
                }
            </Formik>
        </TemplateDefault>
    )
}

export default Publish