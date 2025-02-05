import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";


const ProductCards = () => {
    const data = useLoaderData();
    const { category } = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
       if(category){
        const filterdeCategory = [...data].filter(
            product => product.category === category)
            setProducts(filterdeCategory)
       }
       else{
        setProducts(data);
       }
            
    }, [data, category])
    // console.log(data);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-3 gap-3">
            {
                products.map(product => <Card key={product.product_id} product={product}></Card>)
            }
        </div>
    );
};

export default ProductCards;