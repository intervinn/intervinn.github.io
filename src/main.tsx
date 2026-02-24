import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import { Route, Router, Switch } from 'wouter'
import NotFound from './pages/NotFound.tsx'
import { useHashLocation } from 'wouter/use-hash-location'
import Posts from './pages/Posts.tsx'
import GetPost from './pages/GetPost.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router hook={useHashLocation}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/posts"} component={Posts} />
        <Route path={"/posts/:name"} component={GetPost} />
        <Route><NotFound/></Route>
      </Switch>
    </Router>
  </StrictMode>,
)
