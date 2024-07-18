const products = [
    {
        id: "1",
        name: "Espada Armada",
        price: 12,
        category: "espada",
        img: "https://darkanddarker.gameslantern.com/storage/uploads/editor/images/2zfQhdC7ycYITwUUnh4E7KmGRcw7dFVWAHw4yG2F.png",
        stock: 10,
        description: "Una fina hoja con uniones de cuero, capaz de soportar un firme agarre para ataques rápidos que se sienten ligeros a la mano",
    },
    {
        id: "2",
        name: "Estoque",
        price: 12,
        category: "espada",
        img: "https://darkanddarker.gameslantern.com/storage/uploads/editor/images/K2jt2nLydSinGZW57lNROGrafwNurLCs8zOukbfd.png",
        stock: 10,
        description: "Una hoja delgada pero afilada fabricada con una protectiva guarda para manos. Eficaz tanto en el corte como en el empuje",
    },
    {
        id: "3",
        name: "Escudo Redondo",
        price: 20,
        category: "escudo",
        img: "https://darkanddarker.gameslantern.com/storage/uploads/editor/images/shmIdt4eXyPdxygHmb8xhIgvCwdEAlTeLBbh2iKi.png",
        stock: 5,
        description: "Un escudo redondo de madera de tamaño mediano con detalles en cuero, versátil e impactante en las manos del usuario",
    },
    {
        id: "4",
        name: "Rodela",
        price: 15,
        category: "escudo",
        img: "https://darkanddarker.gameslantern.com/storage/uploads/editor/images/QvP9UmpdligEgCor1idtlQfLeTq9AM4jXCtaPbt0.png",
        stock: 5,
        description: "Un pequeño escudo con un asa ubicada directamente detrás del mismo, que garantiza protección durante el combate cercano",
    },
    {
        id: "5",
        name: "Arco Recurvo",
        price: 15,
        category: "arco",
        img: "https://darkanddarker.gameslantern.com/storage/uploads/editor/images/vdt38e3qF3B4elqVb8UpHYCHTBvhevCYfYNniHoa.png",
        stock: 10,
        description: "Diseñado con curvas, logrando un equilibrio entre velocidad y precisión, capaz de despachar a los enemigos desde lejos",
    },
    {
        id: "6",
        name: "Arco de Supervivencia",
        price: 5,
        category: "arco",
        img: "https://darkanddarker.gameslantern.com/storage/uploads/editor/images/B8xad4WWHufeDylnSQZ0bhgMBmhs92ZxbpkT5ExK.png",
        stock: 15,
        description: "Arco de madera rápido y ligero fue improvisado por aventureros para sobrevivir",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 1000);
    });
};

export const getProductById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productoId));
        }, 1000);
    });
};