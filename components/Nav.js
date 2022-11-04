import Link from "next/link";
import navStyles from "../styles/Nav.module.css"

const Nav = () => {

  return (

    <nav>
      <div className="nav">
        <Link className={navStyles.link} href='/'>
          <span className="link">Star Wars API</span>
        </Link>
        <Link href='/people'>
          <span className="link">People</span>
        </Link>
      </div>


      {/* jsx styling */}
      <style jsx>
        {`
             *{
              font-family: 'Lato', sans-serif;
             }

             .nav{
              display: flex;
              align-items: center;
              justify-content: space-evenly;
              padding: 12px;
              color: darkgrey;
              background: white;
             }

             .link{
              text-decoration: none;
              color: #96908F;
              cursor: pointer;
              font-size: 1.2rem;
             }

             .link:hover{
              transition: all 0.3s ease;
               color: rgb(15, 15, 15);
             }

            `}
      </style>
    </nav>
  )
}

export default Nav