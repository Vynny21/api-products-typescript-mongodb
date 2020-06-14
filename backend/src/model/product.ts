/* eslint-disable no-unused-vars */
import { Document, Schema, model, Model, Error } from 'mongoose'

export interface IProduct extends Document {
  productId: String
  name: String
  price: Number
  quantity: Number
}

export const ProductSchema: Schema = new Schema({
  productId: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  price: Number,
  quantity: Number
})

export const Product: Model<IProduct> = model('Product', ProductSchema)
