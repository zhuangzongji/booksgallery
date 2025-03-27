import {Link} from 'react-router'
 
function ProductItem({product}){
    return(
        <section className="pt-4 px-3 lg:px-4">
        <div className="border border-brown-800 rounded overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <Link to={`/products/id/${product.id}`}>
                <img
                    className="w-full object-cover object-center"
                    src={product.cover}
                    alt={product.name}
                />
            </Link>
            <div className="p-4 bg-gradient-to-r from-brown-200 to-brown-100 hover:from-brown-300 hover:to-brown-200 transition-all duration-300">
                <h4 className="text-brown-900 font-bold mb-1 hover:text-brown-900">
                    {product.title}
                </h4>
                <h6 className="text-brown-900 mb-3 hover:text-brown-700">
                    {product.author}
                </h6>
                <p className="text-brown-900 mb-3 hover:text-brown-600">{product.summary_short}</p>
                <div className="flex justify-between flex-wrap">
                    <Link
                        to={`/products/id/${product.id}`}
                        className="no-underline flex items-center text-brown-500 hover:text-brown-600"
                    >
                        See More
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                    <span className="text-brown-700 inline-flex items-center leading-none text-lg pr-3 py-1 font-bold">
                        {product.price}
                    </span>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ProductItem