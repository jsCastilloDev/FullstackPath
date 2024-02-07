
const generarId = () => {
    const random = Math.random().toString(36).substr(2, 9);
    const date = Date.now().toString(32)
  return random + date;
}

export default generarId;