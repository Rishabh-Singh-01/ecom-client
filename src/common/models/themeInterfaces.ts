export interface ThemesInterface {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface GetAllThemesInterface {
  status: string;
  results: number;
  data: {
    data: ThemesInterface[];
  };
}
