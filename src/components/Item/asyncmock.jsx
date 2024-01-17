import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import React, { useState,useEffect } from 'react';

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const items = [
        { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1', price: 20, stock: 20 },
        { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2', price: 30, stock: 20 },
        { id: 3, name: 'Producto 3', description: 'Descripción del Producto 3', price: 45, stock: 9 },
        { id: 4, name: 'Producto 4', description: 'Descripción del Producto 4', price: 300, stock: 150 },
        { id: 5, name: 'Producto 5', description: 'Descripción del Producto 5', price: 302, stock: 20 },
        { id: 6, name: 'Producto 6', description: 'Descripción del Producto 6', price: 120, stock: 10 },
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

