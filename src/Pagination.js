import React from 'react';

const pageNums = {
  display: "flex",
  listStyle: "none",
  width: "50%",
  fontSize: "20px",
  justifyContent: "space-between",
  margin: "0 auto"

}


const Pagination = ({postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = []  //페이지 넘버 배열 설정
  for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
    pageNumbers.push(i)
  }
  
  return (
    <div>
      <div>
        <ul style={{...pageNums}}>
          {pageNumbers.map((number) =>
          <li key={number}>
            <span onClick={()=>{
              paginate(number)
              console.log(number)
              }}>{number}</span>
            </li> )}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;