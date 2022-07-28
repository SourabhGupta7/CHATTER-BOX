import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFollowerAccounts } from "../feature/followingAccounts/followingAccountSlice";
import FollowerAccountItem from "./FollowerAccountItem";

export default function FollowerList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeFollowerAccounts = useSelector(
    (state) => state.followingAccountReducer.followerAccounts
  );

  useEffect(() => {
    if (localStorage.getItem("Token") === null) {
      navigate("/unauthorized");
    }
    
    dispatch(getFollowerAccounts());
  }, []);
//JSX Part
  return (
    <div>
      <h1 style={{color: "#D7DF22"}}> List Of Followers</h1>
      {storeFollowerAccounts ? (
        storeFollowerAccounts.map((followerAccount) => {
          return (
            <FollowerAccountItem key={followerAccount.id}  id={followerAccount.id}  firstName={followerAccount.firstName} lastName={followerAccount.lastName} />
          );
        })
      ) : (
        <span></span>
      )}
    </div>
  );
}
 