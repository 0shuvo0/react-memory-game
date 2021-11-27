function Crad({item, itemId, handleClick}){
    const cardClass = item.stat ? " active " + item.stat : ""
    
    return (
        <div onClick={() => handleClick(itemId)} className={ "card" + cardClass}>
            <img src={item.img} alt=""/>
        </div>
    )
}

export default Crad