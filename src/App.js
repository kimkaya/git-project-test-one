import styled from "styled-components";

import { BrowserRouter, BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Board from "./pages/Board";
import BoardDetail from "./components/Board/BoardDetail";
import MyPage from "./pages/MyPage";
import Auth from "./hoc/auth";

import axios from "axios";
import OfficeRegister from "./pages/OfficeRegister";
import OfficeBoard from "./pages/OfficeBoard";
import OfferBoard from "./pages/OfferBoard";

const Container = styled.div`
  margin: 10px auto;
  width: 370px;
`;

// function(url, data) {
//   let url ;
//   // const data = "/logout";
//   if(data === "/logout") {
//     const t = "/logout"
//     url = `1322,33,44,5/${t}`;
//     test(url);
//   }
// }




function App () {




    let rpost = ({ api: api, data: data }, callback) => {

    let server = URL;


    let options =
    {
        headers: {
          'Accept': '*/*'
        }
    }

    const url = `${server}${api}`;

    axios.post(url, data, options)
        .then((response) => {
            return callback(null, response);
        }).catch((err) => {
            return callback(err, null);
        }).finally(() => {
        });
}




  return (
    <Container>
      <BrowserRouter>
        <Router>
            <Route exact path="/" component={Auth(Login, false)} rpost ={rpost}></Route>
            <Route path="/register" component={Auth(Register, false)} rpost ={rpost} />
            <Route path="/officeregister" component={Auth(OfficeRegister, false)} rpost={rpost}/>
            <Route path="/board" component={Auth(Board, true)} />
            <Route path="/board/:boardId" component={Auth(BoardDetail, true)} />
            <Route path="/mypage" component={Auth(MyPage, true)} />
            <Route path="/officeboard" component={Auth(OfficeBoard, true)}/>
            <Route path="/offerboard" component={Auth(OfferBoard,true)}/>
        </Router>
      </BrowserRouter>
    </Container>
  );
}

export default App;
