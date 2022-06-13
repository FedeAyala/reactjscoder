import React from 'react'

const SkeletonLoading = () => {
  return (
    <div className="card card-normal w-60 h-80 bg-base-100 shadow-md">
      <figure className="animate-pulse shadow-md">
        <div className="w-60 bg-gray-300  h-40  "></div>
      </figure>
      <div className="card-body ">
        <h2 className="w-36 bg-gray-300 h-6 rounded-md mx-auto animate-pulse"></h2>
        <div className="card-actions justify-end ">
          <p className="w-24 bg-gray-300 h-6 rounded-md animate-pulse"></p>
        </div>
      </div>
    </div>
  )
}

export default SkeletonLoading
