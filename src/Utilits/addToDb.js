
const getStoredReadtList =()=>{

    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else
    {
        return [];
    }
}

const addToStoredReadList=(id)=>{

    const storedList = getStoredReadtList();
    if(storedList.includes(id))
    {
        console.log("Already ReadList Added");
    } 
    else
    {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr);
    }
}

const getStoredWishList=()=>{
    const storedWishList = localStorage.getItem('wish-list');
    if(storedWishList)
    {
        const storedWishListStr = JSON.parse(storedWishList);
        return storedWishListStr;
    }
    else
    {
        return [];
    }
}

const addToStoredWishList=(id)=>{
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id))
    {
        console.log("Already Added to WishList");
    }
    else
    {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list',storedWishListStr)
    }
}

export {
    addToStoredReadList,
    getStoredReadtList,
    addToStoredWishList,
    getStoredWishList
}