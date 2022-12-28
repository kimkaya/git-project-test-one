import axios from "axios";

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const AUTH_USER = "AUTH_USER";
export const industry = "industry";

export function registerUser(dataToSubmit) {
  const request = axios
    .post("/register", dataToSubmit)
    .then((response) => response.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function registerOffice(dataToSubmit) {
  const request = axios
    .post("/officeregister", dataToSubmit)
    .then((response) => response.data);
  return {
    type: industry,
    payload: request,
  };
}


// async post({ api, data }, callback) {
//   let server = "/register";


//   let options =
//   {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//   }

//   const url = `${server}${api}`;

//   await axios.post(url, data, options)
//       .then((response) => {
//           return callback(null, response);
//       }).catch((err) => {
//           return callback(err, null);
//       }).finally(() => {
//       });
// }

export function loginUser(dataToSubmit) {
  const request = axios
    .post("/login", dataToSubmit)
    .then((response) => response.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

// userId, userPw, userEmail, userNickname, usableId

// Register() {

//   let api = "/register";

//   const data = {
//     member_id: String(this.userId), 
//     member_password: String(this.userPw), 
//     member_email: String(userEmail), 
//     member_nickname: String(userNickname), 
//     member_usableid: String(usableId)
//   };

//   this.Post({ api: api, data: data }, (err, response) => {
//       if (err) {
//           console.log("/register", err);
//           this.setRegister(null);
//       }
//       else {
//           if (response?.data?.result) {
//               console.log("/register",response?.data?.result[0]);
//               this.setRegister(response?.data?.result[0]);
//           }
//           else {
//               this.setRegister(null);
//           }
//       }
//   })

// }

// setRegister(RegisterObject) {
// this.RegisterStr = RegisterObject.Str ;
// }



export function logoutUser() {
  const request = axios.get("/logout")
    .then((response) => response.data);
  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get("/auth")
    .then((response) => response.data);
  return {
    type: AUTH_USER,
    payload: request,
  };
}

// export function test() {

  // const data ={
  //   member_no : parseInt(1),
  //   member_id: String("admin"),
  //   member_password: String("12345")
  // }
  // console.log(data);


  // const d2 = { 
  //   member_no : parseInt(1),
  //   member_id: String("admin"),
  //   member_password: String("12345")
  // }

//   axios.post("1334.20.1.80/logout",{
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data
//   })
//   .then(function (err, res) {
//     if(err) {
//       console.log(err);

//       const d2 = { 
//         member_no : -1,
//         member_id: null,
//         member_password: null
//       }

//       test2(d2)
//     }
//     else {
//       test2(res);
//     }
//   });
// }
