import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import {
  loadHostUrls,
  loadUsers,
  updateHostUrls,
} from "../app/middleware/payloadSearch";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { loginLoadSucces } from "../actions/LoginActions";
import { IUserLogin } from "../models/IUserLogin";
import { IRootReducer } from "../models/IRootReducer";
import { ILogin } from "../models/ILogin ";
import { IHost } from "../models/IHost";
import { forEach } from "@angular/router/src/utils/collection";

const UserPage: React.FC = () => {
  const initialLogin: IUserLogin = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialLogin);

  const [polijicUrl, setPolijicUrl] = useState("");
  const [udeaUrl, setUdeaUrl] = useState("");
  const [itmUrl, setItmUrl] = useState("");
  const [poligranUrl, setPoligranUrl] = useState("");
  const [ceipaUrl, setCeipaUrl] = useState("");
  const [colegiaturaUrl, setColegiaturaUrl] = useState("");
  const [unalUrl, setUnalUrl] = useState("");

  const dispatch = useDispatch();

  const [form] = useForm();

  const handleSubmit = (e: any) => {
    setUserData(e);
  };

  useEffect(() => {
    loadUsers().then((users) => {
      users.forEach((user: any) => {
        if (
          user.email === userData.email &&
          user.password === userData.password
        ) {
          loadHostUrls(dispatch);
          dispatch(loginLoadSucces(true));
        }
      });
    });
  }, [userData]);

  const { loginResults } = useSelector<IRootReducer, ILogin>((state) => {
    return state.loginResults;
  });

  const { hostResults } = useSelector<IRootReducer, IHost>((state) => {
    return state.hostResults;
  });

  useEffect(() => {
    if (hostResults) {
      hostResults.forEach((host: any) => {
        if (
          host.universityName === "Politécnico Colombiano Jaime Isaza Cadavid"
        ) {
          setPolijicUrl(host.hostUrl);
        }
        if (host.universityName === "Universidad de Antioquia") {
          setUdeaUrl(host.hostUrl);
        }
        if (host.universityName === "Instituto Tecnológico Metropolitano") {
          setItmUrl(host.hostUrl);
        }
        if (host.universityName === "Politécnico Grancolombiano") {
          setPoligranUrl(host.hostUrl);
        }
        if (
          host.universityName ===
          "Centro de Investigación y Planeamiento Administrativo"
        ) {
          setCeipaUrl(host.hostUrl);
        }
        if (host.universityName === "Colegiatura Colombiana") {
          setColegiaturaUrl(host.hostUrl);
        }
        if (host.universityName === "Universidad Nacional de Colombia") {
          setUnalUrl(host.hostUrl);
        }
      });
    }
  }, [hostResults]);

  const handleSubmitUrls = (e: any) => {
    if (e) {
      hostResults.forEach((host: any) => {
        if (
          e["poli-jic-host"] &&
          host.universityName === "Politécnico Colombiano Jaime Isaza Cadavid"
        ) {
          updateHostUrls({ hostUrl: e["poli-jic-host"] }, host._id);
          host.hostUrl = e["poli-jic-host"];
        }
        if (
          e["udea-host"] &&
          host.universityName === "Universidad de Antioquia"
        ) {
          updateHostUrls({ hostUrl: e["udea-host"] }, host._id);
          host.hostUrl = e["udea-host"];
        }
        if (
          e["itm-host"] &&
          host.universityName === "Instituto Tecnológico Metropolitano"
        ) {
          updateHostUrls({ hostUrl: e["itm-host"] }, host._id);
          host.hostUrl = e["itm-host"];
        }
        if (
          e["poli-granc-host"] &&
          host.universityName === "Politécnico Grancolombiano"
        ) {
          updateHostUrls({ hostUrl: e["poli-granc-host"] }, host._id);
          host.hostUrl = e["poli-granc-host"];
        }
        if (
          e["ceipa-host"] &&
          host.universityName ===
            "Centro de Investigación y Planeamiento Administrativo"
        ) {
          updateHostUrls({ hostUrl: e["ceipa-host"] }, host._id);
          host.hostUrl = e["ceipa-host"];
        }
        if (
          e["colegiatura-host"] &&
          host.universityName === "Colegiatura Colombiana"
        ) {
          updateHostUrls({ hostUrl: e["colegiatura-host"] }, host._id);
          host.hostUrl = e["colegiatura-host"];
        }
        if (
          e["unal-host"] &&
          host.universityName === "Universidad Nacional de Colombia"
        ) {
          updateHostUrls({ hostUrl: e["unal-host"] }, host._id);
          host.hostUrl = e["unal-host"];
        }
      });
    }
  };

  const logoutHandler = (e: any) => {
    if (e) {
      dispatch(loginLoadSucces(false));
    }
  };

  return (
    <>
      <div className="urls">
        <Link to="/" className="complete-list">
          <ArrowLeftOutlined />
          <span>
            <b> Regresar</b>
          </span>
        </Link>
        {loginResults && (
          <Button onClick={logoutHandler}> Cerrar sesión </Button>
        )}
      </div>

      {loginResults && hostResults && polijicUrl && (
        <>
          <h1 className="admin-title">Administración de URL'S</h1>
          <div className="host-urls">
            <Form
              form={form}
              labelCol={{ span: 7 }}
              style={{ padding: 30 }}
              onFinish={handleSubmitUrls}
              autoComplete="off"
            >
              <Form.Item
                label="Politécnico Colombiano Jaime Isaza Cadavid"
                name="poli-jic-host"
                preserve
              >
                <Input defaultValue={polijicUrl} placeholder="Host url" />
              </Form.Item>
              <Form.Item
                label="Universidad de Antioquia"
                name="udea-host"
                preserve
              >
                <Input
                  defaultValue={udeaUrl}
                  placeholder="Correo del usuario"
                />
              </Form.Item>
              <Form.Item
                label="Instituto Tecnológico Metropolitano"
                name="itm-host"
                preserve
              >
                <Input defaultValue={itmUrl} placeholder="Correo del usuario" />
              </Form.Item>
              <Form.Item
                label="Politécnico Grancolombiano"
                name="poli-granc-host"
                preserve
              >
                <Input
                  defaultValue={poligranUrl}
                  placeholder="Correo del usuario"
                />
              </Form.Item>
              <Form.Item
                label="Centro de Investigación y Planeamiento Administrativo"
                name="ceipa-host"
                preserve
              >
                <Input
                  defaultValue={ceipaUrl}
                  placeholder="Correo del usuario"
                />
              </Form.Item>
              <Form.Item
                label="Colegiatura Colombiana"
                name="colegiatura-host"
                preserve
              >
                <Input
                  defaultValue={colegiaturaUrl}
                  placeholder="Correo del usuario"
                />
              </Form.Item>
              <Form.Item
                label="Universidad Nacional de Colombia"
                name="unal-host"
                preserve
                style={{ marginBottom: 0 }}
              >
                <Input
                  defaultValue={unalUrl}
                  placeholder="Correo del usuario"
                />
              </Form.Item>
              <div className="btn-edit-urls">
                <Button type="primary" htmlType="submit">
                  Guardar
                </Button>
              </div>
            </Form>
          </div>
        </>
      )}

      <div className="space-between"></div>

      <div className="users-container">
        <div className="login-box">
          {!loginResults && (
            <>
              <h2 className="login-title">Iniciar sesión</h2>
              <Form
                form={form}
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}
                style={{ width: 686, margin: "30px 20px" }}
                onFinish={handleSubmit}
                autoComplete="off"
              >
                <Form.Item
                  label="Correo"
                  name="email"
                  preserve
                  rules={[
                    {
                      required: true,
                      message:
                        "Por favor ingresa el correo del usuario a registrar",
                    },
                  ]}
                >
                  <Input
                    style={{ width: "500px" }}
                    placeholder="Correo del usuario"
                  />
                </Form.Item>

                <Form.Item
                  label="Contraseña"
                  name="password"
                  preserve
                  rules={[
                    {
                      required: true,
                      message:
                        "Por favor ingresa la contraseña del usuario a registrar",
                    },
                  ]}
                >
                  <Input
                    type="password"
                    style={{ width: "500px" }}
                    placeholder="Contraseña"
                  />
                </Form.Item>

                <div className="btn-login">
                  <Button type="primary" htmlType="submit">
                    Iniciar sesión
                  </Button>
                </div>
              </Form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserPage;
