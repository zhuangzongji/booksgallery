import AddToCart from './AddToCart'

function ProductDetail({ product }) {
    return (
        <div data-theme="luxury" className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center bg-[#3E2A47] p-8 rounded-lg shadow-lg">
    {/* 左側：產品圖片（佔6/24） */}
    <div className="lg:col-span-6 lg:col-start-3">
        <img
            alt={product.title}
            className="w-full h-96 object-cover object-center rounded-md border-8 border-brown-900 shadow-md"
            src={product.cover}
        />
    </div>

    {/* 右側：產品資訊（佔14/24） */}
    <div className="lg:col-span-14 px-4">
        <h1 className="text-brown-900 text-3xl font-bold mb-2">{product.title}</h1>
        <h2 className="text-brown-900 opacity-100 mb-1 text-lg">{product.author}</h2>
        <p className="text-brown-900 opacity-100 text-base mb-4">{product.summary}</p>

        {/* 價格與按鈕 */}
        <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold text-brown-900">US${product.price}.00</p>
            <AddToCart className="bg-[#C4A484] hover:bg-[#A37A58] text-white py-2 px-4 rounded-md shadow-md transition-all" />
        </div>
    </div>
</div>
    )
}
export default ProductDetail