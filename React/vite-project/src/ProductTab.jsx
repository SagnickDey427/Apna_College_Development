import Product from "./Product";
import './ProductTab.css';

function ProductTab(){
    return (
        <div className='cards-container'>
            <Product title="Sneakers" img="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" features={["Durable","Easy-to-wash","Cost-effective"]}/>
            <Product title="Headphones" img="https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" features={["Durable","Water-proof","Noise cancellation"]} price={1000}/>
            <Product title="Cologne" img="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" features={["Fancy","French perfume","Long lasting"]} price={800}/>
            <Product title="Camera" img="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" features={["Instant photo","Water-proof","high resolution"]} price={3000}/>
            <Product title="Sunglasses" img="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" features={["Durable","Water-proof","Blue lens Uv protection"]} price={1500}/>
        </div>
    )
}

export default ProductTab;