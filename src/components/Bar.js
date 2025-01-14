import { useState } from 'react'
import './Bar.css'

function Bar({index, length, color}) {

    const [len, setLen] = useState(length)

    const barStyle = {
        height: length
    }

    const inputStyle = {
        position: 'relative',
        top: Math.floor(length/2 ) - 12,
        width: length,
        left: -Math.floor(length/2 ) + 13,
        border: 'none',
        background: 'none'

    }

    const colors = [
        ['rgba(61, 90, 241, 0.5)', 'rgba(61, 90, 241, 0.2)'],
        ['rgba(255, 48, 79, 1)', 'rgba(255, 48, 79, 0.5)'],
        ['rgba(131, 232, 90, 0.5)', 'rgba(131, 232, 90, 0.2)'],
     ]

     const bottom = {
        transform: `translateY(${200 - length}px) rotateX(-90deg)`,
        backgroundColor:`${colors[color[0]]}`,
        boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
        transistion: '0.3s'
    }

    
    const front_back_right_left = {
        height: `${length}px`,
        transform: `translateY(${200 - length})px`,
        backgroundColor: `${colors[color[0]]}`,
        boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
        transistion: '0.3s'
    }

    const handleChange = (e) => {
        let val = e.target.value;
        if(val === ''){
            setLen(0)
        }else{
            val = parseInt(val);
            if (val > 200){
                setLen(200)
            }else {
                setLen(val)
            }
        }

        setLen(parseInt(e.taget.value))
    }

    const quantity = {
        position: 'relative',
        top: 225,
    }


  return (
    <>
    <div className = 'bar'>
        <div className = "side top"></div>
        
        <div className = "side right">
            <div className = "color-bar right-color-bar" style={front_back_right_left}>

            </div>
        </div>
        <div className = "side left">
            <div className = "color-bar left-color-bar" style={front_back_right_left}>

            </div>
        </div>
        <div className = "side front">
            <div className = 'color-bar front-color-bar' style={front_back_right_left}>
            <input 
            type = "number" 
            length = {length} 
            style = {inputStyle} 
            value ={len} 
            className = 'input'
            onChange = {handleChange}/>
            </div>
  
        </div>
        <div className = "side back">
            <div className = "color-bar back-color-bar" style = {front_back_right_left}>

            </div>
        </div>
        <div className = "quantity-nav">
            <div className = "quantity-button quantity-up" style={quantity}>
            {''} + {''}
            </div>
            <div className = "quantity-button quantity-down" style={quantity}>
            {''} - {''}
            </div>
        </div>
    </div>
    </>
  )
}

export default Bar
