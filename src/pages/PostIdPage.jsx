import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components.js/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsById(params.id);
    setComments(response.data);
  });

  console.log (typeof comments)

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);

  return (
    <div>
      <h1>Страница поста ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>Комментарии</h1>
       { isComLoading
        ? <Loader />
        : <div>
          {comments.map ((comment) => 
            <div key={comment.id} style={{marginTop: 15}}>
              <h5>{comment.email}</h5>
              <div>{comment.body}</div>
            </div>
          )}
        </div>
        } 
    </div>
  );
}

export default PostIdPage;
