import axios from 'axios';



export default async function getApi(url: string) {
const data = await axios.get(url, { headers: { 'Content-Type': 'application/json' } });

return (data.data)
}