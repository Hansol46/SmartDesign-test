import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    nameProduct: String,
    imgProduct: String,
    description: String,
    size: String
})
export default mongoose.model('cards', cardSchema)









