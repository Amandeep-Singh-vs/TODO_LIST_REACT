import React from 'react'
import '../styles/footer.css'
function Footer({completedTodos,totalTodos}) {
  return (
    <div className='footer'>
      <span className='footerItem'>Tasks Completed : {completedTodos}</span>
      <span className='footerItem'>Total Tasks : {totalTodos}</span>
    </div>
  )
}

export default Footer
