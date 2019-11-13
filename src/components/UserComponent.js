import React from 'react'

export default function UserComponent(props){

    return(
        <p>
            Welcome,  
            <span style={{'fontWeight': 'bold'}}>
                { props.user.username }
            </span>
        </p>
    )
    

}

