import React, { useState } from 'react';
import styled from 'styled-components'
const StyledItemBoxDiv = styled.div`
    display : flex;
    justify-content: space-between;
    border : 1px solid black;
    padding : 10px;
    height : 100px;
    margin: 20px;
    align-item: center;
`;

const ListPage = () => {

    const [no,setNo] = useState(6);

    const [post,setPost] = useState({
        id:no,
        title:'',
        content:''
    })

    const [posts,setPosts] = useState([
       {id : 1,title:"내용1",content:"내용1"}, 
       {id : 2,title:"내용2",content:"내용2"}, 
       {id : 3,title:"내용3",content:"내용3"}, 
       {id : 4,title:"내용4",content:"내용4"}, 
       {id : 5,title:"내용5",content:"내용5"}, 
    ]);

    const handleWrite=(e)=>{
        // ListPage의 setPosts에 무엇을 담아야 함? 
        //let post = {id:6,title:"input값"};
        e.preventDefault();// form 태그가 하려는 액션을 중지 시켜야함
        setPosts([...posts,post]);
        setNo(no+1);
    }

    const handleForm = (e) => {

        console.log("name"+e.target.name);
        //computed property names 문법 (키값 동적할당)
        setPost({
            ...post,
            [e.target.name]:e.target.value,
            id:no
        });
    }
    return (
        <div>
            <h1>리스트</h1>
            <form onSubmit={handleWrite}>
                <input type='text' placeholder='제목을 입력하세요...' value={post.title} onChange={handleForm} name='title'/>
                <input type='text' placeholder='내용을 입력하세요...' value={post.content} onChange={handleForm} name='content'/>
                <button type='button' onClick={handleWrite}>글쓰기</button>
            </form>
            <hr/>
            {posts.map((post)=>
            <StyledItemBoxDiv>
                <div>
                번호 : {post.id} / 제목: {post.title} / 내용: {post.content}
                </div>
                <div>
                    <button>삭제</button>
                </div>    
            </StyledItemBoxDiv>)}
        </div>
    );
};

export default ListPage;