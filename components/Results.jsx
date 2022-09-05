import Thumbnail from "./Thumbnail";

function Results({ results }) {
  console.log(results)
  return(
    <div className='py-5 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4' >
      {
        results.map( result => (
          <Thumbnail key={result.id} result={result}/> 
        ))
      }
    </div>
  )
}

export default Results;