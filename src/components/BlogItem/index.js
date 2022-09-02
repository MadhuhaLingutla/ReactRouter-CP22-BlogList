// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {item} = props
  const {id, title, description, publishedDate} = item

  return (
    <li className="blog-item">
      <div className="date-title-container">
        <h1 className="blog-title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </li>
  )
}

export default BlogItem
