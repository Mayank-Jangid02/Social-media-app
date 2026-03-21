import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
export default function Navbar() {
  const dispatch = useDispatch();
  const pages = useSelector(state => state.pages);
  return (
    <nav>
      <ul>
        <li>

          {
            pages.map((page,index) => (
              <Link key={index} to={page}>
                {
               page
                }
              </Link>
            ))
          }
        </li>
      </ul>
    </nav>
  )
    
}
