import React from 'react'
import styled from 'styled-components';

const CardStyles = styled.div`
.sidebar{
    flex: 0.2;
}
`

function sidebar() {
    return (
        <div className="sidebar">
            <div>Das sidebarです desu</div>
        </div>
    )
}

export default sidebar
