import React from 'react'

function ChildToParent({callback}) {
    const TEXT = 'I AM PARENT COMPONENT, I GOT SOME DATA FROM YOU MY SON';
  return (
    <div>
      <h2>Pass Data From Child To Parent</h2>
      <button onClick={()=>callback(TEXT)}>Click me to send data to parent component</button>
    </div>
  )
}

export default ChildToParent
