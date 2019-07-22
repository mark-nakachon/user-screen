import React from "react";
import BookSlots from "./BookTicket/BookSlots";
import Checkout from "./BookTicket/Checkout";
import { Switch, Route} from "react-router-dom";
class App extends React.Component {
  render() {
      return (
       <Switch>
        <Route exact path="/" component={BookSlots} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
      )
  }
}
export default App;