import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import React, { useState,useEffect } from 'react';

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const items = [
        { id: 1, name: 'Bicicleta Urbana', description: 'Perfecta para la ciudad', price: 5000, stock: 15, talles: ['L', 'XL'], category: 'Paseo' },
        { id: 2, name: 'Mountain Bike', description: 'Ideal para terrenos accidentados', price: 8000, stock: 10, talles: ['M', 'L', 'XL'], category: 'MTB' },
        { id: 3, name: 'Bicicleta de Ruta', description: 'Velocidad y aerodinámica', price: 12000, stock: 8, talles: ['M', 'L'], category: 'Ruta' },
        { id: 4, name: 'Bicicleta Plegable', description: 'Compacta y fácil de transportar', price: 6000, stock: 20, talles: ['S', 'M'], category: 'Paseo' },
        { id: 5, name: 'Bicicleta Eléctrica', description: 'Con asistencia eléctrica', price: 15000, stock: 5, talles: ['M', 'L'], category: 'Eléctrica' },
        { id: 6, name: 'BMX Freestyle', description: 'Especial para acrobacias y trucos', price: 7000, stock: 12, talles: ['L', 'XL'], category: 'Freestyle' },
      ];      
      resolve(items);
    }, 1000);
  });
};

export const AsyncMock = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchItems();
        setItems(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return <ItemListContainer items={items } gretings={'Bienvenidos'}/>;
};

