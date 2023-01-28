import React from "react";
import { useRouteError } from "react-router-dom";
// useRouteError is a hook from react router dom
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <h2> Something went wrong!! Sorry about that</h2>
      <h3>
        {err.status + " " + err.data}
      </h3>
    </div>
  );
};
export default Error;
