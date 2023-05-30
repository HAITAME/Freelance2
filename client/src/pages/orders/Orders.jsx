// import React from "react";
// import { Link } from "react-router-dom";
// import "./Orders.scss";

// const Orders = () => {
//   const currentUser = {
//     id: 1,
//     username: "Anna",
//     isSeller: true,
//   };

//   return (
//     <div className="orders">
//       <div className="container">
//         <div className="title">
//           <h1>Orders</h1>
//         </div>
//         <table>
//           <tr>
//             <th>Image</th>
//             <th>Title</th>
//             <th>Price</th>
//             {<th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
//             <th>Contact</th>
//           </tr>
//           <tr>
//             <td>
//               <img
//                 className="image"
//                 src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//             </td>
//             <td>Stunning concept art</td>
//             <td>59.<sup>99</sup></td>
//             <td>Maria Anders</td>
//             <td>
//               <img className="message" src="/img/message.png" alt="" />
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <img
//                 className="image"
//                 src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//             </td>
//             <td>Ai generated concept art</td>
//             <td>79.<sup>99</sup></td>
//             <td>Francisco Chang</td>
//             <td>
//               <img className="message" src="/img/message.png" alt="" />
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <img
//                 className="image"
//                 src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//             </td>
//             <td>High quality digital character</td>
//             <td>110.<sup>99</sup></td>
//             <td>Roland Mendel</td>
//             <td>
//               <img className="message" src="/img/message.png" alt="" />
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <img
//                 className="image"
//                 src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//             </td>
//             <td>Illustration hyper realistic painting</td>
//             <td>39.<sup>99</sup></td>
//             <td>Helen Bennett</td>
//             <td>
//               <img className="message" src="/img/message.png" alt="" />
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <img
//                 className="image"
//                 src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//             </td>
//             <td>Original ai generated digital art</td>
//             <td>119.<sup>99</sup></td>
//             <td>Yoshi Tannamuri</td>
//             <td>
//               <img className="message" src="/img/message.png" alt="" />
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <img
//                 className="image"
//                 src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//             </td>
//             <td>Text based ai generated art</td>
//             <td>49.<sup>99</sup></td>
//             <td>Giovanni Rovelli</td>
//             <td>
//               <img className="message" src="/img/message.png" alt="" />
//             </td>
//           </tr>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Orders.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(`/conversations/`, {
          to: currentUser.seller ? buyerId : sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };

  return (
    <div className="orders">
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Error loading orders"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => (
                <tr key={order._id}>
                  <td>
                    <LazyLoadImage className="image" src={order.img} alt="" />
                  </td>
                  <td>{order.title}</td>
                  <td>{order.price}</td>
                  <td>
                    <Link to={`/message/${order.sellerId}`}>
                      <img
                        className="message"
                        src="/img/message.png"
                        alt=""
                        onClick={() => handleContact(order)}
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
