import { Link} from "react-router-dom"
// import { fetchTopics } from "../../utils/api"
import { useEffect, useState } from "react"

const Topics = () => {
// const [topics, setTopics] = useState([])
// const [isLoading, setIsLoading] = useState(true)

// useEffect(() => {
// setIsLoading(true);
// fetchTopics()
//     .then((topics)=> {
//         setIsLoading(false)
//         setTopics(topics)
//     }).catch((error) => {
//     console.error("Error fetching items:", error);
//   });
// }, [])


//   if (isLoading) {
//     return <p>loading...</p>;
//   }
return (
  <>
  <p>Test: entered Topics return statement</p>
  {/* <ul>

{ topics.map((topic) => {
   return <Link to={`/Topics/${topic.topic_name}`} key={topic.topic_name} topic = {topic}>
      <li  >{topic.topic_name}
      </li></Link>

})}</ul> */}


</>
)

}
export default Topics
