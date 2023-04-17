
import Product from "../models/product"
import joi from "joi"

const productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required()
})
export const create = async (req, res) => {
    try { 
        const {error} = productSchema.validate(req.body);
        if(error) {
            res.json({
                message: error.details[0].message,
            })
        }       
        const product = await Product.create(req.body);
        return res.status(201).json({
            massage: "Tạo sản phẩm thành công",
            product,
        })
    } catch (error){
        return res.status(400).json({
            message: error
        })
    }
};

export const getAll = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(201).json(products);
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const get = async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        return res.status(201).json(products);
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const update = async (req, res) => {
    try {
        const {error} = productSchema.validate(req.body);
        if(error) {
            res.json({
                message: error.details[0].message,
            })
        }  
        const products = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        return res.status(201).json({
            massage: "Cập nhật sản phẩm thành công",
            products,
        });
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const remove = async (req, res) => {

    try {
        const {error} = productSchema.validate(req.body);
        if(error) {
            res.json({
                message: error.details[0].message,
            })
        }  
        const products = await Product.findOneAndDelete({_id: req.params.id});
        return res.status(201).json({
            massage: "Xóa sản phẩm thành công",
            products,
        });
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}





