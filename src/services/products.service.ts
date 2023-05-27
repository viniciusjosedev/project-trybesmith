import ProductModel from 'src/database/models/product.model';
import { Product } from 'src/types/Product';
import sequelize from '../database/models';

const createProduct = async (data: Product): Promise<Product> => 
  sequelize.transaction(async (t) => {
    const result = await ProductModel.create(data, { transaction: t });

    return result.dataValues;
  });

export default {
  createProduct,
};