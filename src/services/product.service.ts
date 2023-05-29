import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import sequelize from '../database/models';

const createProduct = async (data: Product): Promise<Product> => 
  sequelize.transaction(async (t) => {
    const result = await ProductModel.create(data, { transaction: t });

    return result.dataValues;
  });

const getAllProducts = async (): Promise<Product[]> => {
  const result = await ProductModel.findAll();

  return result.map((e) => e.dataValues);
};

const updateProduct = async (id: number, orderId: number): Promise<number> => {
  const result = await ProductModel.update({ orderId }, { where: { id } });

  return result[0];
};

export default {
  createProduct,
  getAllProducts,
  updateProduct,
};
