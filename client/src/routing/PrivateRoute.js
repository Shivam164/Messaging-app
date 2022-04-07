import { useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { ProfileContext } from "../Contexts/GlobalState";

const PrivateRoute = ({ component: Component, ...rest }) => {

  const {signedIn} = useContext(ProfileContext);

  useEffect(() => {
    console.log("inside private route");
  })

  return (
    <Route
      {...rest}
      render={(props) =>
        signedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signup" />
        )
      }
    />
  );
};

export default PrivateRoute;