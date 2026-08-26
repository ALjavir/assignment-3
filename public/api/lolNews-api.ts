export let lolMapData = <any>[]
export async function getAllLoLNews() {
    try {
        const res = await fetch(`https://soraclee.github.io/riotgames-news-api/data/lol/allNewsEn.json`);
        if (!res.ok) throw new Error("Failed to fetch League news");

        const data = await res.json();
        const newsArray = Array.isArray(data) ? data : Object.values(data);
        lolMapData = newsArray.slice(0, 10);
    } catch (error) {
        console.error('Error fetching LoL news:', error);
        throw error;
    }
}