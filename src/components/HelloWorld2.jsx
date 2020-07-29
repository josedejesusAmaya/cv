import React, { useState } from 'react';

const HelloWorld2 = () => {
    const [active, setActive] = useState(true);

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <div>
            <button onClick={handleClick}>Ocultar</button>
            {active &&
                <h1>Hola Mundo Hooks</h1>
            }
        </div>
    )
}

export default HelloWorld2;