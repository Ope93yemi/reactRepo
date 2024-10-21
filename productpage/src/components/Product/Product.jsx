import "./Product.css"

const Product = (props) =>{


    return(
        <div>
            <div className={`Products ${props.style}`}>
                <img src={props.imageUrl} alt="productimage" />
                <h1>{props.productName}</h1>
                <p>{props.price}</p>
                <p>{props.description}</p>
                 
            </div>
        </div>
    )
};

export default Product