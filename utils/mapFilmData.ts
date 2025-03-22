import { FilmType } from "../../types";

export const mapFilmData = (data: FilmType[]) =>
  data &&
  data.map((film) => ({
    id: film.episode_id,
    titulo: film.title,
    director: film.director,
    fecha_lanzamiento: film.release_date,
  }));
