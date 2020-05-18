import React from 'react';

function HomepageImage() {
    const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
    return (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img src={url} style={{width: 650}} alt='Image of Golden Gate Bridge' />
    );
}

export default HomepageImage;