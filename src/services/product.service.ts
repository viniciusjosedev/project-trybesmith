import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import sequelize from '../database/models';

const createProduct = async (data: Product): Promise<Product> => 
  sequelize.transaction(async (t) => {
    const result = await ProductModel.create(data, { transaction: t });

    return result.dataValues;
  });

export default {
  createProduct,
};