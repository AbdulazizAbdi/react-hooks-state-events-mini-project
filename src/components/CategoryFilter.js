import React, { useState } from "react";

function CategoryFilter( {categories, onCategoryChanged} ) {
  
  const [selectedCategory, setSelectedCategory] = useState(null);
 
  function handleCategoryFilter(category) {
    setSelectedCategory(category)
    onCategoryChanged(category)
  }
  
  const categoriesButtons = categories.map((category) => {
    const buttonClass = selectedCategory === category ? "selected" : "";
    return <button key={category} className={buttonClass} onClick={() => handleCategoryFilter(category)}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesButtons}
    </div>
  );
}

export default CategoryFilter;
