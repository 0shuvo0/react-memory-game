import { useState } from 'react'
import Card from './Card'


function Cards(){
    let cardItems = [
        { id: 1, img: '/img/html.png', stat: "" },
        { id: 1, img: '/img/html.png', stat: "" },
        { id: 2, img: '/img/css.png', stat: "" },
        { id: 2, img: '/img/css.png', stat: "" },
        { id: 3, img: '/img/js.png', stat: "" },
        { id: 3, img: '/img/js.png', stat: "" },
        { id: 4, img: '/img/scss.png', stat: "" },
        { id: 4, img: '/img/scss.png', stat: "" },
        { id: 5, img: '/img/react.png', stat: "" },
        { id: 5, img: '/img/react.png', stat: "" },
        { id: 6, img: '/img/vue.png', stat: "" },
        { id: 6, img: '/img/vue.png', stat: "" },
        { id: 7, img: '/img/angular.svg', stat: "" },
        { id: 7, img: '/img/angular.svg', stat: "" },
        { id: 8, img: '/img/nodejs.png', stat: "" },
        { id: 8, img: '/img/nodejs.png', stat: "" }
    ].sort(() => 0.5 - Math.random())
    const [items, setItems] = useState(cardItems)
    const [prev, setPrev] = useState(-1)

    const check = (current) => {
        if(items[prev].id === items[current].id){
            items[prev].stat = "correct"
            items[current].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[prev].stat = "wrong"
            items[current].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[prev].stat = ""
                items[current].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    const handleClick = (id) => {
        if(id === prev) return
        items[id].stat = "active"
        setItems([...items])
        if(prev > -1){
            check(id)
        }else{
            setPrev(id)
        }
    }

    return (
        <div className="container">
            {items.map((item, index) => (
                <Card key={index} itemId={index} handleClick={handleClick} item={item} />
            ))}
        </div>
    )
}

export default Cards