import useSWR from 'swr'

const fetcher = (url)=>fetch(url).then(resp=>resp.json()).then(data=>data)

export default function GetProducts(){
    const {data,error, mutate} = useSWR(`https://dummyjson.com/products`, fetcher)

    console.log(data);

    return data
}