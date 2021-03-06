import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./Menu.css"
function Menu({ selectedTaskName }) {
  return (
    <>
      {selectedTaskName}
      <ul>
        <li>
          <NavLink
            to="/hello"
            activeClassName="active"
            isActive={(_, { pathname }) =>
              pathname.match("/hello") || pathname === "/"
            }
          >
            Home
          </NavLink>{" "}
          {/* <Link to="/hello">Home</Link> */}
        </li>
        <li>
          <NavLink to="/tasks" activeClassName="active">
            My tasks
          </NavLink>
          {/* <Link to="/tasks"> My tasks</Link> */}
        </li>
      </ul>
    </>
  )
}

export default Menu
