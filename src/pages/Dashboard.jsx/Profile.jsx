import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  //   const { displayName, photoURL, email } = user;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={user?.photoURL ? user.photoURL : ""} alt="Shoes" />
      </figure>
      <div className="card-body">
        {user?.displayName && (
          <h2 className="card-title font-extrabold uppercase">
            {user.displayName}
          </h2>
        )}
        {user?.email && <p>{user.email}</p>}
        <div className="card-actions justify-end">
          <Link to="/dashboard/update">
            <button className="btn primary-btn">Edit Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
