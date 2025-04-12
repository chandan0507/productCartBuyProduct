import { useEffect, useState } from "react";
import ListEachProduct from "./ListEachProduct";
import { Navbar } from "./Navbar";

export default function AllProducts() {

    const [mainProduct, setMainProduct] = useState([])
    const [allProductDetails, setAllProductDetails] = useState([])
    const [product, setProduct] = useState("")

    async function FetchAllProducts() {    
        const apiResponseForAllProducts = await fetch('https://dummyjson.com/products');
        const apiResponseForAllProductsToJson = await apiResponseForAllProducts.json()
        setAllProductDetails(apiResponseForAllProductsToJson.products);
        setMainProduct(apiResponseForAllProductsToJson.products);
    }

    useEffect(() => {
        FetchAllProducts();
    }, []);

    if(mainProduct.length === 0){
        return (
            <p className="text-center">Loading...</p>
        )
    }

    console.log(allProductDetails)

    return (
        <div>
        <Navbar mainProduct={mainProduct} product={product} setProduct={setProduct} setAllProductDetails={setAllProductDetails}/>
        {product && allProductDetails.length === 0? (
            <p className="text-center">No Search Found For {product}!</p>
        ) : (
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-3">
                {allProductDetails.map((eachSingleProduct) => {
                    return <ListEachProduct product={product} key={eachSingleProduct['id']} eachSingleProduct={eachSingleProduct}/>
                })}
            </ul>
        )}
        </div>
    )
}