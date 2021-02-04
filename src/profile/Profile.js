import React from 'react'
import PropTypes from 'prop-types'

const profile = (props) => {
    const style ={
        fontFamily:'Architects Daughter, cursive'
    }
    return (

        <div>
            {props.handleName(props.firstname,props.lastname)}
            <h2 id='text' style={style}>{props.firstname} {props.lastname}</h2>
            <h3 id='text'>{props.bio}</h3>
            <h3 id='text' >{props.profession}</h3>
            {props.children}
        </div>
    )}
export default profile

profile.defaultProps={
    firstname:"Not defined",
    lastname:"Not defined",
    bio:"Not defined",
    profession:"Not defined",
}

profile.propTypes={
    firstname:PropTypes.string,
    lastname:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
}


