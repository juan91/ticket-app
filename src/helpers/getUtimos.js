export const getUltimos = async () => {
  const resp = await fetch('https://tickets-socket-app.herokuapp.com/ultimos')
  const data = await resp.json();
  return data.ultimos;
}