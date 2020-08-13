var initialState = [
    {
        id: 0,
        name: 'Iphone 7 Plus',
        image: 'https://24hstore.vn/images/products/2020/04/19/large/iphone-7-plus--jet-black_1587272216_1.jpg',
        description: 'By Apple',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 1,
        name: 'Samsung Note 10',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2020/1/17/637148516615700174_SS-note10-lite-den-1.png',
        description: 'By Samsung',
        price: 890,
        inventory: 9,
        rating: 5
    },
    {
        id: 2,
        name: 'Iphone XS Max',
        image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_xs_max_64gb.jpg',
        description: 'By Apple',
        price: 1000,
        inventory: 5,
        rating: 3
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        
        default: return [...state];
    }
}

export default products;