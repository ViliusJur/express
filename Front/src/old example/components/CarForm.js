import {useRef} from 'react';
import {post} from "../plugins/http";

const CarForm = () => {
    const carRefs = {
        model: useRef(),
        color: useRef(),
        year: useRef(),
        gasoline: useRef(),
        fuelType: useRef()
    }

    async function addCar() {
        const car = {
            model: carRefs.model.current.value,
            color: carRefs.color.current.value,
            year: carRefs.year.current.value,
            gasoline: carRefs.gasoline.current.value,
            fuelType: carRefs.fuelType.current.value,
        }

        const res = await post('addCar', car)

        console.log(res)
    }

    return (
        <div className="d-flex flex-column">
            <input ref={carRefs.model} type="text" placeholder="model"/>
            <input ref={carRefs.color} type="text" placeholder="color"/>
            <input ref={carRefs.year} type="text" placeholder="year"/>
            <input ref={carRefs.gasoline} type="text" placeholder="gasoline consumption"/>
            <input ref={carRefs.fuelType} type="text" placeholder="fuel type"/>
            <button onClick={addCar}>Add Car</button>
        </div>
    );
};

export default CarForm;