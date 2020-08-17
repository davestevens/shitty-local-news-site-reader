const cookieData = document.cookie.split("; ").reduce((acc, current) => {
  const [key, value] = current.split("=");
  acc[key] = value;
  return acc;
}, {});

export default cookieData;
