 


// const reducer = (state, action) => {

//     switch (action.type) {

//         case 'CLEAR_CART': return { ...state, cart: [] };

//         case 'REMOVE': return{ ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),};

//         case 'INCREASE': let tempCart = state.cart.map((cartItem)=> {
//             if (cartItem.id === action.payload){return { ...cartItem, amount: cartItem.amount + 1 }}
//             return cartItem });
//           return { ...state, cart: tempCart };

//         case 'DECREASE': let tempCart2 = state.cart.map((cartItem) => {
//             if (cartItem.id === action.payload){return { ...cartItem, amount: cartItem.amount - 1 }}
//             return cartItem}).filter((cartItem) => cartItem.amount !== 0);
//             return { ...state, cart: tempCart2 };  
        
//         case 'GET_TOTALS': let { total, amount } = state.cart.reduce(
//             (cartTotal, cartItem) => {
//               const { pPrice, amount } = cartItem;
//               const itemTotal = pPrice * amount;
//               cartTotal.total = cartTotal.total + itemTotal;
//               cartTotal.amount = cartTotal.amount+ amount;
//               return cartTotal},{  total: 0,   amount: 0, } )
//                 total = parseFloat(total.toFixed(2))       
//             return { ...state, total, amount };

//         case 'LOADING': return { ...state, loading: true };

//         case 'DISPLAY_ITEMS': return { ...state, cart: action.payload, loading: false };

//         case 'TOGGLE_AMOUNT': let tempCart3 = state.cart.map((cartItem) => {
//             if (cartItem.id === action.payload.id) {
//               if (action.payload.type === 'inc') {
//                 return { ...cartItem, amount: cartItem.amount + 1 }}
//               if (action.payload.type === 'dec') {
//                 return { ...cartItem, amount: cartItem.amount - 1 }}
//             } return cartItem }).filter((cartItem) => cartItem.amount !== 0)
//         return { ...state, cart: tempCart3 };

            
//         case 'ADD_TO_CART': const { id, ProductName, pprice } = action.payload;
//         const tempItem = state.cart.find((i) => i.id === id )
//           if (tempItem) {
//             const tempCart = state.cart.map((cartItem) => {
//               if (cartItem.id === id ) {
//                 let newAmount = (cartItem.amount)+1;
//                  return { ...cartItem, amount: newAmount }
//               } else {
//                 return cartItem
//               }
//             })
//             return { ...state, cart: tempCart }
//           } else {
//             const newItem = {
//               id: id ,
//               pName: ProductName,
//               amount: 1,
//               pimage: false,
//               pprice:pprice,
//             }
//             return { ...state, cart: [...state.cart, newItem] }
//           }
//        ;

        
//         default:throw new Error('no matching action found');
//       }        
//     }

//   export default reducer