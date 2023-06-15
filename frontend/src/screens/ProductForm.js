import React from 'react'
import FlexBetween from 'components/flexBetween'
import { Box, TextField, Button } from '@mui/material'
import { useTheme } from '@mui/material'
import { useForm } from 'react-hook-form'
import Header from 'components/Header'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { yupResolver } from '@hookform/resolvers/yup';
import { postProduct } from 'state/api'
import * as yup from "yup";

const productShcema = yup.object({
  name: yup.string().required(),
  price: yup.number().positive().required(),
  description: yup.string().required(),
  category: yup.string().required(),
  rating: yup.number().positive().required(),
  supply: yup.number().required()
}).required()

const ProductForm = () => {

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: postProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product'] })
    },
  })
  
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(productShcema)
  })
  function onSubmit(data) {
    mutation.mutate(data)
  }

  const theme = useTheme()

  return (
    <>
      <Box m='1.5rem 2.5rem'>
        <Header title={'Adding Product'} subTitle={'Please provide these informations'} needButton={false} />
        <form onSubmit={handleSubmit(onSubmit)} m='1.5rem 2.5rem' >
          <FlexBetween sx={{ mt: '10px' }}>
            <label>Product Name </label>
            <TextField sx={{ width: "90%" }}  {...register("name")} />
            <p>{errors.name?.message}</p>
          </FlexBetween>

          <FlexBetween sx={{ mt: '10px' }}>
            <label>Product Price </label>
            <TextField sx={{ width: "90%" }} {...register('price')} />
            <p>{errors.price?.message}</p>
          </FlexBetween>

          <FlexBetween sx={{ mt: '10px' }}>
            <label>Product Description </label>
            <TextField sx={{ width: "90%" }} {...register('description')} />
            <p>{errors.description?.message}</p>
          </FlexBetween>

          <FlexBetween sx={{ mt: '10px' }}>
            <label>Product Category </label>
            <TextField sx={{ width: "90%" }} {...register('category')} />
            <p>{errors.category?.message}</p>
          </FlexBetween>

          <FlexBetween sx={{ mt: '10px' }}>
            <label>Product Rating </label>
            <TextField type="number" sx={{ width: "90%" }} {...register('rating')} />
            <p>{errors.rating?.message}</p>
          </FlexBetween>

          <FlexBetween sx={{ mt: '10px' }}>
            <label>Product Supply </label>
            <TextField sx={{ width: "90%" }} {...register('supply')} />
            <p>{errors.supply?.message}</p>
          </FlexBetween>

          <Button sx={{
            backgroundColor: theme.palette.secondary[300],
            color: theme.palette.primary[600],
            margin: '30px',
          }} variant="contained" type='submit' >
            Submit
          </Button>
        </form>
      </Box>
    </>
  )
}

export default ProductForm
