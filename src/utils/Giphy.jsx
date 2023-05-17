import { GiphyFetch } from '@giphy/js-fetch-api'
import { Grid } from '@giphy/react-components'

async function UploadGif ({ file, showToast, showErrorToast }) {
    const fetchData = await fetch('http://localhost:3000/api/cloudinary/upload',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ file: file })
    }).then(res => {
        if(res.ok){
            showToast({text: "Gif uploaded"})
            return res.json()
        }
    }).catch(err => {
        showErrorToast({text: "Error uploading gif\n" + err.message})
    })
    return fetchData
}
const gf = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_API)

export default function GiphyInterface ({ search, showToast, showErrorToast, addCollection, userData, uniqueEmojie, setGif }) {
    const fetchGifs = (offset) => gf.search(search, { offset, limit: 10 })
    return (
        <div className="absolute z-50 bg-[#111010] h-96 w-[850px] rounded-xl top-20">
            <Grid
                className='h-80 overflow-y-scroll overflow-x-hidden'
                noResultsMessage={<div className="flex flex-col justify-center text-center items-center h-full"><h1 className="text-3xl">No results found<br/><p className='text-lg'>type something to search...</p></h1></div>}
                width={850}
                columns={3}
                fetchGifs={fetchGifs}
                noLink={true}
                hideAttribution={true}
                onGifClick={async (gif, e) => {
                    console.log(gif)
                    console.log(e)
                    await UploadGif({ file: gif.images.original.url, showToast: showToast, showErrorToast: showErrorToast }).then(res => {
                        try{
                            addCollection(`${uniqueEmojie()} ${userData.user.name}`, res.url, userData.user.email)
                            showToast({text: "Gif added to database"})
                            setGif(false)
                        } catch (err) {
                            showErrorToast({text: "Error adding gif to database\n" + err.message})
                            setGif(false)
                        }
                    })
                }}
            />
        </div>
    )
}