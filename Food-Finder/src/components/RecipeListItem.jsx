import React from 'react'

const RecipeListItem = () => {
  return (
    <div>
      <div className='recipe_banner'>
                <div className="left-col">
                    <span className='badge'>Italian</span>
                    <h1 className='gradient-text '>Biriyani</h1>
                    <p><strong>Recipe by:</strong><small>Bg Group</small></p>
                    <h3 className='gradient-ingredient'>Ingredients</h3>
                    <div className='ingredients'>
                        <ul>
                            <li>Alu</li>
                            <li>Alu</li>
                            <li>Alu</li>
                            <li>Alu</li>
                            <li>Alu</li>
                            
                        </ul>
                    </div>
                </div>
                <div className="right-col">
                    <div className="image-wrapper">
                    <img src="https://media.istockphoto.com/id/1453499717/photo/chicken-biryani-or-biriyani-served-in-plate-isolated-on-table-top-view-indian-spicy-food.webp?b=1&s=170667a&w=0&k=20&c=UJcA-IR5iua10_r7ca41tk1c3F7fZkkjoL2_HCaEwMA=" alt="Biriyani" />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default RecipeListItem
