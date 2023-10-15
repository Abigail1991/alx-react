const getFullYear = () => {
  return new Date().getFullYear();
};

const getFooterCopy = (isIndex) => {
  if (isIndex) {
    return 'Holberton School';
  }
  return 'Holberton School main dashboard';
};

export { getFullYear, getFooterCopy };
