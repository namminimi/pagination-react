import React from 'react';

const Posts = ({posts, loading}) => {
  console.log(posts)
  if(loading) return <div> 로딩중입니다....</div>
  if(!posts) return <div>데이터가 없습니다...</div> 
  return (
    <ul>
      {posts.map(data=><li key={data.id}>{data.title}</li>)}
    </ul>
  );
};

export default Posts;