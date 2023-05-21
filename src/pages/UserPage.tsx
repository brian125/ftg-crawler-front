import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { loadUsers } from "../app/middleware/payloadSearch";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { loginLoadSucces } from "../actions/LoginActions";
import { IUserLogin } from "../models/IUserLogin";
import { IRootReducer } from "../models/IRootReducer";
import { ILogin } from "../models/ILogin ";

const UserPage: React.FC = () => {
  const initialLogin: IUserLogin = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialLogin);
  const dispatch = useDispatch();

  const [form] = useForm();

  const handleSubmit = (e: any) => {
    setUserData(e);
    console.log(userData);
  };

  useEffect(() => {
    loadUsers().then((users) => {
      users.forEach((user: any) => {
        if (
          user.email === userData.email &&
          user.password === userData.password
        ) {
          dispatch(loginLoadSucces(true));
        }
      });
    });
  }, [userData]);

  const { loginResults } = useSelector<IRootReducer, ILogin>((state) => {
    console.log("LOGIN", state);
    return state.loginResults;
  });

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

      {loginResults && (
        <div className="host-urls">
          <Form
            form={form}
            labelCol={{ span: 7 }}
            style={{padding: 30}}
            onFinish={handleSubmit}
            autoComplete="off"
          >
            <Form.Item
              label="Politécnico Colombiano Jaime Isaza Cadavid"
              name="poli-jic-host"
              preserve
              rules={[
                {
                  required: true,
                  message:
                    "Por favor ingresa el host url",
                },
              ]}
            >
              <Input placeholder="Correo del usuario" />
            </Form.Item>
            <Form.Item
              label="Universidad de Antioquia"
              name="udea-host"
              preserve
              rules={[
                {
                  required: true,
                  message:
                    "Por favor ingresa el host url",
                },
              ]}
            >
              <Input placeholder="Correo del usuario" />
            </Form.Item>
            <Form.Item
              label="Instituto Tecnológico Metropolitano"
              name="itm-host"
              preserve
              rules={[
                {
                  required: true,
                  message:
                    "Por favor ingresa el host url",
                },
              ]}
            >
              <Input placeholder="Correo del usuario" />
            </Form.Item>
            <Form.Item
              label="Politécnico Grancolombiano"
              name="poli-granc-host"
              preserve
              rules={[
                {
                  required: true,
                  message:
                    "Por favor ingresa el host url",
                },
              ]}
            >
              <Input placeholder="Correo del usuario" />
            </Form.Item>
            <Form.Item
              label="Centro de Investigación y Planeamiento Administrativo"
              name="ceipa-host"
              preserve
              rules={[
                {
                  required: true,
                  message:
                    "Por favor ingresa el host url",
                },
              ]}
            >
              <Input placeholder="Correo del usuario" />
            </Form.Item>
            <Form.Item
              label="Colegiatura Colombiana"
              name="colegiatura-host"
              preserve
              rules={[
                {
                  required: true,
                  message:
                    "Por favor ingresa el host url",
                },
              ]}
            >
              <Input placeholder="Correo del usuario" />
            </Form.Item>
            <Form.Item
              label="Universidad Nacional de Colombia"
              name="unal-host"
              preserve
              rules={[
                {
                  required: true,
                  message:
                    "Por favor ingresa el host url",
                },
              ]}
              style={{ marginBottom: 0 }}
            >
              <Input placeholder="Correo del usuario" />
            </Form.Item>
          </Form>
        </div>
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
                  <Input style={{ width: "500px" }} placeholder="Contraseña" />
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
