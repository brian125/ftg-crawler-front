const Header = () => {
  return (
    <>
      <div className="header">
        <div className="general-name">
          <h1>SIBUC</h1>
        </div>
        <div className="general-description">
          <p>
            SISTEMA DE <b>BÚSQUEDA</b>
          </p>
          <p>
            DE <b>CATÁLOGOS</b> EN LA MESA 
          </p>
          <p>
          DE <b>BIBLIOTECAS</b> DE <b>ANTIOQUIA</b>
          </p>
        </div>
        <img className="logo" src="/mesa-logo.png" alt="Logo" />
      </div>
    </>
  );
};

export default Header;
