/* eslint-disable react/no-unescaped-entities */
// /* eslint-disable react/no-unescaped-entities */
// import React ,{ useState } from 'react'
// import "./Gigs.scss"
// import {gigs} from "../../data"
// import GigCard from "../../components/gigCard/GigCard"

// export const Gigs= () => {
//   // right menu
//   const [Sort, setSort] = React.useState("sales") ;
//   const [open, setOpen] = React.useState(false) ;

//   const reSort =(type)=>{
//     setSort(type) 
//     setOpen(false)
//   }



//   return (
//     <div className='gigs'>
//       <div className="container">
//           <span className='breadcrumbs'>
//             Freelance {'>'} Graphics & Design
//           </span>
//           <h1>AI Artists</h1>
//           <p>
//             Explore the boundaries of art and technology with Freelance's AI artists 
//           </p>
//           <div className="menu">
//             <div className="left">
//                <input type="text" placeholder="min"/>
//                <input type="text" placeholder="max"/>  
//                <button>Applly</button>
//             </div>
//             <div className="right">
//                <span className='sortBy'>Sort By</span>
//                <span className='sortType'>{Sort === "sales" ? "Best Selling" : "Newest"}</span>
//                 <img src="/img/down.png" alt="" onClick={()=>setOpen(!open)}/>
//                 {open &&(<div className="rightMenu">
//                   {Sort === "sales" ? 
//                   <span onClick={()=>reSort("createdAt")}>Newest</span>
//                   :
//                   <span onClick={()=>reSort("sales")}>Best Selling</span>}
//                  </div>
//                 )}
//             </div>
//           </div>
//           <div className="cards">
//           {gigs.map((gig) => (
//             <GigCard key={gig.id} item={gig} />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Gigs


import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  console.log(data);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FreeLance {'>'} Graphics & Design {'>'}</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with FreeLance's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "loading"
            : error
            ? "Something went wrong!"
            
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
}

export default Gigs;