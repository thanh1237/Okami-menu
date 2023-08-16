import React from "react";
import "App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

// Adding Fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faAngry,
    faLaugh,
    faSadCry,
    faThumbsUp,
    faHeart,
    faPlus,
    faTrashAlt,
    faEdit,
    faChevronLeft,
    faSort,
    faCheckSquare,
    faTimesCircle,
    faPauseCircle,
    faCircle,
    faUser,
    faRegistered,
    faChartLine,
    faSignOutAlt,
    faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Routes from "container/Routes";

library.add(
    fab,
    faAngry,
    faLaugh,
    faSadCry,
    faThumbsUp,
    faHeart,
    faPlus,
    faTrashAlt,
    faEdit,
    faChevronLeft,
    faSort,
    faCheckSquare,
    faTimesCircle,
    faPauseCircle,
    faCircle,
    faUser,
    faRegistered,
    faChartLine,
    faSignOutAlt,
    faSignInAlt
);

function App() {
    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default App;
