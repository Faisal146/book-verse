//get wishlist items form local storage
import { toast } from 'react-toastify';

 
const getItemsWishList = ()=>{
    const storedWishlist = localStorage.getItem('whishlist')

    if(storedWishlist){
        return JSON.parse(storedWishlist)
    }else{
        return []
    }
}

//get read items form local storage 

 
const getItemsReadList = ()=>{
    const storedReadList = localStorage.getItem('readlist')

    if(storedReadList){
        return JSON.parse(storedReadList)
    }else{
        return []
    }
}


// save wishlist items in local storage

const saveToWishList = id =>{

    // get the readlist and wishlist for chacking existence
  const storedWishlist = getItemsWishList()
  const storedReadlist = getItemsReadList()


  // chack if already existss in wishlist as well as readlist

  const existWish = storedWishlist.find(bookId => bookId == id) 
  const existRead = storedReadlist.find(bookId => bookId == id)

  if(!existWish && !existRead){
    storedWishlist.push(id)

    localStorage.setItem("whishlist" , JSON.stringify(storedWishlist))
    toast("Added To wishlist Successfully")
  }else{
    toast("Item Already exist In Wishlist")
  }
}

// save to readlist
const saveToReadList = id =>{
  const storedReadlist = getItemsReadList()

  // chack if already existss

  const exist = storedReadlist.find(bookId => bookId == id)

  if(!exist){
    storedReadlist.push(id)

    localStorage.setItem("readlist" , JSON.stringify(storedReadlist))
    toast("Added to Read List Successfully")

  }else{
    toast("Item already exist in ReadList")
  }
}

export {getItemsWishList ,getItemsReadList,saveToWishList,saveToReadList}