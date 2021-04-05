const  image = document.querySelector ('#image')
const generateRandomImagem = document.querySelector('.c__generate')
const downloadImageButton = document.querySelector('.b__download')
const favoriteButton = document.querySelector('.b__favorite')
const randomImageUrl = 'https://picsum.photos/400/400'
const favoritedImagesKey = '@randomImg: favorites'

generateRandomImagem.addEventListener('click', ()=> {
    loadImage()
})

favoriteButton.addEventListener('click', (event)=> {
    favoriteImage(event)
})

const loadImage = async () => {
    const response = await fetch(randomImageUrl)
    const data = await response.blob()
    const {url} = response
    const objectURL = URL.createObjectURL(data)
    
    image.src = objectURL
    downloadImageButton.href = objectURL
    favoriteButton.setAttribute('data-url', url)
}

const favoriteImage = (event) => {
    const favoritedImages = localStorage.getItem(favoritedImagesKey)
    const url = event.target.dataset.url
    if(!favoritedImages){
        return localStorage.setItem(favoritedImagesKey, JSON.stringify([url]))
    }
    else{
    const parsedFavoritedImages = JSON.parse(favoritedImages)
    localStorage.setItem(favoritedImagesKey, JSON.stringify([...parsedFavoritedImages, url]))
    }
}

loadImage ()


