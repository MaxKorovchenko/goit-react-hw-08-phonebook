import phonebook from '../images/phonebook.jpg';

const style = {
  main: {
    //width: '100vw',
    height: '92vh',
    backgroundImage: `url(${phonebook})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
