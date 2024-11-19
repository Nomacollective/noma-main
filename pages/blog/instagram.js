import axios from 'axios';

export default async function handler(req, res) {
    const url = `https://graph.instagram.com/${NEXT_PUBLIC_INSTAGRAM_ID}/media?fields=id,caption,media_type,media_url,permalink&access_token=${NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`;
    console.log(url)
    try {
        const response = await axios.get(url);
        const posts = response.data.data;
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Error when retrieving data from Instagram' });
    }
}
