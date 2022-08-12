import React, { useEffect, useMemo, useRef, useState } from "react";
import PostList from "./../components.js/PostList";
import "./../styles/App.css";
import PostForm from "./../components.js/PostForm";
import PostFilter from "./../components.js/PostFilter";
import MyModal from "./../components.js/UI/modal/MyModal";
import MyButton from "./../components.js/UI/button/MyButton";
import { usePosts } from "./../hooks/usePosts";
import PostService from "./../API/PostService";
import Loader from "./../components.js/UI/Loader/Loader";
import { useFetching } from "./../hooks/useFetching";
import { getPageCount, getPagesArray } from "./../utils/pages";
import Pagination from "./../components.js/UI/pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSeacrchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = (response.data.length = 100);
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const changePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    fetchPosts();
  }, [filter]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "20px" }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "10px 0" }} />

      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSeacrchedPosts}
          title={"Про js"}
        />
      )}

      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
