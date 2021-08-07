import React, { useState } from 'react';

const useVisibillityToggler = (component, visibillity = true) => {
    const [visible, setVisibillity] = useState(() => visibillity);
    return (
        [visible ? component : null, () => setVisibillity((v) => !v)]
    )
}

export default useVisibillityToggler;
