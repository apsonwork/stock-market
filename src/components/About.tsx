import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">About Bitcoin</h2>
      
      <div className="prose max-w-none">
        <h3 className="text-lg font-medium mb-2">What Is Bitcoin (BTC)?</h3>
        <p className="text-gray-600 mb-4">
          Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, 
          or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009.
        </p>
        
        <h3 className="text-lg font-medium mb-2">Who Are the Founders of Bitcoin?</h3>
        <p className="text-gray-600 mb-4">
          Bitcoin's original inventor is known under a pseudonym, Satoshi Nakamoto. As of 2021, 
          the true identity of the person — or organization — that is behind the alias remains unknown.
        </p>
        
        <h3 className="text-lg font-medium mb-2">What Makes Bitcoin Unique?</h3>
        <p className="text-gray-600 mb-4">
          Bitcoin's most unique advantage comes from the fact that it was the very first cryptocurrency 
          to appear on the market. It has managed to create a global community and give birth to an 
          entirely new industry of millions of enthusiasts who create, invest in, trade and use Bitcoin 
          and other cryptocurrencies in their everyday lives.
        </p>
        
        <h3 className="text-lg font-medium mb-2">How Much Bitcoin Is in Circulation?</h3>
        <p className="text-gray-600">
          Bitcoin's total supply is limited by its software and will never exceed 21,000,000 coins. 
          New coins are created during the process known as "mining": as transactions are relayed across 
          the network, they get picked up by miners and packaged into blocks, which are in turn protected 
          by complex cryptographic calculations.
        </p>
      </div>
    </div>
  );
};

export default About;
