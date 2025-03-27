import Header from '../components/Header'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer/index'

function Home(){
    return(
        <div  data-theme="luxury" className='container mx-auto main-layout'>
            <Header
                title = "THE BOOKSTORE"
                slogan = "THE BEST PLACE TO BUY BOOKS!"
            />
            <ProductList className="content"/>
            <Footer className="footer" />
        </div>
    )
}

export default Home