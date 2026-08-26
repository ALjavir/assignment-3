import"./news-lolNewssect-style.css"
interface newsLolNewsDataInt {
    newsLolNewsData: any[]
}

export default function NewsLolNewsSec({ newsLolNewsData }: newsLolNewsDataInt) {
    return (
        <section id="news-lolNews-sec">
            <h6>Demo of lolNews</h6>
            <div className="news-lolNews-grid">
                {
                    newsLolNewsData.map((data) =>
                        <div className="news-lolNews-data-card">
                            <img src={data.imageMedia.url} alt={data.title} />
                            <div className="news-lolNews-data-crad-content">
                                <h1>{data.title}</h1>
                                <p>{data.description.body}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}