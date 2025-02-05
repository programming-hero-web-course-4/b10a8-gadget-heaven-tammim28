import { useEffect, useState } from "react";
import { getAllWishlist } from "../utility/utility";
import Card from "../components/Card";


const Wishlist = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const favorites = getAllWishlist()
        setProducts(favorites)
    }, [])
    return (
        <div>
            <h3>wishlist show here....</h3>

            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                products.map(product => <Card key={product.product_id} product={product}></Card>)
            }
        </div>
        </div>
    );
};

export default Wishlist;