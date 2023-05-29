import { Table } from "antd";
import { INav } from "../models/INav";
import { IRootReducer } from "../models/IRootReducer";
import { useSelector } from "react-redux";
import { ColumnsType } from "antd/es/table";
import { ArrowLeftOutlined, LinkOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

interface IPropsNav {
  data: INav;
}

const LibraryPage: React.FC<IPropsNav> = ({ data }) => {
  const library: any = useSelector<IRootReducer>((state) => {
    if (
      state.poliResults.poliResults &&
      data.key === state.poliResults.poliResults.nameU
    ) {
      return state.poliResults.poliResults;
    }
    if (
      state.udeaResults.udeaResults &&
      data.key === state.udeaResults.udeaResults.nameU
    ) {
      return state.udeaResults.udeaResults;
    }
    if (
      state.itmResults.itmResults &&
      data.key === state.itmResults.itmResults.nameU
    ) {
      return state.itmResults.itmResults;
    }
    if (
      state.poligrancResults.poligrancResults &&
      data.key === state.poligrancResults.poligrancResults.nameU
    ) {
      return state.poligrancResults.poligrancResults;
    }
    if (
      state.ceipaResults.ceipaResults &&
      data.key === state.ceipaResults.ceipaResults.nameU
    ) {
      return state.ceipaResults.ceipaResults;
    }
    if (
      state.colegiaturaResults.colegiaturaResults &&
      data.key === state.colegiaturaResults.colegiaturaResults.nameU
    ) {
      return state.colegiaturaResults.colegiaturaResults;
    }
    if (
      state.unalResults.unalResults &&
      data.key === state.unalResults.unalResults.nameU
    ) {
      return state.unalResults.unalResults;
    }
  });

  const columns: ColumnsType<any> = [
    {
      title: "Posición",
      dataIndex: "rank",
      width: "7%",
    },
    {
      title: "Autor",
      dataIndex: "author",
      width: "42.5%",
    },
    {
      title: "Título",
      dataIndex: "title",
      width: "42.5%",
    },
    {
      title: "Ver detalle",
      dataIndex: "detail",
      render: (_, record) => (
        <>
          <a href={record.detail} target="_blank">
            <LinkOutlined />
          </a>
        </>
      ),
      width: "8%",
    },
  ];

  return (
    <>
      <div className="home-container">
        <div className="general-library">
          <Link to="/" className="complete-list">
            <ArrowLeftOutlined />
            <span>
              <b> Regresar</b>
            </span>
          </Link>
          <div>
            <h2 className="library-title">{data.titulo}</h2>
            <img className="library-img" src={data.img} alt="" />
          </div>
          <a className="complete-list" href={library ? library.url: ""} target="_blank">
            <b>Ver lista completa</b>
          </a>
        </div>
      </div>
      <div className="home-container">
        <div className="library-table">
          <Table
            columns={columns}
            dataSource={library ? library.records : ""}
            pagination={false}
          ></Table>
        </div>
      </div>
    </>
  );
};

export default LibraryPage;
