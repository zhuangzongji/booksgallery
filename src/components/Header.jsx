import {Link} from "react-router"

function Header({title,slogan}){
    return(
        <header data-theme="luxury" className="text-center flex flex-col items-center header bg-gradient-to-r from-brown-500 to-brown-700 p-6 rounded-lg shadow-lg">
        <Link to="/">
            <h2 className="pt-5 pb-2 text-brown-900 text-[100px] font-bold">{title}</h2>
        </Link>
        
        <p className="text-brown-900 text-opacity-90 text-[25px] leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto">
            {slogan}
        </p>
    
        <div className="flex mt-6 justify-center">
            <hr className="my-[25px] mx-auto w-[100px] border-0 border-t-[4px] border-yellow-400 opacity-80 rounded" />
        </div>
    </header>
    )
}   
export default Header