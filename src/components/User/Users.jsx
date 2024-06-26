import React, { useEffect, useState } from "react";
import "./Users.css";
import Loader from "../Loader/Loader";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API = "https://602e7c2c4410730017c50b9d.mockapi.io/users";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    );
  }

  return (
    <>
    <h1 className="Users-heading">Users</h1>
    <div className="users-container">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <div className="user-profile-pic">
            <img src={user.avatar} alt="No Image Loaded" />
          </div>
          <div className="user-details">
            <div className="user-name">
              <h2>{user.profile.firstName } {user.profile.lastName}</h2> 
            </div>
            <div className="user-job-title">{user.jobTitle}</div>
            <div className="user-location">{user.profile.email}</div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Users;
