import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Posts from './Posts';

const App = () => {
  const [posts, setPosts] = useState([]); //초기 받아오는 데이터 설정 초기값은 []
  const [loading, setLoading] = useState(false); //
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(5); //한페이지당 렌더링 되는 데이터 수

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const responese = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(responese.data);
      setLoading(false)
    }
    fetchData()
  },[])

  //페이지숫자 리스트 구현 계산
  const indexOfLast = currentPage * postsPerPage    //페이지 마지막수 1 * 10
  const indexOfFirst = indexOfLast - postsPerPage;   // 페이지 첫번째 수10 - 10 = 0
  const currentPosts =  (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast)  //데이터를 0~10번째까지 슬라이스함
    return currentPosts;
  }
  console.log(currentPosts(posts))
  //console.log(posts)
  return (
    <div className='App'>
      <Posts posts={currentPosts(posts)} loading={loading}/>
      <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
      />
    </div>
  );
};

export default App;