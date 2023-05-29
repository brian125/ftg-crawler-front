const Footer = () => {
  return (
    <div className="footer">
      <div className="text-footer">
        <p>Powered by</p>
        <img className="footer-img" src="/poli-jic.png" alt="" />
        <br />
        <small>Desarrolladores: Brayan Alexis Silva Ramirez - Mairon Dylan Arrieta Zorrilla</small>
        <br />
        <small>Todos los derechos reservados &copy; {new Date().getFullYear()}</small>
      </div>
    </div>
  );
};

export default Footer;
