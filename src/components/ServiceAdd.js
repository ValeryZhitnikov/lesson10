import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addService, selectService, editService } from '../actions/actionsCreators';

const defaultServiceForm = {
  name: '',
  price: 0
}

export default function ServiceAdd() {
  const selectedService = useSelector(state => state.selectedService);
  const dispatch = useDispatch();
  const [serviceForm, setServiceForm] = useState(defaultServiceForm);

  useEffect(() => {
    if (selectedService) {
      setServiceForm(selectedService);
    }
  }, [selectedService]);

  const handleChange = event => { 
      const {name, value} = event.target;
      setServiceForm({
          ...serviceForm, 
          [name]: value
      })
    }
  const handleSubmit = event => { 
      event.preventDefault();
      if (selectedService) { 
        dispatch(editService(selectedService.id, serviceForm.name, serviceForm.price));
      } else {
        dispatch(addService(serviceForm.name, serviceForm.price));
      }
      dispatch(selectService(null));
      setServiceForm(defaultServiceForm);
      
    }

  const handlerCancel = event => {
    event.preventDefault(); 
    dispatch(selectService(null));
    setServiceForm(defaultServiceForm);
  }

  return(
    <form onSubmit={handleSubmit}>
        <input required type="text" name="name" onChange={handleChange} value={serviceForm.name} />
        <input required type="number" name="price" onChange={handleChange} value={serviceForm.price} />
        <button type="submit">Save</button>
        {selectedService && <button onClick={handlerCancel}>Cancel</button>}
    </form>
  )
}

