import React from 'react'
import {useParams} from 'react-router-dom' 

function PostIdPage() {
  const params = useParams()

  return (
    <div>Страница поста {params.id}</div>
  )
}

export default PostIdPage