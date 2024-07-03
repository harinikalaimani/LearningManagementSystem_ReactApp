import React from 'react'

function Service({ icon, title, description, }) {
  return (
    <div>
      <div className="service-item text-center pt-3 fef">
      <div className="p-4">
        {icon && React.cloneElement(icon, { className: `servicefont mb-4` })}
        <h5 className="mb-3">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  </div>
 
  )
}

export default Service