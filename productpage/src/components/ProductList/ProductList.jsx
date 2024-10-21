import "./ProductList.css"
import "../Product/Product.css"
import  Product from "../Product/Product"

const ProductList = () =>{
    return(
       <div>
            <div>
             <Product productName="Phone" price="$4700" description="This is a Phone" imageUrl="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/62/1009573/1.jpg?6485" style="Products1" />
             <Product productName="Ringlight" price="$7600" description="Perfect Ringlight made for you" imageUrl="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/8669252/1.jpg?4346" style="Products2" />
             <Product productName="Laptop Table" price="$2300" description="Enjoy comfort" imageUrl="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/7968922/1.jpg?2953" style="Products3" />
             <Product productName="Wooden Table" price="$8500" description="Made with the best" imageUrl="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/223887/1.jpg?5123" style="Products4" />
             <Product productName="Charcoal Pencil" price="$9000" description="Perfect for all artistical works" imageUrl="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/713925/1.jpg?8110" style="Products5"  />
             <Product productName="Sneakers" price="$5800" description="Comfort is our priority" imageUrl="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/3488491/1.jpg?8738" style="Products6" />
            </div>
       </div>
    )
};

export default ProductList;