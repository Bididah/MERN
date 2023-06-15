import React from 'react'
import Header from '../components/Header'
import { Box, Card, CardContent, CardActions, Typography, Rating, Button, useTheme } from '@mui/material'
import { useGetProductQuery } from 'state/api'
import { getProduct } from 'state/api'
import { useQuery } from '@tanstack/react-query'

const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}) => {

  const theme = useTheme()
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}>
      <CardContent>
        <Typography>{category}</Typography>
        <Typography>{name}</Typography>
        <Typography sx={{ mb: "1.5rem" }} variant="h5">{price.toFixed(2)}</Typography>
        <Rating value={rating} readOnly></Rating>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => { }}>See More</Button>
      </CardActions>
    </Card>
  )
}
const Products = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProduct
  })

  return (
    <Box m='1.5rem 2.5rem'>
      <Header title={"Products"} subTitle={'See your list of Product'} needButton={true} buttonText={'add new product'} path="/addProduct" />
      {data ? (
        <Box
          mt='3rem'
          display="grid"
          gridTemplateColumns='repeat(4, 1fr)'
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%" >
          {data.map(({
            _id,
            name,
            description,
            price,
            rating,
            category,
            supply,
            stat, }) => (
            <Product
              key={_id}
              id={_id}
              name={name}
              description={description}
              price={price}
              rating={rating}
              category={category}
              supply={supply}
              stat={stat}
            />
          ))}
        </Box>
      ) : (
        <>Loading data ....</>
      )}

    </Box>
  )
}

export default Products
