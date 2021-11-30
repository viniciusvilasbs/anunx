import formidable from 'formidable-serverless'
import ProductsModel from '../models/products'
import dbConnect from '../utils/dbConnect'

const post = async (req, res) => {
    await dbConnect()

    const form = new formidable.IncomingForm()

    form.parse(req, (error, fields, data) => {
        console.log('chegou no form parser')

        res. status(200)
    })
}

export {
    post
}