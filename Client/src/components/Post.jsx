import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <div>
     <Link to="/">
     <div className="post">
        <div className="post_img">
            <img src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
        </div>
        <div className="post_body">
          <div className="topic">
              <h2>The Modern React Framework usage in 2023: The Easy Way</h2>
          </div>
         <div className="content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut maiores inventore id ex, 
          dignissimos dolore repellendus dicta atque quas ipsam...
         </div>
          <div className="toast">
              <span className='tagname'>#react</span>
              <span className='tagname'>#javaScript</span>
              <span className='tagname'>#Leravel</span>
          </div>
          <div className="desc">
              <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--R7e2_9ta--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/671687/7242818e-37e5-4696-939c-8d81e821a376.jpeg" alt="author" />
              <div className="name-date">
              <small className='author'>@Arthur </small>
              <small className='date'>Feb 5 <span>(5 hours ago)</span></small>
              </div>
          </div>
        </div>
      </div>     
     </Link>
    </div>
  )
}

export default Post
