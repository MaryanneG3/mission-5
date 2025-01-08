import { Builder } from '@builder.io/react';
import PriceCard from './components/priceComp/PriceCard';
import SearchAddress from './components/priceComp/SearchAddress';

Builder.registerComponent(PriceCard, {
  name: 'PriceCard',
  inputs: [
    {
      name: 'fuelType',
      type: 'string',
      defaultValue: '91'
    },
    {
      name: 'price',
      type: 'string',
      defaultValue: '2.979'
    },
    {
      name: 'variant',
      type: 'string',
      defaultValue: 'orange',
      enum: ['orange', 'blue']
    }
  ]
});

Builder.registerComponent(SearchAddress, {
  name: 'SearchAddress',
  inputs: [
    {
      name: 'onAddressSelect',
      type: 'function'
    }
  ]
});
