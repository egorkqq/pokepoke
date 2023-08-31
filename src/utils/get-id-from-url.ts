// https://pokeapi.co/api/v2/pokemon/140/ => 140
export const getIdFromUrl = (url: string) => {
  const urlParts = url.split('/')
  return Number(urlParts[urlParts.length - 2])
}
