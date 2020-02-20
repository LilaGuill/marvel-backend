const generateTs = () => {
  const date = new Date();
  const timestamp = date.getTime() / 1000; // 1000 pour convertir des millisecondes en secondes
  //console.log(Math.floor(timestamp)); // va afficher qqchose comme 1582129584
};

module.exports = generateTs;
