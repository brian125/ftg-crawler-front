import {
  LoadingOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootReducer } from "../models/IRootReducer";
import { IStatePoliSearch } from "../models/IStatePoliSearch";
import {
  loadCeipaResults,
  loadColegiaturaResults,
  loadItmResults,
  loadPoliJicResults,
  loadPoligrancResults,
  loadUdeAResults,
  loadUnalResults,
} from "../app/middleware/payloadSearch";
import { Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { IStateUdeASearch } from "../models/IStateUdeASearch";
import { IStateItmSearch } from "../models/IStateItmSearch";
import { IStatePoligrancSearch } from "../models/IStatePoligrancSearch";
import { IStateCeipaSearch } from "../models/IStateCeipaSearch";
import { IStateColegiaturaSearch } from "../models/IStateColegiaturaSearch";
import { IStateUnalSearch } from "../models/IStateUnalSearch";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const [keyword, setKeyword] = useState("");

  const [form] = useForm();

  const dispatch = useDispatch();
  const { poliResults, poliLoading } = useSelector<
    IRootReducer,
    IStatePoliSearch
  >((state) => {
    return state.poliResults;
  });

  const { udeaResults, udeaLoading } = useSelector<
    IRootReducer,
    IStateUdeASearch
  >((state) => {
    return state.udeaResults;
  });

  const { itmResults, itmLoading } = useSelector<IRootReducer, IStateItmSearch>(
    (state) => {
      return state.itmResults;
    }
  );

  const { poligrancResults, poligrancLoading } = useSelector<
    IRootReducer,
    IStatePoligrancSearch
  >((state) => {
    return state.poligrancResults;
  });

  const { ceipaResults, ceipaLoading } = useSelector<
    IRootReducer,
    IStateCeipaSearch
  >((state) => {
    return state.ceipaResults;
  });

  const { colegiaturaResults, colegiaturaLoading } = useSelector<
    IRootReducer,
    IStateColegiaturaSearch
  >((state) => {
    return state.colegiaturaResults;
  });

  const { unalResults, unalLoading } = useSelector<
    IRootReducer,
    IStateUnalSearch
  >((state) => {
    return state.unalResults;
  });

  const handleKeywordChange = (e: any) => {
    console.log(e.keyword);
    setKeyword(e.keyword);
    form.resetFields();
  };

  useEffect(() => {
    console.log("Entra cada que hay cambio o no?", keyword);
    if (keyword !== "") {
      loadPoliJicResults(dispatch, keyword);
      loadUdeAResults(dispatch, keyword);
      loadItmResults(dispatch, keyword);
      // loadSanbuenaResults(dispatch, keyword);
      loadPoligrancResults(dispatch, keyword);
      loadCeipaResults(dispatch, keyword);
      loadColegiaturaResults(dispatch, keyword);
      loadUnalResults(dispatch, keyword);
    }
  }, [keyword]);

  const handleCancel = () => {
    form.resetFields();
  };

  return (
    <>
      <Link to="users" className="nav">
        <UserOutlined className="nav-icons" />
      </Link>
      <div className="home-container">
        <h1>Buscar recurso</h1>
        <br />
        <Form
          form={form}
          onFinish={handleKeywordChange}
          onFinishFailed={handleCancel}
          autoComplete="off"
        >
          <Form.Item
            name="keyword"
            preserve
            rules={[
              {
                required: true,
                message: "Por favor ingresa el recurso a buscar",
              },
            ]}
          >
            <Input
              style={{ width: "50%" }}
              addonAfter={<SearchOutlined />}
              placeholder="Consultar..."
              disabled={
                poliLoading ||
                udeaLoading ||
                itmLoading ||
                poligrancLoading ||
                ceipaLoading ||
                colegiaturaLoading ||
                unalLoading
              }
            />
          </Form.Item>
        </Form>

        {!(
          poliResults ||
          udeaResults ||
          itmResults ||
          poligrancResults ||
          ceipaResults ||
          colegiaturaResults ||
          unalResults
        ) &&
          !(
            poliLoading ||
            udeaLoading ||
            itmLoading ||
            poliLoading ||
            ceipaLoading ||
            colegiaturaLoading ||
            unalLoading
          ) && (
            <div>
              <h2> Aún no has realizado una busqueda </h2>
              <img
                src="../../public/no-search-imgage.png"
                className="no-search-img"
              />
            </div>
          )}

        <div className="cards">
          {/* Cards Poli-JIC*/}
          {poliLoading && !poliResults && (
            <LoadingOutlined className="initial-loading" />
          )}
          {poliResults && (
            <Link
              to={
                poliResults !== "No hay datos para la busqueda realizada"
                  ? "poli-jic"
                  : "/"
              }
              className="card-container"
            >
              {poliLoading && <LoadingOutlined className="loading" />}
              {!poliLoading &&
                poliResults !== "No hay datos para la busqueda realizada" && (
                  <img
                    src={`../../public/${poliResults.nameU}.png`}
                    className="card-img"
                  />
                )}
              {!poliLoading &&
                poliResults === "No hay datos para la busqueda realizada" && (
                  <div>
                    <img src="../../public/poli-jic.png" className="card-img" />
                    <p>{poliResults}</p>
                  </div>
                )}
              <div className="card-description">
                {poliLoading && (
                  <p>
                    Recursos Encontrados: <b>0</b>
                  </p>
                )}
                {!poliLoading && (
                  <p>
                    Recursos Encontrados:{" "}
                    <b>{poliResults.records ? poliResults.totalRecords : 0}</b>
                  </p>
                )}
              </div>
            </Link>
          )}

          {/* Cards UdeA*/}
          {udeaLoading && !udeaResults && (
            <LoadingOutlined className="initial-loading" />
          )}
          {udeaResults && (
            <Link
              to={
                udeaResults !== "No hay datos para la busqueda realizada"
                  ? "udea"
                  : "/"
              }
              className="card-container"
            >
              {udeaLoading && <LoadingOutlined className="loading" />}
              {!udeaLoading &&
                udeaResults !== "No hay datos para la busqueda realizada" && (
                  <img
                    src={`../../public/${udeaResults.nameU}.png`}
                    className="card-img"
                  />
                )}
              {!udeaLoading &&
                udeaResults === "No hay datos para la busqueda realizada" && (
                  <div>
                    <img src="../../public/udea.png" className="card-img" />
                    <p>{udeaResults}</p>
                  </div>
                )}
              <div className="card-description">
                {udeaLoading && (
                  <p>
                    Recursos Encontrados: <b>0</b>
                  </p>
                )}
                {!udeaLoading && (
                  <p>
                    Recursos Encontrados:{" "}
                    <b>{udeaResults.records ? udeaResults.totalRecords : 0}</b>
                  </p>
                )}
              </div>
            </Link>
          )}

          {/* Cards ITM*/}
          {itmLoading && !itmResults && (
            <LoadingOutlined className="initial-loading" />
          )}
          {itmResults && (
            <Link
              to={
                itmResults !== "No hay datos para la busqueda realizada"
                  ? "itm"
                  : "/"
              }
              className="card-container"
            >
              {itmLoading && <LoadingOutlined className="loading" />}
              {!itmLoading &&
                itmResults !== "No hay datos para la busqueda realizada" && (
                  <img
                    src={`../../public/${itmResults.nameU}.png`}
                    className="card-img"
                  />
                )}
              {!itmLoading &&
                itmResults === "No hay datos para la busqueda realizada" && (
                  <div>
                    <img src="../../public/itm.png" className="card-img" />
                    <p>{itmResults}</p>
                  </div>
                )}
              <div className="card-description">
                {itmLoading && (
                  <p>
                    Recursos Encontrados: <b>0</b>
                  </p>
                )}
                {!itmLoading && (
                  <p>
                    Recursos Encontrados:{" "}
                    <b>{itmResults.records ? itmResults.totalRecords : 0}</b>
                  </p>
                )}
              </div>
            </Link>
          )}

          {/* Cards SanBuena
        {sanbuenaLoading && !sanbuenaResults && (
          <LoadingOutlined className="initial-loading" />
        )}
        {sanbuenaResults && (
          <div className="card-container">
            {sanbuenaLoading && <LoadingOutlined className="loading" />}
            {!sanbuenaLoading &&
              sanbuenaResults !== "No hay datos para la busqueda realizada" && (
                <img
                  src={`../../public/${sanbuenaResults.nameU}.png`}
                  className="card-img"
                />
              )}
            {!sanbuenaLoading &&
              sanbuenaResults === "No hay datos para la busqueda realizada" && (
                <div>
                  <CloseCircleOutlined className="loading" />
                  <p>{sanbuenaResults}</p>
                </div>
              )}
            <div className="card-description">
              {sanbuenaLoading && (
                <p>
                  Recursos Encontrados: <b>0</b>
                </p>
              )}
              {!sanbuenaLoading && (
                <p>
                  Recursos Encontrados:{" "}
                  <b>
                    {sanbuenaResults.records ? sanbuenaResults.totalRecords : 0}
                  </b>
                </p>
              )}
            </div>
          </div>
        )} */}

          {/* Cards Poli-gran-colombiano*/}
          {poligrancLoading && !poligrancResults && (
            <LoadingOutlined className="initial-loading" />
          )}
          {poligrancResults && (
            <Link
              to={
                poligrancResults !== "No hay datos para la busqueda realizada"
                  ? "poli-gc"
                  : "/"
              }
              className="card-container"
            >
              {poligrancLoading && <LoadingOutlined className="loading" />}
              {!poligrancLoading &&
                poligrancResults !==
                  "No hay datos para la busqueda realizada" && (
                  <img
                    src={`../../public/${poligrancResults.nameU}.png`}
                    className="card-img"
                  />
                )}
              {!poligrancLoading &&
                poligrancResults ===
                  "No hay datos para la busqueda realizada" && (
                  <div>
                    <img
                      src="../../public/poli-gran-colombiano.png"
                      className="card-img"
                    />
                    <p>{poligrancResults}</p>
                  </div>
                )}
              <div className="card-description">
                {poligrancLoading && (
                  <p>
                    Recursos Encontrados: <b>0</b>
                  </p>
                )}
                {!poligrancLoading && (
                  <p>
                    Recursos Encontrados:{" "}
                    <b>
                      {poligrancResults.records
                        ? poligrancResults.records.length
                        : 0}
                    </b>
                  </p>
                )}
              </div>
            </Link>
          )}

          {/* Cards Ceipa*/}
          {ceipaLoading && !ceipaResults && (
            <LoadingOutlined className="initial-loading" />
          )}
          {ceipaResults && (
            <Link
              to={
                ceipaResults !== "No hay datos para la busqueda realizada"
                  ? "ceipa"
                  : "/"
              }
              className="card-container"
            >
              {ceipaLoading && <LoadingOutlined className="loading" />}
              {!ceipaLoading &&
                ceipaResults !== "No hay datos para la busqueda realizada" && (
                  <img
                    src={`../../public/${ceipaResults.nameU}.png`}
                    className="card-img"
                  />
                )}
              {!ceipaLoading &&
                ceipaResults === "No hay datos para la busqueda realizada" && (
                  <div>
                    <img src="../../public/ceipa.png" className="card-img" />
                    <p>{ceipaResults}</p>
                  </div>
                )}
              <div className="card-description">
                {ceipaLoading && (
                  <p>
                    Recursos Encontrados: <b>0</b>
                  </p>
                )}
                {!ceipaLoading && (
                  <p>
                    Recursos Encontrados:{" "}
                    <b>
                      {ceipaResults.records ? ceipaResults.totalRecords : 0}
                    </b>
                  </p>
                )}
              </div>
            </Link>
          )}

          {/* Cards Colegiatura*/}
          {colegiaturaLoading && !colegiaturaResults && (
            <LoadingOutlined className="initial-loading" />
          )}
          {colegiaturaResults && (
            <Link
              to={
                colegiaturaResults !== "No hay datos para la busqueda realizada"
                  ? "colegiatura"
                  : "/"
              }
              className="card-container"
            >
              {colegiaturaLoading && <LoadingOutlined className="loading" />}
              {!colegiaturaLoading &&
                colegiaturaResults !==
                  "No hay datos para la busqueda realizada" && (
                  <img
                    src={`../../public/${colegiaturaResults.nameU}.png`}
                    className="card-img"
                  />
                )}
              {!colegiaturaLoading &&
                colegiaturaResults ===
                  "No hay datos para la busqueda realizada" && (
                  <div>
                    <img
                      src="../../public/colegiatura.png"
                      className="card-img"
                    />
                    <p>{colegiaturaResults}</p>
                  </div>
                )}
              <div className="card-description">
                {colegiaturaLoading && (
                  <p>
                    Recursos Encontrados: <b>0</b>
                  </p>
                )}
                {!colegiaturaLoading && (
                  <p>
                    Recursos Encontrados:{" "}
                    <b>
                      {colegiaturaResults.records
                        ? colegiaturaResults.records.length
                        : 0}
                    </b>
                  </p>
                )}
              </div>
            </Link>
          )}

          {/* Cards Unal*/}
          {unalLoading && !unalResults && (
            <LoadingOutlined className="initial-loading" />
          )}
          {unalResults && (
            <Link
              to={
                poliResults !== "No hay datos para la busqueda realizada"
                  ? "unal"
                  : "/"
              }
              className="card-container"
            >
              {unalLoading && <LoadingOutlined className="loading" />}
              {!unalLoading &&
                unalResults !== "No hay datos para la busqueda realizada" && (
                  <img
                    src={`../../public/${unalResults.nameU}.png`}
                    className="card-img"
                  />
                )}
              {!unalLoading &&
                unalResults === "No hay datos para la busqueda realizada" && (
                  <div>
                    <img src="../../public/unal.png" className="card-img" />
                    <p>{unalResults}</p>
                  </div>
                )}
              <div className="card-description">
                {unalLoading && (
                  <p>
                    Recursos Encontrados: <b>0</b>
                  </p>
                )}
                {!unalLoading && (
                  <p>
                    Recursos Encontrados:{" "}
                    <b>
                      {unalResults.records ? unalResults.records.length : 0}
                    </b>
                  </p>
                )}
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
