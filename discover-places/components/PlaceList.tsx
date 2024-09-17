import React from 'react'

function PlaceList({placeList}:any) {
  return (
    <div className='px-[10px] md:px-[120px] mt-7'>
        <h2 className='text-[20px] font-bold'>Search Results</h2>
        <div>
            {placeList.map((place:any,index:number)=>
                <div>
                    {place.name}
                </div>
            )}
        </div>
    </div>
  )
}

export default PlaceList
