import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_actions";

// eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": null}] 
export default function (SpecificComponent, option) {
  // null => 아무나 출입가능
  // true => 로그인한 유저만 출입 가능
  // false => 로그인한 유저는 출입 불가능
  function AuthCheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        if (response.payload.isAuth === undefined || response.payload.isAuth === null) {
          if (option) {
            props.history.push("/");
          }
        } else {
          if (option === false) {
            props.history.push("/board");
          }
        }
      });
    }, [dispatch, props.history]);

    
  const rpost = ({ api: api, data: data }, callback) => {
    console.log("rpost",api);
    console.log("rpost",data);


    // let server = URL;


    // let options =
    // {
    //     headers: {
    //       'Accept': '*/*'
    //     }
    // }

    // const url = `${server}${api}`;

    // await axios.post(url, data, options)
    //     .then((response) => {
    //         return callback(null, response);
    //     }).catch((err) => {
    //         return callback(err, null);
    //     }).finally(() => {
    //     });
}

    return <SpecificComponent rpost = {rpost} />;
  }

  return AuthCheck;
}
