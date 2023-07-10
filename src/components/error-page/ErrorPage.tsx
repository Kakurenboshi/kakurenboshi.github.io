import { ErrorResponse } from "@remix-run/router";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import s from "./ErrorPage.module.scss";

const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse | Error;
  console.error(error);

  return (
    <div className={s.ErrorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {isRouteErrorResponse(error)
          ? (<i>{error.status} {error.statusText}</i>)
          : (<i>{error.message}</i>)
        }
      </p>
    </div>
  );
};

export default ErrorPage;