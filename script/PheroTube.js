const loadVideos = async (allCatagories) => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/category/1000')
    const data = await response.json();
    const videos = data.data;
    console.log(videos);
    displayVideos(videos);
}

const displayVideos = videos => {
    const videosContainer = document.getElementById('videos-container')
    videos.forEach(video => {
        const author = video.authors[0];
        
        const videosCard = document.createElement('div');
        videosCard.classList = "card w-96 bg-base-100 shadow-xl"
        videosCard.innerHTML = `
        <figure><img src="${video.thumbnail}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${video.title}</h2>
            <p class="author-name">${author.profile_name}</p>
        </div>        
        `
        videosContainer.appendChild(videosCard)

    })
}

// handle all the buttons

const buttonsAll = () => {
    const buttonAll = document.getElementById('btn-all')
    buttonAll.classList = 'btn btn-secondary'
    buttonAll.innerHTML = `
    <button>All</button>    
    `
    buttonAll.appendChild
    
    
}



loadVideos()