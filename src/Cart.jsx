import ActualCart from "./ActualCart";
import { useCart } from "./CartContext"
import Total from "./Total";

export default function Cart() {

    const { cart, setCart } = useCart();

    const Value = () => {
        const total = cart.reduce((total, item) => {
            // below checks whether for each element price is there if its there then will be added to total else 0 will be sent
            return total + parseFloat(item?.element?.price || 0);
        }, 0);
        return total.toFixed(2);
    }

    if (cart.length === 0) {
        return (
            <div className='flex justify-center items-center'>
                <p className='text-black'>No Cart Found!</p>
            </div>
        )
    }

    return (
        <>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pb-3 px-3 py-2">
                {cart.map((eachSingleProduct) => {
                    return (
                        <ActualCart key={cart?.element?.id} cart={cart} eachSingleProduct={eachSingleProduct?.element} setCart={setCart} />
                    )
                })}
            </ul>
            <hr className="border-1" />
            <div className="grid grid-cols-5 gap-4 px-3 mb-5">
                <div className="col-span-3 font-bold">Name</div>
                <div className="font-bold">Quantity</div>
                <div className="font-bold">Price</div>
                {cart.map((eachSingleProduct) => {
                return (
                        <Total key={cart?.element?.id} eachSingleProduct={eachSingleProduct?.element}/>
                    )
                })}
            </div>
            <hr className="border-1" />
            <div className="grid grid-cols-5 px-3 gap-4 mb-3">
                <div className="col-span-4 font-bold">Total</div>
                <div className="font-bold">${Value()}</div>
            </div>
        </>
    )
}