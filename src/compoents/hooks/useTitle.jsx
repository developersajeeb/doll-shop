import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Doll Shop`;
    },[title])
};

export default useTitle;