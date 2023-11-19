import React, { useState } from "react";

const useToggleState = () => {
    const [state, setState] = useState(true);

    const toggleState = () => {
        setState(toggle => !toggle);
    }

    return [state, toggleState];

}

export default useToggleState;