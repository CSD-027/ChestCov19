function getNews() {
    const rowNews = document.getElementById('row-news');
    let url = `https://csd027newsapi.herokuapp.com/cnbc/terbaru/`

    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
        data.data.posts.forEach(posts => {
            console.log("ini data for each");
            const image = posts.thumbnail.toLowerCase()

            document.getElementById("row-news").innerHTML += ` <div class="grid-item">
            <div class="portfolio-item">
                <a class="portfolio-link" data-toggle="modal" href="${posts.link}" target="_blank" rel="noopener noreferrer">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid"
                        src="${posts.thumbnail.toLowerCase()}"
                        alt="news image" />
                </a>
                <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">${posts.title}</div>
                    <div class="portfolio-caption-subheading text-muted">${new Date(posts.pubDate).toLocaleDateString('pt-PT')}
                </div>
                </div>
            </div>
        </div>`
            // console.log(posts.description)
            //   let rowNews = document.createElement('li');
            //   let a = document.createElement
        });
    })
}