import React, {useState} from 'react';
import ButtonComponent from './ButtonComponent';

interface Component5Props {
    onCallback: () => void;
}


const Component5: React.FC<Component5Props> = ({onCallback}) => {
    const [isGreen, setIsGreen] = useState(false);

    const setUpGreenHandler = () => {
        setIsGreen(true)
        onCallback()
    }

    return (
        <div className="container">
            <div className={`circle ${isGreen ? 'green' : 'red'}`}></div>
            <button onClick={setUpGreenHandler}>Complete Chain</button>
        </div>
    );
};

export default Component5;