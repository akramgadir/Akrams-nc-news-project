import { Link} from "react-router-dom"
// import { fetchCategories } from "../../utils/api"
import { useEffect, useState } from "react"

const Categories = () => {
// const [categories, setCategories] = useState([])
// const [isLoading, setIsLoading] = useState(true)

// useEffect(() => {
// setIsLoading(true);
// fetchCategories()
//     .then((categories)=> {
//         setIsLoading(false)
//         setCategories(categories)
//     }).catch((error) => {
//     console.error("Error fetching items:", error);
//   });
// }, [])


//   if (isLoading) {
//     return <p>loading...</p>;
//   }
    return (
    <>
  <h2>Categories:</h2>
</>
)
}
export default Categories

/*    return (
    <>
    <ul>

{ categories.map((category) => {
     return <Link to={`/Categories/${category.category_name}`} key={category.category_name} category = {category}>
        <li  >{category.category_name}
        </li></Link>

})}</ul>


</>
) */
