export type FilmType = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: string;
  edited: string;
};

export interface FilmCardProps {
  titulo: string;
  director: string;
  fecha_lanzamiento: string;
}

export interface FilmDescriptionProps {
  label: string;
  description: string;
  testId: string;
}
