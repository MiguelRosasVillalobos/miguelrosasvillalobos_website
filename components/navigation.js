// components/navigation.js
import Link from 'next/link';

const Navigation = () => (
  <nav className="navbar">
    <ul>
      <li>
        <Link href="/about" style={{textDecoration: 'none' }}> 
          <a1 className="nav-link">About</a1> </Link>
      </li>
      <li>
        <Link href="/publications" style={{textDecoration: 'none' }}>
          <a1 className="nav-link">Publications</a1> </Link>
      </li>
      <li>
        <Link href="/interests" style={{textDecoration: 'none' }}>
          <a1 className="nav-link">Interests</a1> </Link>
      </li>
      <li>
        <Link href="/gallery" style={{textDecoration: 'none' }}>
          <a1 className="nav-link">Gallery</a1> </Link>
      </li>
    </ul>
    <style jsx>{`
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        color: white;
        padding: 20px 20px;
        background: linear-gradient(to right, #34A0A4, #184E77);
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
      .nav-link {
        padding: 8px 12px; /* Añade relleno alrededor del texto */
        border-radius: 5px; /* Añade bordes redondeados */
        background-color: #52B69A; /* Color de fondo con transparencia */
        transition: background-color 0.3s; /* Transición suave del color de fondo */
      }

      .nav-link:hover {
        background-color: rgba(255, 255, 255, 0.3); /* Cambia el color de fondo al pasar el mouse */
      }

      a1 {
        color: #000;
        text-decoration: none;
        border : 2px solid #1A759F;
        font-family: 'Droid Sans', sans-serif;
      }

      a1:hover {
        color: #1A759F;
      }
    `}</style>
  </nav>
);

export default Navigation;
