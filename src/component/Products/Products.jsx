import { Fragment } from 'react';
import './Products.css'
import { Tabs } from 'antd';

const Products = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const cardContent = (products) => (
    <Fragment>
      <ul className='card'>
        {products.map((product, index) => (
            <li key={index}>
              <img src={product.image} />
              <span>{product.p}</span>
            </li>
          ))}
      </ul>
    </Fragment>
  );

  const items = [
    {
      key: '1',
      label: 'Financial Tech',
      children: cardContent([
        {
          image: "/media/Our products icon-1.png",
          p: "offers a wide range of Online/Offline courses to suit your needs."
        },
        {
          image: "/media/Our products icon-2.png",
          p: "Gain insights into the workings of software and digital technologies."
        },
        {
          image: "/media/Our products icon-3.png",
          p: "Improve precision and methodical thinking in your communication."
        },
        {
          image: "/media/Our products icon-4.png",
          p: "Improve precision and methodical thinking in your communication."
        }
      ]),
    },
    {
      key: '2',
      label: 'E-commerce',
      children: cardContent([
        {
          image: "/media/Our products icon-1.png",
          p: "providing cutting edge solutions, helping your businesses to effortlessly create, manage, and grow your online stores."
        },
        {
          image: "/media/Our products icon-2.png",
          p: "Our product supported with advanced control panel."
        },
        {
          image: "/media/Our products icon-3.png",
          p: "Supported with integrated payment gateways (Mada, Tamara, Taby, Visa, Etc …)."
        },
        {
          image: "/media/Our products icon-4.png",
          p: "Wide range of advanced features like; order tracking, reporting system, seamless design, inventory management and more than that."
        }
      ]),
    },
    {
      key: '3',
      label: 'Healthcare',
      children: cardContent([
        {
          image: "/media/Our products icon-1.png",
          p: 'Advanced control panel.'
        },
        {
          image: "/media/Our products icon-2.png",
          p: 'Fully mobilized solutions to service all the different users types like; patient, doctors, nurses and all admins layers'
        },
        {
          image: "/media/Our products icon-3.png",
          p: "Digital services like; telemedicine ,medical home visits, online booking , insurance, etc…"
        },
        {
          image: "/media/Our products icon-4.png",
          p: "AI Supported."
        }
      ]),
    },
  ];

  return (
    <div className='products'>
      <div className='image'>
        <img src='/media/Group 52310.png' alt='Group 52310' />
      </div>
      <div className='text'>
        <h1>Our Products</h1>
        <p>Have a look and start an exceptional journey.</p>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
}

export default Products;
