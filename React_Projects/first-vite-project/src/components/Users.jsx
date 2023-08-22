import { Fragment } from "react"
import { Outlet, useSearchParams } from "react-router-dom"

function Users() {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUser = searchParams.get('filter') === 'active'
  return (
    <Fragment>
        <div>
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>
        </div>
        <Outlet />
        <div>
          <button onClick={() => setSearchParams({filter: 'active'})}>Active User</button>
          <button onClick={() => setSearchParams({  })}>Reset Filter</button>
        </div>
        {
          showActiveUser ? 
          <h2>show active user</h2> : 
          <h2>show ALL user</h2>
        }
    </Fragment>
    
  )
}

export default Users