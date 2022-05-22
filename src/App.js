import React, { useState } from 'react';
import './index.css';
import { VscTrash } from "react-icons/vsc";
import { GoChevronLeft,GoChevronRight } from "react-icons/go";
import { IoIosRadioButtonOff,IoIosCheckmarkCircle,IoIosAddCircleOutline } from "react-icons/io";
import {v1 as uuid} from "uuid";
const App = () => {
	// HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
	const [items, setItems] = useState([
        
    ]);
    const [inputValue, setInputValue] = useState('')
    const [totalItemCount,setTotolItemCount]=useState(0)
    
    const handleAddButtonClick =()=>{
        const newItem={
            id: uuid(),
            itemName:inputValue,
            quantity: 1,
            isSelected:false
       
        }
       
        calculateTotal()
        //copy exits array and add new item
        const newItems =[...items, newItem]
        setItems(newItems)
        setInputValue('')
        
    }
    const handleQuantityIncrease=(index)=>{
        const newItems=[...items]
        newItems[index].quantity++
        setItems(newItems)
        calculateTotal()
    }
    const handleQuantityDecrease=(index)=>{
        const newItems =[...items]
        if(newItems[index].quantity>1)
            newItems[index].quantity--
        else 
            delete newItems[index]
        setItems(newItems)
        calculateTotal()
    }

    const handleRemoveItem=(index)=>{
        const newItems=[...items]
        delete newItems[index]
        setItems(newItems)
        calculateTotal()

    }

    const toggleComplete =(index)=>{
        const newItems =[...items]
        newItems[index].isSelected= !newItems[index].isSelected
        setItems(newItems)
       

    }
    const calculateTotal=()=>{
        const totalItemCount =items.reduce((total, item)=>{
            return(total +item.quantity)
        },0)

        setTotolItemCount(totalItemCount)

    }

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input value={inputValue} onChange={(event)=>
                    setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
					<IoIosAddCircleOutline onClick={handleAddButtonClick} />
				</div>
				<div className='item-list'>
                    
                    {items.map((item, index)=>
                   
                        <div className='item-container'>
                        <div className='item-name' onClick={()=>toggleComplete(index)}>
                            {/* HINT: replace false with a boolean indicating the item has been completed or not */}
                            {item.isSelected ? (
                                <>
                                    <IoIosCheckmarkCircle/>
                                    <span className='completed'>{item.itemName}</span>
                                </>
                            ) : (
                                <>
                                    <IoIosRadioButtonOff />
                                    <span>{item.itemName}</span>
                                </>
                            )}
                        </div>
                        <div className='quantity'>
                            <button>
                                <GoChevronLeft  onClick={()=>handleQuantityDecrease(index)}/>
                            </button>
                            <span> {item.quantity } </span>
                            <button>
                                <GoChevronRight onClick={()=>handleQuantityIncrease(index)}/>
                            </button>
                            <button>
                                <VscTrash onClick={()=>handleRemoveItem(index)}/>

                            </button>
                        </div>
                    </div>
                    )}
					
				</div>
				<div className='total'>Total: {totalItemCount}</div>
			</div>
		</div>
	);
};

export default App;