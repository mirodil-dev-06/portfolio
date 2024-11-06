import React from 'react'
import { Container } from '../../utils/Utils'
import '../blog/Blog.css' // Assuming you have styles in Blog.scss
import data from '../../../data'

const UserList = ({ users }) => {
  return (
      <div className='box'>
        {users.map(user => (
          <a key={user.id} href={user.link} target="_blank" className='box__content'>
            <img src={user.img} alt="" />
            <hr />
            <div className="box__content-info">
           <h2>{user.title}</h2> 
           <p className="box__content-info__subtitle"> {user.desc.length > 150 ? user.desc.slice(0, 180) + "..." : user.desc}</p> <br />
           </div>
          </a> 
        ))}
      </div>
  );
};

const Blog = () => {
  return (
    <div className='blog'>
        <Container>
            <h1 className='blog__title'><span>my</span>  bolg</h1>
            <UserList users={data.users} className="blog__item"/>
        </Container>
    </div>
  );
};

export default Blog;
