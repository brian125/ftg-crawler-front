import { HomeOutlined, UserOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="general-name">
          <h1>BUSCBIAN</h1>
        </div>
        <div className="general-description">
          <p>
            SISTEMA DE <b>BUSQUEDA</b>
          </p>
          <p>
            DE <b>CATÁLOGOS</b> EN <b>BIBLIOTECAS</b>
          </p>
          <p>
            DE <b>ANTIOQUIA</b>
          </p>
        </div>
        <img className="logo" src="../../public/mesa-logo.png" alt="Logo" />
      </div>
    </>
  );
};

export default Header;
