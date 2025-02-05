import { ToastContainer, toast } from 'react-toastify';


const getAllFavorites = () => {
    const all = localStorage.getItem('favorites')
    return all ? JSON.parse(all) : []

   
}


const addFavorite = product => {
    const favorites = getAllFavorites()
    const isExist = favorites.find(item => item.product_id == product.product_id)
    if(!isExist){
        favorites.push(product)
        localStorage.setItem('favorites', JSON.stringify(favorites))
        toast.success('Successfully added..')
    }
    else{
        return toast.warning('this product already exist..')
    }
  
}

// for wishlist

const getAllWishlist = () => {
    const all = localStorage.getItem('wishlist')
    return all ? JSON.parse(all) : []

   
}


const addWishlist = product => {
    const favorites = getAllWishlist()
    const isExist = favorites.find(item => item.product_id == product.product_id)
    if(!isExist){
        favorites.push(product)
        localStorage.setItem('wishlist', JSON.stringify(favorites))
        toast.success('Successfully added..')
    }
    else{
        return toast.warning('this product already exist..')
    }
  
}


export {addFavorite, getAllFavorites, addWishlist, getAllWishlist}