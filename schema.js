import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    nameProduct: String,
    imgProduct: String,
    description: String
})
export default mongoose.model('cards', cardSchema)









