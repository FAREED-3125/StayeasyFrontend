import React from 'react'

const Hot2 = ({data}) => {
  return (
    <div className="des">
          <h4 className="hot-des-head">Description</h4>
          <p className="hot-des-p">
            {data.description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia numquam soluta voluptatibus fuga, repudiandae libero vel maxime officia quam ullam sint quod aliquid dolores tenetur? Repudiandae eius aliquam, eveniet inventore voluptatum eaque, laboriosam unde provident, ea quo delectus quae."}
          </p></div>
  )
}

export default Hot2