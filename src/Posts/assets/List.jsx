import { useState, useEffect } from 'react';
import Bar from './Bar'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const [lastPage, setLastPage] = useState(20);

    //setLastPage(Math.ceil(posts.length/postsPerPage))

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData(); 
    }, []); 
    return (
      <div>
        <Bar page={page} setPage={setPage} lastPage={lastPage} setPostsPerPage={setPostsPerPage}/>
        <div className='PostsBackground'>
        {posts.map((post, index) => (
          index >=page*postsPerPage-postsPerPage && index <= page*postsPerPage-1? 
          <div className='Post' key={index}>
            <h3>{post.id}. {post.title}</h3>
            <p>{post.body}</p>
          </div>
          :
          <></>
        ))}
        </div>
        <Bar page={page} setPage={setPage} lastPage={lastPage} setPostsPerPage={setPostsPerPage}/>
      </div>
    );
  };
  
  export default Posts;