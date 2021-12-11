// JavaScript source code
import React, { useEffect, useState } from 'react';
//import { TokenListProvider, TokenInfo } from '@solana/spl-token-registry';
import pkg from '@solana/spl-token-registry';
const { TokenListProvider, TokenInfo } = pkg;

new TokenListProvider().resolve().then((tokens) => {
    const tokenList = tokens.filterByClusterSlug('mainnet-beta').getList();
    console.log(tokenList);
});


