import React, { useState, useEffect } from 'react';
import './index.css';

import { GoChevronLeft,GoChevronRight } from "react-icons/go";
import { IoIosCheckmarkCircleOutline,IoIosCheckmarkCircle,IoIosAddCircleOutline } from "react-icons/io";
const App = () => {
	// HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
	const [items, setItems] = useState([
        {itemName:'item 1', quantity:1, isSelected:false},
        {itemName:'item 2', quantity:3, isSelected:true},
        {itemName:'item 3', quantity:2, isSelected:false}

    ]);
    const [inputValue, setInputValue] = useState("")
    const handleAddButtonClick =()=>{
        alert("youuuuuu")
    }

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input value={inputValue} onChange={(event)=>
                    setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
					<IoIosAddCircleOutline onClick={()=> handleAddButtonClick} />
				</div>
				<div className='item-list'>
                    {items.map((item, index)=>
                        <div className='item-container'>
                        <div className='item-name'>
                            {/* HINT: replace false with a boolean indicating the item has been completed or not */}
                            {item.isSelected ? (
                                <>
                                    <IoIosCheckmarkCircle/>
                                    <span className='completed'>{item.itemName}</span>
                                </>
                            ) : (
                                <>
                                    <IoIosCheckmarkCircleOutline />
                                    <span>{item.itemName}</span>
                                </>
                            )}
                        </div>
                        <div className='quantity'>
                            <button>
                                <GoChevronLeft />
                            </button>
                            <span> {item.quantity} </span>
                            <button>
                                <GoChevronRight />
                            </button>
                        </div>
                    </div>
                    )}
					
				</div>
				<div className='total'>Total: 6</div>
			</div>
		</div>
	);
};

export default App;