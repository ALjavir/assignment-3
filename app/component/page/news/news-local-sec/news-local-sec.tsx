import "./news-local-sec-style.css"

interface newsLocalDataInt {
    newsLocalData: any[]
}

export default function NewsLocalSec({ newsLocalData }: newsLocalDataInt) {
    return (
        <section id="news-local-sec">
            <h6>Demo of localNews</h6>
            <div className="news-local-grid">
                {
                    newsLocalData.map((data) =>
                        <div className="news-local-data-card">
                            <img src={data.url} alt={data.title} />
                            <div className="news-loacl-data-crad-content">
                                <h1>{data.title}</h1>
                                <p>{data.body}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}