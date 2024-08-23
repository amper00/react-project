
import data from './data.json';  

export const Product = () => {

    const { imgUrl, name, price } = data;
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="480" />
      <p>Price: {price} credits</p>
    </div>
  );
};
