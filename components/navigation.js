// components/navigation.js
import Link from 'next/link';

const Navigation = () => (
  <nav className="navbar">
    <ul>
      <li>
        <Link href="/about"> 
          <a>About</a> </Link>
      </li>
      <li>
        <Link href="/publications">
          <a>Publications</a> </Link>
      </li>
      <li>
        <Link href="/interests">
          <a>Interests</a> </Link>
      </li>
      <li>
        <Link href="/gallery">
          <a>Gallery</a> </Link>
      </li>
    </ul>
    <style jsx>{`
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        color: white;
        padding: 10px 20px;
        background: linear-gradient(to right, #bec9ff, #001270);
        z-index: 1000;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
      }

      li {
        margin-right: 20px;
      }

      a {
        color: blue;
        text-decoration: none;
        transition: color 0.3s;
      }

      a:hover {
        color: #ffcc00;
      }
    `}</style>
  </nav>
);

export default Navigation;
