import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar({mainProduct, product, setProduct, setAllProductDetails}) {

    const [select, setSelect] = useState(false);

    function filterProduct(event) {
        const search = event.target.value.toLowerCase();

        setProduct(search);

        const filter = mainProduct.filter((eachItem) => {
            return eachItem?.title?.toLowerCase().includes(search);
        })

        setAllProductDetails(filter);

    }

    function CategoryButton() {
        setSelect(!select);
    }

    function filterBasedOnCategory(event) {
        const filterCat = event.target.name.toLowerCase();

        const filter = mainProduct.filter((eachItem) => {
            return eachItem?.category?.toLowerCase().includes(filterCat);
        })
        
        if (filterCat === "select all") {
            setAllProductDetails(mainProduct);
            setSelect(!select);
        } else {
            setAllProductDetails(filter);
            setSelect(!select);
        }

    }

    // Get unique categories
    const uniqueCategories = [...new Set(mainProduct.map(item => item?.category))];
    
    return (
        <>
        <div className="overflow-x-scroll flex flex-row justify-around items-center mx-1 my-3 rounded-md py-2 gap-4">
            <h1 className="font-sans font-bold text-indigo-800 text-2xl py-2">BuyProd.com</h1>
            <input type="text" placeholder="Search Products" value={product} className="px-1 py-2 w-40 md:px-6 md:w-70 py-2 text-black bg-white border-2 border-gray-700 rounded-lg" onChange={filterProduct}/>
            <Link to="/cart" className="md:block bg-indigo-800 text-white hover:bg-indigo-500 hover:text-black px-6 py-2 rounded-lg">Cart</Link>
            <button name="category" id="category" className="md:block px-6 py-2 bg-indigo-800 text-white hover:bg-indigo-500 hover:text-black rounded-lg" onClick={CategoryButton}>Category
            </button>
        </div>
        <div>
            {select ? (
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mb-4 mx-2">
                    <button onClick={filterBasedOnCategory} name="Select All" className="text-indigo-800 hover:text-indigo-500 text-left font-bold">Select All</button>
                    {uniqueCategories.map((eachProduct) => {
                        return <button key={eachProduct} onClick={filterBasedOnCategory} name={eachProduct} className="text-indigo-800 hover:text-indigo-500 text-left font-bold">
                            {eachProduct}
                        </button>
                    })}
                </ul>
            ) : (<>
            </>)}
        </div>
        </>
    )
}