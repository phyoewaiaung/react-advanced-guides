import React from 'react'
import PropTypes from 'prop-types';

function UserTemplate(props) {
    console.log(props);
  return (
    <div>
        <h2>Learn PropTypes</h2>
        <p>We can make a type checking of props with PropTypes</p>
        <p>Just like below..</p>
        <ul>
            <li>test1:PropTypes.string</li>
            <li>test2:PropTypes.number</li>
            <li>test3:PropTypes.array</li>
            <li>test4:PropTypes.func</li>
            <li>test5:PropTypes.bool</li>
            <li>test6:PropTypes.string.isRequired</li>
            <li>test6:PropTypes.arrayOf(Protptypes.string)</li>
            <li>test7:PropTypes.oneOf(['abc','def'])</li>
        </ul>
        and there is more....
    </div>
  )
}
UserTemplate.propTypes = {
    name:PropTypes.string
}

export default UserTemplate