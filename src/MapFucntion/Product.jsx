
import Products from "./product.json"

function Product(){
    return(
        <>
        {
            Products.map( (product, index) => {
               return <div key={index}>
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                    <img src={product.image} alt={product.title} />


                </div>
            })
        }
        </>
    )
}

export default Product;