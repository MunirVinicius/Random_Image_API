const favoritedImagesKey = '@randomImg: favorites'
const listFavorites = document.querySelector ('.listFavorites')

const loadFavorites = ()=> {
    const arrayFavorites = localStorage.getItem(favoritedImagesKey)
    if(arrayFavorites){
        const parsedStorage = JSON.parse(arrayFavorites)
        parsedStorage.forEach((item)=>{
            const li = document.createElement('li')
            const image = document.createElement('img')

            image.src = item
            li.appendChild(image)
            listFavorites.appendChild(li)
        })  
    }

}
loadFavorites ()