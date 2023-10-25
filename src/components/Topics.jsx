import { Link} from "react-router-dom"
import { fetchTopics } from "../../utils/api"
import { useEffect, useState } from "react"

const Topics = () => {
const [topics, setTopics] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
setIsLoading(true);
fetchTopics()
    .then((topics)=> {
        setIsLoading(false) //this is a good place to console log to make sure you're getting the topics out correctly
        setTopics(topics)
    }).catch((error) => {
    console.error("Error fetching articles:", error);
  });
}, [])


  if (isLoading) {
    return <p>loading...</p>;
  }
return (
  <>
  <h2>Topics:</h2>
  <p>{topics.topics}</p>
<ul>
{ topics.map((topic) => {
   return <Link to={`/Topics/${topic.slug}`} key={topic.slug}>
      <li>{topic.slug}</li></Link>

})}</ul> 

</>
)
}
export default Topics
