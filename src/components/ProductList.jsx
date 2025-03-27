import ProductItem from './ProductItem'
import products from '../json/books.json'

function ProductList(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 content bg-gradient-to-r from-brown-300 to-brown-600 p-6 rounded-lg shadow-lg">
    {products.map((product) => (
        <ProductItem key={product.ID} product={product} />
    ))}
</div>
    )
}
export default ProductList