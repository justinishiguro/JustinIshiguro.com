import React, { useState } from "react";
import {Navigate} from "react-router-dom";

function Project() {
    const [goToHome, setGoToHome] = useState(false);
    return (
        <div>
            <Navigate to="/home" />
            Projects
            <button>Go to home page</button>
        </div>
    );
}

export default Project;