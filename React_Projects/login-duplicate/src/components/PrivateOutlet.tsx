import { Navigate, Outlet } from "react-router-dom";

// Function to get a cookie by name
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}



export default function PrivateOutlet() {
  const auth = getCookie("loginToken");

  return auth ? <Outlet /> : <Navigate to={"/signin"} />;
}
