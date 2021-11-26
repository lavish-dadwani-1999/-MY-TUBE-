import {Switch,Route,Redirect} from "react-router-dom"
import './App.css';
import Homepage from "./psges/Homepage"
import Navbar from "./component/Navbar"
import Loginpage from "./psges/Loginpage"
import Videodetails from "./psges/Videodetails";
import Search from "./component/Search";
import Serchdetailspage from "./psges/Serchdetailspage";
import Playlistpage from "./psges/Playlistpage";
import Profilepage from "./psges/Profilepage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
     <Switch>
       <Route exact path="/" component={Homepage} />
       <Route exact path="/profile" component={Profilepage} />
       <Route exact path="/login" component={Loginpage} />
       <Route exact path="/video/:videoid" component={Videodetails}/>
       <Route exact path="/playlist" component={Playlistpage}/>
       <Route exact path='/search/:searchquery' component={Serchdetailspage} />
       <Redirect to="/" />
     </Switch>
    </div>
  );
}

export default App;
