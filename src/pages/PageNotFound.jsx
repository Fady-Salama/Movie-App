import { Link } from "react-router-dom";

import { IoIosArrowRoundBack } from "react-icons/io";

function PageNotFound() {
  return (
    <center className="not-found-page">
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <p>It seems you are tying to access a url that does not exist.</p>
      <Link to="/">
        <IoIosArrowRoundBack /> Back to Home Page
      </Link>
    </center>
  );
}

export default PageNotFound;
