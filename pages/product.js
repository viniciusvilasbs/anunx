
import {
    Avatar,
    Box,
    Card,
    CardHeader,
    CardMedia,
    Chip,
    Container,
    Grid,
    Typography
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import Carousel from 'react-material-ui-carousel'


import TemplateDefault from '../src/templates/Default'


const useStyles = makeStyles((theme) => ({
    box:{
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    productName:{
        margin: '15px 0',
    },
    price:{
        fontWeight: 'bold',
        marginBottom: 15,
    },
    card:{
        height: '100%',
    },
    cardMedia:{
        paddingTop: '56%',
    },
}))


const Product = () => {
    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box className={classes.box}>
                            <Carousel
                                autoPlay={false}
                                animation="slide"
                                navButtonsAlwaysVisible={true}
                                navButtonsProps={{
                                    style:{
                                        color: 'white',
                                    }
                                }}
                            >
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random?a=1"
                                        title="Título da imagem"
                                    />
                                </Card>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random?a=2"
                                        title="Título da imagem"
                                    />
                                </Card>
                            </Carousel>
                        </Box>
                        <Box className={classes.box} textAlign="left">
                            <Typography component="span" variant="caption">Publicado 16 de Junho de 2021</Typography>
                            <Typography component="h4" variant="h4" className={classes.productName}>Jaguar XE 2.0 D R-Sport Aut.</Typography>
                            <Typography component="h4" variant="h4" className={classes.price}>R$50.000,00</Typography>
                            <Chip label="categoria" />
                        </Box>
                        <Box className={classes.box} textAlign="left">
                            <Typography component="h6" variant="h6">Descrição</Typography>
                            <Typography component="p" variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum accumsan turpis ut suscipit. Nulla non pretium tellus. Sed sit amet turpis porta, eleifend arcu pulvinar, ullamcorper leo. Mauris sapien lorem, ornare imperdiet ante a, congue interdum velit. Sed congue malesuada ligula, eget laoreet erat. Praesent dapibus eleifend ex non ornare. Aenean et rhoncus neque, at auctor est. Curabitur varius elit eu velit mattis facilisis ut ut leo. In hac habitasse platea dictumst. Sed ac egestas nibh, ultrices dapibus nisl. Pellentesque sagittis ipsum congue risus porttitor auctor id sed lectus. Nulla dignissim augue id porttitor accumsan.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Card elevation={0} className={classes.box}>
                            <CardHeader
                                avatar={
                                    <Avatar>V</Avatar>
                                }
                                title="Vinícius Vilas Boas"
                                subheader="viny@gmail.com"
                            />
                            <CardMedia
                                image="https://source.unsplash.com/random"
                                title="Vinícius Vilas Boas"
                            />
                        </Card>
                        <Box className={classes.box}>
                            <Typography component="h6" variant="h6">
                                Localização
                            </Typography>
                        </Box>
                    </Grid> 
                </Grid>
            </Container>
        </TemplateDefault>

    )
}

export default Product