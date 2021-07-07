import React, { useState, createContext } from 'react';

export const context = createContext(null);

let hi = JSON.parse(localStorage.getItem('str'));

export const State = props => {
  const [cart, setCart] = useState(hi);
  const [products] = useState([
    {
      id: 1,
      Title: 'iPhone 12',
      Img:
        'https://images-na.ssl-images-amazon.com/images/I/71fVoqRC0wL._AC_SL1500_.jpg',
      Price: 799
    },
    {
      id: 2,
      Title: 'OnePlus Nord',
      Img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSldK6iTA7Y71NCBInuRjO1IVRsHzB_BK12Aw&usqp=CAU',
      Price: 499
    },

    {
      id: 3,
      Title: 'OnePlus 9',
      Img:
        'https://670354.smushcdn.com/2260778/wp-content/uploads/2021/03/b.png?size=600x600&lossy=1&strip=1&webp=1',
      Price: 999
    },
    {
      id: 4,
      Title: 'Realme 8',
      Img:
        'https://www.91-cdn.com/hub/wp-content/uploads/2021/03/realme-8-image-featured.jpg',
      Price: 148
    },

    {
      id: 5,
      Title: 'Samsung A52',
      Img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHGgDHGmdOdESU02kzYI3p9IkDxTtAgjylA&usqp=CAU',
      Price: 799
    },
    {
      id: 6,
      Title: ' huawei mate 40 pro',
      Img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3JpMqDkMfiLRfedTPaoT5PZE7pyns_PWGg&u sqp=CAU',
      Price: 1300
    }
  ]);

  React.useEffect(() => {
    localStorage.setItem('str', JSON.stringify(cart));
  });
  return (
    <>
      <context.Provider value={{ products, cart, setCart }}>
        {props.children}
      </context.Provider>
    </>
  );
};
