import { createApi, fatchBaseQuery } from 'reduxjs/toolkit/query/react';

const cryptoApiHeader = {
  'x-rapidapi-host': import.meta.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  'x-rapidapi-key' : import.meta.env.REACT_APP_RAPIDAPI_KEY
};

const createRequest = (url) => ({url, headers: cryptoApiHeader });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fatchBaseQuery({ baseUrl: import.meta.env.REACT_APP_RAPIDAPI_URL }),
  endPoints: (builder) => ({

    getCrypto: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),

    getExchanges: builder.query({
      query: () => createRequest(`/exchanges`),
    }),
  }),
});

export const {
  useGetCryptoQuery,
  useGetCryptoDetailQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;