import phonebook from '../images/phonebook.jpg';

const style = {
  main: {
    height: '92vh',
    backgroundImage: `url(${phonebook})`,
  },
  title: {
    textAlign: 'center',
    padding: 80,
    margin: 0,
    fontSize: 50,
    color: 'white',
  },
};

const HomePage = () => {
  return (
    <main style={style.main}>
      <h1 style={style.title}>Welcome to the PHONEBOOK APP</h1>
    </main>
  );
};

export default HomePage;
