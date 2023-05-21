import { Dispatch } from "react";
import { AnyAction } from "redux";
import {
  poliSearchLoadError,
  poliSearchLoadSucces,
  poliSearchLoading,
} from "../../actions/PoliSeacrActions";
import axios from "axios";
import {
  udeaSearchLoadError,
  udeaSearchLoadSucces,
  udeaSearchLoading,
} from "../../actions/UdeASeacrActions";
import {
  itmSearchLoadError,
  itmSearchLoadSucces,
  itmSearchLoading,
} from "../../actions/ItmSeacrActions";
import {
  sanbuenaSearchLoadError,
  sanbuenaSearchLoadSucces,
  sanbuenaSearchLoading,
} from "../../actions/SanbuenaSeacrActions";
import {
  poligrancSearchLoadError,
  poligrancSearchLoadSucces,
  poligrancSearchLoading,
} from "../../actions/PoligrancSeacrActions";
import {
  ceipaSearchLoadError,
  ceipaSearchLoadSucces,
  ceipaSearchLoading,
} from "../../actions/CeipaSeacrActions";
import {
  colegiaturaSearchLoadError,
  colegiaturaSearchLoadSucces,
  colegiaturaSearchLoading,
} from "../../actions/ColegiaturaSeacrActions";
import {
  unalSearchLoadError,
  unalSearchLoadSucces,
  unalSearchLoading,
} from "../../actions/UnalSeacrActions";

export const loadPoliJicResults = async (
  dispatch: Dispatch<AnyAction>,
  keyword: string
) => {
  console.log("llego para la url", keyword);

  const url = `https://buscbian-backend.up.railway.app/library/polijic/${keyword.toLocaleLowerCase()}`;
  dispatch(poliSearchLoading());

  await axios
    .get<any>(url)
    .then((results) => {
      console.log("resultados POLI", results.data);

      dispatch(poliSearchLoadSucces(results.data));
    })
    .catch((error) => {
      dispatch(poliSearchLoadError(error.data));
    });
};

export const loadUdeAResults = async (
  dispatch: Dispatch<AnyAction>,
  keyword: string
) => {
  console.log("llego para la url", keyword);
  const url = `https://buscbian-backend.up.railway.app/library/udea/${keyword.toLocaleLowerCase()}`;
  dispatch(udeaSearchLoading());
  await axios
    .get<any>(url)
    .then((results) => {
      console.log("resultados UDEA", results.data);
      dispatch(udeaSearchLoadSucces(results.data));
    })
    .catch((error) => {
      dispatch(udeaSearchLoadError(error.data));
    });
};

export const loadItmResults = async (
  dispatch: Dispatch<AnyAction>,
  keyword: string
) => {
  console.log("llego para la url", keyword);
  const url = `https://buscbian-backend.up.railway.app/library/itm/${keyword.toLocaleLowerCase()}`;
  dispatch(itmSearchLoading());
  await axios
    .get<any>(url)
    .then((results) => {
      console.log("resultados ITM", results.data);
      dispatch(itmSearchLoadSucces(results.data));
    })
    .catch((error) => {
      dispatch(itmSearchLoadError(error.data));
    });
};

export const loadSanbuenaResults = async (
  dispatch: Dispatch<AnyAction>,
  keyword: string
) => {
  console.log("llego para la url", keyword);
  const url = `https://buscbian-backend.up.railway.app/library/sanbuenaventura/${keyword.toLocaleLowerCase()}`;
  dispatch(sanbuenaSearchLoading());
  await axios
    .get<any>(url)
    .then((results) => {
      console.log("resultados sanbuena", results.data);
      dispatch(sanbuenaSearchLoadSucces(results.data));
    })
    .catch((error) => {
      dispatch(sanbuenaSearchLoadError(error.data));
    });
};

export const loadPoligrancResults = async (
  dispatch: Dispatch<AnyAction>,
  keyword: string
) => {
  console.log("llego para la url", keyword);
  const url = `https://buscbian-backend.up.railway.app/library/poligrancolombiano/${keyword.toLocaleLowerCase()}`;
  dispatch(poligrancSearchLoading());
  await axios
    .get<any>(url)
    .then((results) => {
      console.log("resultados poligranc", results.data);
      dispatch(poligrancSearchLoadSucces(results.data));
    })
    .catch((error) => {
      dispatch(poligrancSearchLoadError(error.data));
    });
};

export const loadCeipaResults = async (
  dispatch: Dispatch<AnyAction>,
  keyword: string
) => {
  console.log("llego para la url", keyword);
  const url = `https://buscbian-backend.up.railway.app/library/ceipa/${keyword.toLocaleLowerCase()}`;
  dispatch(ceipaSearchLoading());
  await axios
    .get<any>(url)
    .then((results) => {
      console.log("resultados ceipa", results.data);
      dispatch(ceipaSearchLoadSucces(results.data));
    })
    .catch((error) => {
      dispatch(ceipaSearchLoadError(error.data));
    });
};

export const loadColegiaturaResults = async (
  dispatch: Dispatch<AnyAction>,
  keyword: string
) => {
  console.log("llego para la url", keyword);
  const url = `https://buscbian-backend.up.railway.app/library/colegiatura/${keyword.toLocaleLowerCase()}`;
  dispatch(colegiaturaSearchLoading());
  await axios
    .get<any>(url)
    .then((results) => {
      console.log("resultados colegiatura", results.data);
      dispatch(colegiaturaSearchLoadSucces(results.data));
    })
    .catch((error) => {
      dispatch(colegiaturaSearchLoadError(error.data));
    });
};

export const loadUnalResults = async (
  dispatch: Dispatch<AnyAction>,
  keyword: string
) => {
  console.log("llego para la url", keyword);
  const url = `https://buscbian-backend.up.railway.app/library/unal/${keyword.toLocaleLowerCase()}`;
  dispatch(unalSearchLoading());
  await axios
    .get<any>(url)
    .then((results) => {
      console.log("resultados unal", results.data);
      dispatch(unalSearchLoadSucces(results.data));
    })
    .catch((error) => {
      dispatch(unalSearchLoadError(error.data));
    });
};

export const loadUsers = async () => {
  console.log("llego para la url");
  const url = "https://buscbian-backend.up.railway.app/user";
  return await axios.get<any>(url).then((results) => {
    return results.data;
  });
};
