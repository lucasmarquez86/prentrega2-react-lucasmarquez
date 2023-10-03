const products = [
  // Productos de la categoría pantalones
  {
    id: '1',
    name: 'Pantalón de mezclilla azul',
    price: 39.99,
    category: 'pantalones',
    img: 'product-images/1.jpg', // Ruta a la imagen del producto con el ID 1
    stock: 20,
    description: 'Descripción del pantalón de mezclilla azul',
  },
  {
    id: '2',
    name: 'Pantalón deportivo negro',
    price: 29.99,
    category: 'pantalones, category',
    img: 'product-images/2.jpg', // Ruta a la imagen del producto con el ID 2
    stock: 15,
    description: 'Descripción del pantalón deportivo negro',
  },
  {
    id: '3',
    name: 'Pantalón casual gris',
    price: 34.99,
    category: 'pantalones',
    img: 'product-images/3.jpg', // Ruta a la imagen del producto con el ID 3
    stock: 25,
    description: 'Descripción del pantalón casual gris',
  },
  {
    id: '4',
    name: 'Pantalón de cuero negro',
    price: 59.99,
    category: 'pantalones',
    img: 'product-images/4.jpg', // Ruta a la imagen del producto con el ID 4
    stock: 10,
    description: 'Descripción del pantalón de cuero negro',
  },
  {
    id: '5',
    name: 'Pantalón de mezclilla desgastado',
    price: 49.99,
    category: 'pantalones',
    img: 'product-images/5.jpg', // Ruta a la imagen del producto con el ID 5
    stock: 12,
    description: 'Descripción del pantalón de mezclilla desgastado',
  },
  {
    id: '6',
    name: 'Pantalón cargo verde',
    price: 44.99,
    category: 'pantalones',
    img: 'product-images/6.jpg', // Ruta a la imagen del producto con el ID 6
    stock: 18,
    description: 'Descripción del pantalón cargo verde',
  },
  {
    id: '7',
    name: 'Pantalón deportivo azul',
    price: 29.99,
    category: 'pantalones',
    img: 'product-images/7.jpg', // Ruta a la imagen del producto con el ID 7
    stock: 14,
    description: 'Descripción del pantalón deportivo azul',
  },
  {
    id: '8',
    name: 'Pantalón de lino beige',
    price: 37.99,
    category: 'pantalones',
    img: 'product-images/8.jpg', // Ruta a la imagen del producto con el ID 8
    stock: 20,
    description: 'Descripción del pantalón de lino beige',
  },
  {
    id: '9',
    name: 'Pantalón chino negro',
    price: 32.99,
    category: 'pantalones',
    img: 'product-images/9.jpg', // Ruta a la imagen del producto con el ID 9
    stock: 16,
    description: 'Descripción del pantalón chino negro',
  },
  {
    id: '10',
    name: 'Pantalón deportivo gris',
    price: 29.99,
    category: 'pantalones',
    img: 'product-images/10.jpg', // Ruta a la imagen del producto con el ID 10
    stock: 19,
    description: 'Descripción del pantalón deportivo gris',
  },
  {
    id: '11',
    name: 'Pantalón de cuero marrón',
    price: 59.99,
    category: 'pantalones',
    img: 'product-images/11.jpg', // Ruta a la imagen del producto con el ID 11
    stock: 8,
    description: 'Descripción del pantalón de cuero marrón',
  },
  {
    id: '12',
    name: 'Pantalón vaquero vintage',
    price: 49.99,
    category: 'pantalones',
    img: 'product-images/12.jpg', // Ruta a la imagen del producto con el ID 12
    stock: 11,
    description: 'Descripción del pantalón vaquero vintage',
  },
  // Productos de la categoría buzos
  {
    id: '13',
    name: 'Buzo con capucha rojo',
    price: 49.99,
    category: 'buzos',
    img: 'product-images/13.jpg', // Ruta a la imagen del producto con el ID 13
    stock: 25,
    description: 'Descripción del buzo con capucha rojo',
  },
  {
    id: '14',
    name: 'Buzo sin capucha gris',
    price: 34.99,
    category: 'buzos',
    img: 'product-images/14.jpg', // Ruta a la imagen del producto con el ID 14
    stock: 18,
    description: 'Descripción del buzo sin capucha gris',
  },
  {
    id: '15',
    name: 'Buzo deportivo azul',
    price: 39.99,
    category: 'buzos',
    img: 'product-images/15.jpg', // Ruta a la imagen del producto con el ID 15
    stock: 22,
    description: 'Descripción del buzo deportivo azul',
  },
  {
    id: '16',
    name: 'Buzo con estampado floral',
    price: 44.99,
    category: 'buzos',
    img: 'product-images/16.jpg', // Ruta a la imagen del producto con el ID 16
    stock: 16,
    description: 'Descripción del buzo con estampado floral',
  },
  {
    id: '17',
    name: 'Buzo cuello redondo negro',
    price: 29.99,
    category: 'buzos',
    img: 'product-images/17.jpg', // Ruta a la imagen del producto con el ID 17
    stock: 20,
    description: 'Descripción del buzo cuello redondo negro',
  },
  {
    id: '18',
    name: 'Buzo con capucha azul marino',
    price: 49.99,
    category: 'buzos',
    img: 'product-images/18.jpg', // Ruta a la imagen del producto con el ID 18
    stock: 14,
    description: 'Descripción del buzo con capucha azul marino',
  },
  {
    id: '19',
    name: 'Buzo sin capucha verde',
    price: 34.99,
    category: 'buzos',
    img: 'product-images/19.jpg', // Ruta a la imagen del producto con el ID 19
    stock: 21,
    description: 'Descripción del buzo sin capucha verde',
  },
  {
    id: '20',
    name: 'Buzo deportivo gris',
    price: 39.99,
    category: 'buzos',
    img: 'product-images/20.jpg', // Ruta a la imagen del producto con el ID 20
    stock: 17,
    description: 'Descripción del buzo deportivo gris',
  },
  {
    id: '21',
    name: 'Buzo con estampado geométrico',
    price: 44.99,
    category: 'buzos',
    img: 'product-images/21.jpg', // Ruta a la imagen del producto con el ID 21
    stock: 13,
    description: 'Descripción del buzo con estampado geométrico',
  },
  {
    id: '22',
    name: 'Buzo cuello redondo rojo',
    price: 29.99,
    category: 'buzos',
    img: 'product-images/22.jpg', // Ruta a la imagen del producto con el ID 22
    stock: 19,
    description: 'Descripción del buzo cuello redondo rojo',
  },
  {
    id: '23',
    name: 'Buzo con capucha gris oscuro',
    price: 49.99,
    category: 'buzos',
    img: 'product-images/23.jpg', // Ruta a la imagen del producto con el ID 23
    stock: 15,
    description: 'Descripción del buzo con capucha gris oscuro',
  },
  {
    id: '24',
    name: 'Buzo sin capucha azul',
    price: 34.99,
    category: 'buzos',
    img: 'product-images/24.jpg', // Ruta a la imagen del producto con el ID 24
    stock: 23,
    description: 'Descripción del buzo sin capucha azul',
  },
  // Productos de la categoría remeras
  {
    id: '25',
    name: 'Remera estampada de flores',
    price: 19.99,
    category: 'remeras',
    img: 'product-images/25.jpg', // Ruta a la imagen del producto con el ID 25
    stock: 30,
    description: 'Descripción de la remera estampada de flores',
  },
  {
    id: '26',
    name: 'Remera básica blanca',
    price: 14.99,
    category: 'remeras',
    img: 'product-images/26.jpg', // Ruta a la imagen del producto con el ID 26
    stock: 40,
    description: 'Descripción de la remera básica blanca',
  },
  {
    id: '27',
    name: 'Remera a rayas azules',
    price: 19.99,
    category: 'remeras',
    img: 'product-images/27.jpg', // Ruta a la imagen del producto con el ID 27
    stock: 35,
    description: 'Descripción de la remera a rayas azules',
  },
  {
    id: '28',
    name: 'Remera con estampado de gatos',
    price: 21.99,
    category: 'remeras',
    img: 'product-images/28.jpg', // Ruta a la imagen del producto con el ID 28
    stock: 28,
    description: 'Descripción de la remera con estampado de gatos',
  },
  {
    id: '29',
    name: 'Remera cuello redondo gris',
    price: 17.99,
    category: 'remeras',
    img: 'product-images/29.jpg', // Ruta a la imagen del producto con el ID 29
    stock: 32,
    description: 'Descripción de la remera cuello redondo gris',
  },
  {
    id: '30',
    name: 'Remera estampada de montaña',
    price: 21.99,
    category: 'remeras',
    img: 'product-images/30.jpg', // Ruta a la imagen del producto con el ID 30
    stock: 27,
    description: 'Descripción de la remera estampada de montaña',
  },
  {
    id: '31',
    name: 'Remera básica negra',
    price: 14.99,
    category: 'remeras',
    img: 'product-images/31.jpg', // Ruta a la imagen del producto con el ID 31
    stock: 38,
    description: 'Descripción de la remera básica negra',
  },
  {
    id: '32',
    name: 'Remera a rayas rojas y blancas',
    price: 19.99,
    category: 'remeras',
    img: 'product-images/32.jpg', // Ruta a la imagen del producto con el ID 32
    stock: 34,
    description: 'Descripción de la remera a rayas rojas y blancas',
  },
  {
    id: '33',
    name: 'Remera con estampado de surf',
    price: 21.99,
    category: 'remeras',
    img: 'product-images/33.jpg', // Ruta a la imagen del producto con el ID 33
    stock: 25,
    description: 'Descripción de la remera con estampado de surf',
  },
  {
    id: '34',
    name: 'Remera cuello redondo negra',
    price: 17.99,
    category: 'remeras',
    img: 'product-images/34.jpg', // Ruta a la imagen del producto con el ID 34
    stock: 30,
    description: 'Descripción de la remera cuello redondo negra',
  },
  {
    id: '35',
    name: 'Remera con estampado de flores en blanco',
    price: 21.99,
    category: 'remeras',
    img: 'product-images/35.jpg', // Ruta a la imagen del producto con el ID 35
    stock: 29,
    description: 'Descripción de la remera con estampado de flores en blanco',
  },
  // ... otros productos
];


  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductsById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 500);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter((product) => product.category === categoryId);
        resolve(filteredProducts);
      }, 500);
    });
  };
  