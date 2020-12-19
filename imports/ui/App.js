import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

const App = ({ title, players }) => {
  return (
    <div>
      <TitleBar
        title={title}
        subtitle="Track Your Points & Scores Between Friends"
      />

      <div className="wrapper">
        <PlayerList players={players} />
        <AddPlayer />
      </div>
    </div>
  );
};

App.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired,
};

export default App;
