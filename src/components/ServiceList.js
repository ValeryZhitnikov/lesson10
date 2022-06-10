import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeService, selectService } from '../actions/actionsCreators';

export default function ServiceList() {
  const services = useSelector((state) => state.serviceList);
  const servicesFilterValue = useSelector((state) => state.filterServiceValue);
  const dispatch = useDispatch();
  
  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleEdit = id => {
    const selectedService = services.find(service => service.id === id);
    dispatch(selectService(selectedService));
  }

  const servicesListFiltered = servicesFilterValue ? 
    services.filter(service => service.name.toLowerCase().includes(servicesFilterValue.toLowerCase()))
    :
    services; 

  return(
    <ul>
      {servicesListFiltered.map(service => {
        return <li key={service.id}>
          {service.name} {service.price}
          <button onClick={() => handleEdit(service.id)}>Edit</button>
          <button onClick={() => handleRemove(service.id)}>x</button>
        </li>
      })}
    </ul>
  )
}

