import { useState }  from "react";
import "./Toggle.css";

export default function Toggle() {
    const [isSelected, setIsSelected] = useState(false);

    const handleToggle = () => {
        setIsSelected(!isSelected);
    }
    return (
        <div className="p-4">
            <p className={isSelected ? 'active p-2' : 'p-2'}>Style me</p>
            <button onClick={handleToggle} className="border p-1" >
                {isSelected ? "Deactivate" : "Activate"}
            </button>
        </div>
    )
}