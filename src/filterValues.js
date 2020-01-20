const minPriceValues = [
    {value: 100000, title: '100 K'},
    {value: 250000, title: '250 K'},
    {value: 500000, title: '500 K'},
    {value: 1000000, title: '1 M'},
    {value: 1500000, title: '1.5 M'},
    {value: 2500000, title: '2.5 M+'},
  ];
  const maxPriceValues = [
    {value: 250000, title: '250 K'},
    {value: 500000, title: '500 K'},
    {value: 1000000, title: '1 M'},
    {value: 1500000, title: '1.5 M'},
    {value: 2500000, title: '2.5 M'},
    {value: 10000000, title: '10 M'},
    {value: 1000000000, title: 'Unlimited'},

  ];
  const minNumberOfBaths = [
      {value:1,label:'1'},
      {value:2,label:'2'},
      {value:3,label:'3'},
      {value:4,label:'4'},
      {value:100,label:'5+'},
  ];
  const minNumberOfRooms = [
    {value:1,label:'1'},
    {value:2,label:'2'},
    {value:3,label:'3'},
    {value:4,label:'4'},
    {value:100,label:'5+'},
];
const maxNumberOfRooms = [
    {value:1,label:'1'},
    {value:2,label:'2'},
    {value:3,label:'3'},
    {value:4,label:'4'},
    {value:5,label:'5'},
];
  const maxNumberOfBaths = [
    {value:1,label:'1'},
    {value:2,label:'2'},
    {value:3,label:'3'},
    {value:4,label:'4'},
    {value:5,label:'5'},
];
const minSqft = [
    {value:50,label:'50'},
    {value:150,label:'150'},
    {value:250,label:'250'},
    {value:500,label:'500'},
    {value:100000000,label:'1000+'},
];
const maxSqft = [
    {value:100,label:'100'},
    {value:250,label:'250'},
    {value:500,label:'500'},
    {value:1000,label:'1000'},
    {value:100000,label:'10,000'},
];
  const propertyTypes = [
      {value:'Family'},
      {value:'Warehouse'},
      {value:'Mobile'},
      {value:'Farm'},
      {value:'Land'},
      {value:'Condo'},
      {value:'Coop'},
      {value:'Townhome'},
      {value:'Igloos'},
  ]; 
  module.exports = {
    minPriceValues,
    maxPriceValues,
    minNumberOfBaths,
    maxNumberOfBaths,
    minSqft,
    maxSqft,
    propertyTypes,
    maxNumberOfRooms,
    minNumberOfRooms
  };
