import { useEffect, useState } from "react";
import { getAllFavorites } from "../utility/utility";
import Card from "../components/Card";


const Cart = () => {
   
    const [products, setProducts] = useState([])

    useEffect(() => {
        const favorites = getAllFavorites()
        setProducts(favorites)
    }, [])

    const handleSort = sortBy => {
        if(sortBy = 'price'){
            const sorted = [...products].sort((a, b) => b.price - a.price)
            setProducts(sorted)
           
        }
    }



    return (
        <div>
            <div className="flex items-center justify-between container my-6 mx-auto">
                <h2 className="text-xl font-bold">Cart</h2>
                <div className="flex items-center gap-3">
                    <h4 className="text-xl font-bold">Total price:</h4>
                    <button onClick={() => handleSort('price')} className="text-purple-700 border border-purple-400 
                    px-4 font-semibold cursor-pointer py-2 
                    rounded-3xl hover:bg-blue-400">Sort by price</button>
                    <button className="text-purple-700 border border-purple-400 
                    px-4 font-semibold cursor-pointer py-2 
                    rounded-3xl hover:bg-blue-400">Purchase</button>
                </div>
            </div>

            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 container mx-auto">
            {
                products.map(product => <Card key={product.product_id} product={product}></Card>)
            }
        </div>
        </div>
    );
};

export default Cart;