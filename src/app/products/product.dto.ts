import { Product } from './product.model';

//Omit is used in order to omit some fields from partent
export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}
//Pick only set some states from parent
type exampe = Pick<Product, 'color' | 'description'>;

//partial puts all the fields as optional
export interface UpdateProductDto extends Partial<CreateProductDto> {}

//All fields required
type example2 = Required<Product>;

//Only allows to send data via params and isn't allow to modify
export interface FindProductDto
  extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}

type example3 = Readonly<Product>;
