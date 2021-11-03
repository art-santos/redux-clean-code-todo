import axios from 'axios';

export default async function getApi(url: string) {
const data = await axios.get(url)
return (data.data)
}