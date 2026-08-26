import { useEffect, useState } from "react";

import {lolMapData, getAllLoLNews } from "../../public/api/lolNews-api"
import { localApiData } from "../../public/api/local-api";
import NewsLocalSec from "~/component/page/news/news-local-sec/news-local-sec";
import NewsLolNewsSec from "~/component/page/news/news-lolNews-sec/news-lolNews-sec";

export default function News() {
    const [newsLocal, setnewsLocal] = useState<any[]>([])
    const [newsApi, setnewsApi] = useState<any[]> ([])

    useEffect(() => {
        async function init() {
            try {
                setnewsLocal(localApiData)
                await getAllLoLNews()
                setnewsApi(lolMapData)
            } catch (error) {
                
            }
        }
        init()
    }, [])
    return (
        <main>
            <NewsLocalSec newsLocalData={newsLocal} />
            <NewsLolNewsSec newsLolNewsData={newsApi}/>
        </main>
    )
}