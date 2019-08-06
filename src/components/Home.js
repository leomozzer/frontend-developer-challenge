import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import axios from 'axios'
import {HomeStyles} from '../styles/styles'

export default function Home() {
    const styles = HomeStyles()
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    useEffect(()=> {
        getProducts();
        // eslint-disable-next-line
    },[])

    async function getProducts(){
        const response = await axios(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`)
        const nextPage = page + 1
        setPage(nextPage);
        setProducts(response.data.products)
    }
    async function showMoreProducts(){
        const nextPage = page + 1
        setPage(nextPage);
        const response = await axios(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`)
        setProducts(products.concat(response.data.products))
    }
    return (
        <div>
            <Typography component='div' className={styles.selection} variant="h6">Sua seleção especial</Typography>
            <div className={styles.home}>
                <div className={styles.content}>
                    {products.map(prod => (
                        <Card key={prod.id} className={styles.card}>
                            <CardMedia className={styles.media} image={prod.image}/>
                            <CardContent>
                                <Typography className={styles.prodName}>{prod.name}</Typography>
                                <Typography className={styles.prodDesc} variant='body2'>{prod.description}</Typography>
                                <Typography className={styles.oldPrice} variant='body2'>De: R${prod.oldPrice}</Typography>
                                <Typography className={styles.newPrice} variant="subtitle1">Por: R${prod.price}</Typography>
                                <Typography className={styles.otherMethods} variant='body2'>ou em 2x de R${(prod.price / 2)}</Typography>
                                <Button variant="outlined" className={styles.btnBuy}>Comprar</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <div className={styles.btnShowMore}>
                <Button variant="outlined" onClick={() => showMoreProducts()}>Ainda mais produtos aqui</Button>
            </div>
        </div>
    );
}