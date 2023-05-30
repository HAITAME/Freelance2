import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";
import getCurrentUser from "../../utils/getCurrentUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { LazyLoadImage } from "react-lazy-load-image-component";


function MyGigs() {
  const currentUser = getCurrentUser();

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(["myGigs"], () =>
    newRequest.get(`/gigs?userId=${currentUser._id}`).then((res) => res.data)
  );

  console.log(currentUser._id);
  console.log(currentUser.username);
  console.log(data);

  const mutation = useMutation((id) => newRequest.delete(`/gigs/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="myGigs">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Gigs</h1>

            {currentUser.isSeller && (
              <Link to="/add">
                <button>Add New Gig</button>
              </Link>
            )}
          </div>
          <br/>
          <table>
            <tbody>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Sales</th>
                <th>Action</th>
              </tr>
              {data.map((gig) => (
                <tr key={gig._id}>
                  <td>
                    <LazyLoadImage className="image" src={gig.cover} alt="" />
                  </td>
                  <td>{gig.title}</td>
                  <td>{gig.price}</td>
                  <td>{gig.sales}</td>
                  <td>
                    <LazyLoadImage
                      className="delete"
                      src="./img/dell.png"
                      alt=""
                      onClick={() => handleDelete(gig._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MyGigs;
