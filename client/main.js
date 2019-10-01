import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players, calculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';
import {Tracker} from 'meteor/tracker';


Meteor.startup(()=> {
    Tracker.autorun(function() {
        const players = Players.find({}, {
            sort : {
                score: -1,
            }
        }).fetch();
        let positionedPlayers = calculatePlayerPositions(players);
        let title = 'Score Keep';
        
        ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
    }); 
});