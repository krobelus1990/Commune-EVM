import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TokenList = () => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await axios.get(
          'https://api.binance.com/api/v3/ticker/24hr'
        );
        // Sort tokens by descending trading volume
        const sortedTokens = response.data.sort((a, b) =>
          parseFloat(b.volume) - parseFloat(a.volume)
        );
        // Extract top 100 tokens
        const top100Tokens = sortedTokens.slice(0, 100);
        setTokens(top100Tokens);
      } catch (error) {
        console.error('Error fetching tokens:', error);
      }
    };

    fetchTokens();
  }, []);

  return (
    <div>
      <h2>Top 100 Tokens by Trading Volume</h2>
      <ul>
        {tokens.map((token, index) => (
          <li key={index}>{token.symbol}: {token.volume}</li>
        ))}
      </ul>
    </div>
  );
};

export default TokenList;
