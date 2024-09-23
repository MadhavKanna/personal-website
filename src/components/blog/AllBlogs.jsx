import React from 'react';

const blogContent = [
    {
        title: "Why reading React documentation will 5X your time investment - How does ",
        content: "I had this very interesting bug when I was optimizing a Flatlist for displaying items on the e-commerce marketplace I was developing - \
        Each item component in the list would get the whole stateful item list as a prop because I wanted to update the quantities of items that the user\
        was choosing and have that displayed. The issue was that since my item list was > 1000 items long, React would render the entire list any time I\
        updated the \
    "}]

const BlogCard = (blog, index) => {
    console.log(blog);
    return (<div className='container' key={index}>
        <h3>{blog.title}</h3>
        <div>{blog.content}</div>
        <div>wtf</div>
    </div>)
}


const AllBlogs = () => {
    return (
        <div className='Jumbotron col-md-12 col-lg-6'>
            <h1 className='standout'>Blog</h1>
            <div>
                {blogContent.map((blog, index) => {
                    return (<BlogCard blog={blog} key={index} />)
                })}
            </div>
        </div>)
}


export default AllBlogs; 