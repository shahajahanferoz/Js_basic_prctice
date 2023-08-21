import { Fragment } from "react"
import { Outlet } from "react-router-dom"

function Users() {
  return (
    <Fragment>
        <div>
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>
        </div>
        <Outlet />
    </Fragment>
    
  )
}

export default Users