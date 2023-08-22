import {useState} from 'react'

export default function Login() {
    const [user, setUser] = useState('')

    const handleLogin = ()=> {
        
    }
  return (
    <div>
        <label>
            UserName: <input type='text' onChange={(e) => setUser(e.target.value)} />
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
