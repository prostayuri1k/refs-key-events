import {useRef} from "react";


const List = ({arr, setArr}) => {

    const listItem = useRef(null);
    const handleClick = (id) => {
        setArr(
            arr.map(el => {
                if(el.id === id) {
                    el.text = `${el.text} !!!`;
                }
                return el;
            })
        )
    }

    return (
        <div>
            <h3>List</h3>
            <ul>
                {arr.map(item => <li key={item.id} ref={listItem}>
                    {item.text}
                    <div>
                        <button onClick={()=> handleClick(item.id)}>!!!</button>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}

export default List;

