import { useState, useEffect } from "react";
import axios from "axios";

const useUserData = () => {
  const [userData, setUserData] = useState(null);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/userData",
          {
            token: window.localStorage.getItem("authToken"),
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        const data = response.data;
        console.log(data, "userData");

        if (data.data && data.data.userType === "Admin") {
          setAdmin(true);
        }

        setUserData(data.data);

        if (data.data === "token expired") {
          alert("Token expired, login again");
          window.localStorage.clear();
          window.location.href = "./login";
        }
      } catch (error) {
        console.error("An error occurred while fetching user data", error);
        // Handle errors appropriately here
      }
    };

    fetchUserData();
  }, []);

  return { userData, admin };
};

export default useUserData;
