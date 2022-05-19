// key debe ser un string.
const convertArrayTimetoUnix = (arrayTime, key) => {
  const arrayTimeUnix = arrayTime.map((item) => Date.parse(item[key]));
  return arrayTimeUnix;
};
