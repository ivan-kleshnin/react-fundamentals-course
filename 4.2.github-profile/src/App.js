import React, {useState, useEffect} from "react"
import {makeApiClient} from "./lib/api"

let apiClient = makeApiClient("https://api.github.com")

// 5.6, 5.7, 5.8
export default function App() {
  let [user, setUser] = useState(null)
  let [loading, setLoading] = useState(true)

  useEffect(_ => {
    apiClient.fetchJSON("/users/ivan-kleshnin")
      .then(user => {
        setUser(user)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Loading/>
  }

  return <div className="p-3">
    <h1 className="h3">GitHub Profile</h1>
    <img width="150px" src={user.avatar_url}/>
    <h2 className="h4">
      {user.name}
    </h2>
    <p>
      {user.bio}
    </p>
    <pre className="p-3" style={{background: "gray", color: "white"}}><code>
      {JSON.stringify(user, null, 2)}
    </code></pre>
  </div>
}

function Loading() {
  return <span>Loading...</span>
}
