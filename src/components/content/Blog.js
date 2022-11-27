import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Blog = () => {
  return (
    <div>
     <div className="saif">
    <Link className='sub-about' to='oldblog'>Old Blog</Link>
    <Link className='sub-about' to='newblog'>New Blog</Link>
    </div>
      <h1>Blogs Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste eius doloribus, unde ab eligendi libero nisi nobis error pariatur rerum, ad esse neque minima aliquid? Ipsa enim beatae at, eum autem quae esse ipsam sequi quos deleniti dolore voluptatem molestiae culpa exercitationem aspernatur consequatur aperiam perspiciatis ad vero doloremque dolores. Sequi asperiores ex cumque blanditiis eveniet soluta illo atque? Culpa, voluptate! Consectetur nihil aliquid eum harum dolorum, facere quos officiis provident modi, iure unde placeat eaque, itaque cupiditate. Nulla quia nostrum aliquam quis numquam assumenda earum, aliquid provident voluptas deleniti repellat aut accusamus optio omnis amet illo aspernatur placeat.</p>
      <Outlet/>
    </div>
  )
}

export default Blog
