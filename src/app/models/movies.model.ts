export interface Movie {
  id: number,
  title: string,
  original: string,
  category: string[],
  rating: number,
  link: string,
  img: string,
  description?: string,
}
