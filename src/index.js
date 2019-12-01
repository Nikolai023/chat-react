import React from 'react';
import ReactDom from 'react-dom';
import App from "./App"; // < Interesting!
import "./App.css";

// if (window) window.ReactSocketIO = {Socket, Event, SocketContext};

ReactDom.render(<App/>, document.getElementById('root'));
// export {Socket, Event, SocketContext};
