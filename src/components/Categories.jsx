import { useEffect } from "react";
import {  NavLink, useLocation, useNavigate } from "react-router-dom";


const Categories = ({categories}) => {
    
    const location = useLocation();

    
    // const tab = 
    // console.log(categories)
    // const uniqueCategories = [...new Set(categories.map(item => item.category))];
    return (
        <div className="col-span-1 flex flex-col">
        {categories.map((category) => (
          <NavLink
            className={({ isActive }) =>
              isActive || (category.slug === "all-products" && location.pathname === "/")
                ? "p-6 rounded-4xl duration-300 px-[22px] py-[13px] bg-[#9538E2] text-white w-[230px] my-3 text-[18px]"
                : "text-[#09080F99] p-6 duration-300 text-[18px] px-[22px] py-[13px] bg-[#09080F0D] rounded-4xl my-3 w-[230px]"
            }
            key={category.product_id}
            to={`/category/${category.slug}`}
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    );
};

export default Categories;

// import { Link } from "react-router-dom";

// const Categories = ({ categories }) => {
    
//     const uniqueCategories = [...new Set(categories.map(item => item.category))];

//     return (
//         <div>
//              <Link key="all" to="/category" style={{ margin: '5px', padding: '10px', border: '1px solid black', display: 'inline-block', textDecoration: 'none' }}>
//                 All
//             </Link>

//             {uniqueCategories.map(category => (
//                 <Link key={category} to={`/category?category=${category}`} style={{
//                     margin: '5px',
//                     padding: '10px', border: '1px solid black',
//                     // display: 'inline-block', 
//                 }}>
//                     {category}
//                 </Link>
//             ))}
//         </div>
//     );
// };

// export default Categories;
