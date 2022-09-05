import React, {useState, useEffect} from "react"
import {makeApiClient} from "./lib/api"

let apiClient = makeApiClient("https://api.github.com")

// 5.10, 5.11
export default function App() {
  let [user, setUser] = useState(null)
  let [repos, setRepos] = useState(null)
  let [loading1, setLoading1] = useState(true)
  let [loading2, setLoading2] = useState(true)

  // Effect-1
  useEffect(_ => {
    apiClient.fetchJSON("/users/ivan-kleshnin")
      .then(user => {
        setUser(user)
        setLoading1(false)
      })
  }, [])

  // Effect-2
  useEffect(_ => {
    apiClient.fetchJSON("/users/ivan-kleshnin/repos?sort=created&per_page=5")
      .then(repos => {
        setRepos(repos)
        setLoading2(false)
      })
  }, [])

  if (loading1 || loading2) {
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
    <h3 className="h4">Repositories</h3>
    {repos.map(repo => {
      return <ul key={repo.id}>
        <li>
          <h4 className="h5"><a href={repo.html_url}>{repo.name}</a> ★ {repo.stargazers_count}</h4>
        </li>
      </ul>
    })}
  </div>
}

function Loading() {
  return <span>Loading...</span>
}
