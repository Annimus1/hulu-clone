import Image from 'next/image'
import ThumbnailIcon from './ThumbnailIcon';

function Thumbnail({ result }){
  const urlBase = 'https://image.tmdb.org/t/p/original'
  return(
    <div className='group px-3 py-2 md:px-6 lg:px-10'>
      <div>
        <Image 
        className='rounded-2xl lg:group-hover:scale-95'
        src={`${urlBase}${result.poster_path || result.backdrop_path}` || `${urlBase}${result.poster_path}`} 
        width={1080}
        height={1920}
        alt={result.title}
        layout="responsive"/>
      </div>

      <div className='p-2'> 
        
        <h2 className="font-bold pb-1">{result.title || result.original_name}</h2>
        <p className='truncate max-w-md'>{result.overview}</p>
        
        <div className='flex flex-row'>
          <p className='font-semibold'>{result.release_date || result.first_air_date}</p>
          <span className='text-green-600 pl-2'>{result.media_type && `${result.media_type}`}</span>
        </div>
        
        <div className='flex flex-row'>
          <ThumbnailIcon/>
          <p>{result.vote_count}</p>
        </div>
        
      </div>

    </div>
  )
}

export default Thumbnail;