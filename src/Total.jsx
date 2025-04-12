export default function Total({eachSingleProduct}) {
    return (
        <>
            <div className="col-span-3">{eachSingleProduct?.title}</div>
            <div>1</div>
            <div>${eachSingleProduct?.price}</div>
        </>
    )
}