import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const fetchStates = Object.freeze({
    FETCHING: 'fetching',
    NOT_FETCHED: 'not-fetched',
    FETCHED: 'fetched'
});

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [fetchState, setFetchState] = useState(fetchStates.NOT_FETCHED);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            setFetchState(fetchStates.FETCHING);
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

            if (data.status === "ok") setUserData(data.data);

            if (data.data === "token expired") {
                alert("Token expired, login again");
                window.localStorage.clear();
                window.location.href = "./login";
            }
        } catch (error) {
            console.error("An error occurred while fetching user data", error);
        } finally {
            setFetchState(fetchStates.FETCHED);
        }
    };

    const logout = () => {
        setUserData(null);
        localStorage.removeItem("authToken");
    };

    return (
        <UserContext.Provider value={{ userData, fetchState, admin, logout, refetch: fetchUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserData = () => {
    return useContext(UserContext);
};
