import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

function HomePage() {
  const names = ['Guillermo Rauch', 'Scott Moss', 'Dan Abramov'];

  const [likes, setLikes] = useState(0);

  function hanldeClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="What I Use" />
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={hanldeClick}>Like ({likes})</button>
    </div>
  );
}

export default HomePage;
