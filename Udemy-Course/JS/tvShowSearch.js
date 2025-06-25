const form = document.querySelector('#searchForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Submitted');
    const searchTerm = form.elements.query.value;
    const config = {params: {q: searchTerm}} 
    const response = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
    makeImages(response.data);
    form.elements.query.value = ''
})


const makeImages = (shows) => {
    for(let result of shows) {
        if(result.show.image) {
            const imgUrl = result.show.image.medium;
            const img = document.createElement('img');
            img.src = imgUrl;
        document.body.append(img);
        }
    }
}