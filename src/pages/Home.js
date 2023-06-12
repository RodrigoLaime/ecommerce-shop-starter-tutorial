import React from 'react';
import { useContext } from 'react';
// import product context
import { ProductContext } from '../contexts/ProductContext';
// import component
import Product from "../components/Product";
// 
import Hero from '../components/Hero';
const Home = () => {
  // get products from products context
  const { products } = useContext(ProductContext);
  // console.log(products);
  // get only men is & women us clothing category
  const filteredroducts = products.filter(item => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  // console.log(filteredroducts);
  return (
    <div>
      <Hero/>
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredroducts.map((item) => {
              return <Product product={item} key={item.id} />
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
