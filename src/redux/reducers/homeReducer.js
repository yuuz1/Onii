import { HomeActionTypes } from "../actions/actionTypes";

import cloth1 from "../../assets/images/clothes/cloth1.jpg";
import cloth2 from "../../assets/images/clothes/cloth2.jpg";
import cloth3 from "../../assets/images/clothes/cloth3.jpg";
import cloth4 from "../../assets/images/clothes/cloth4.jpg";
import shoe1 from "../../assets/images/shoes/shoe1.jpg";
import shoe2 from "../../assets/images/shoes/shoe2.jpg";
import shoe3 from "../../assets/images/shoes/shoe3.jpg";
import shoe4 from "../../assets/images/shoes/shoe4.jpg";
import watch1 from "../../assets/images/watches/watch1.jpg";
import watch2 from "../../assets/images/watches/watch2.jpg";
import watch3 from "../../assets/images/watches/watch3.jpg";
import watch4 from "../../assets/images/watches/watch4.jpg";

const initialState = {
  products: [
    {
      id: 1,
      title: "womens Shirt",
      price: 50,
      category: "clothing",
      qty: 1,
      image: [
        {
          id: 1,
          imag: cloth1,
        },
        {
          id: 2,
          imag: cloth2,
        },
        {
          id: 3,
          imag: cloth3,
        },
        {
          id: 4,
          imag: cloth4,
        },
      ],
    },
    {
      id: 2,
      title: "womens clothing",
      price: 70,
      category: "clothing",
      qty: 1,
      image: [
        {
          id: 1,
          imag: cloth2,
        },
        {
          id: 2,
          imag: cloth3,
        },
        {
          id: 3,
          imag: cloth4,
        },
        {
          id: 4,
          imag: cloth1,
        },
      ],
    },
    {
      id: 3,
      title: " Black t-Shirt",
      price: 60,
      category: "clothing",
      qty: 1,
      image: [
        {
          id: 1,
          imag: cloth3,
        },
        {
          id: 2,
          imag: cloth4,
        },
        {
          id: 3,
          imag: cloth1,
        },
        {
          id: 4,
          imag: cloth2,
        },
      ],
    },
    {
      id: 4,
      title: " White t-Shirt",
      price: 65,
      category: "clothing",
      qty: 1,
      image: [
        {
          id: 1,
          imag: cloth4,
        },
        {
          id: 2,
          imag: cloth1,
        },
        {
          id: 3,
          imag: cloth2,
        },
        {
          id: 4,
          imag: cloth2,
        },
      ],
    },
    {
      id: 5,
      title: "Hush Puppies",
      price: 82,
      category: "shoes",
      qty: 1,
      image: [
        {
          id: 1,
          imag: shoe1,
        },
        {
          id: 2,
          imag: shoe2,
        },
        {
          id: 3,
          imag: shoe3,
        },
        {
          id: 4,
          imag: shoe4,
        },
      ],
    },
    {
      id: 6,
      title: "Louis Philippe",
      price: 78,
      category: "shoes",
      qty: 1,
      image: [
        {
          id: 1,
          imag: shoe2,
        },
        {
          id: 2,
          imag: shoe3,
        },
        {
          id: 3,
          imag: shoe4,
        },
        {
          id: 4,
          imag: shoe1,
        },
      ],
    },
    {
      id: 7,
      title: "Van Heusen",
      price: 75,
      category: "shoes",
      qty: 1,
      image: [
        {
          id: 1,
          imag: shoe3,
        },
        {
          id: 2,
          imag: shoe4,
        },
        {
          id: 3,
          imag: shoe1,
        },
        {
          id: 4,
          imag: shoe2,
        },
      ],
    },
    {
      id: 8,
      title: "Timberland",
      price: 69,
      category: "shoes",
      qty: 1,
      image: [
        {
          id: 1,
          imag: shoe4,
        },
        {
          id: 2,
          imag: shoe1,
        },
        {
          id: 3,
          imag: shoe2,
        },
        {
          id: 4,
          imag: shoe3,
        },
      ],
    },
    {
      id: 9,
      title: "Van Cleef & Arpels watch",
      price: 38,
      category: "watches",
      qty: 1,
      image: [
        {
          id: 1,
          imag: watch1,
        },
        {
          id: 2,
          imag: watch2,
        },
        {
          id: 3,
          imag: watch3,
        },
        {
          id: 4,
          imag: watch4,
        },
      ],
    },
    {
      id: 10,
      title: "Jaeger-LeCoultre watch",
      price: 45,
      category: "watches",
      qty: 1,
      image: [
        {
          id: 1,
          imag: watch2,
        },
        {
          id: 2,
          imag: watch3,
        },
        {
          id: 3,
          imag: watch4,
        },
        {
          id: 4,
          imag: watch1,
        },
      ],
    },
    {
      id: 11,
      title: "Audemars Piguet watch",
      price: 41,
      category: "watches",
      qty: 1,
      image: [
        {
          id: 1,
          imag: watch3,
        },
        {
          id: 2,
          imag: watch4,
        },
        {
          id: 3,
          imag: watch1,
        },
        {
          id: 4,
          imag: watch2,
        },
      ],
    },
    {
      id: 12,
      title: "Harry Winston watch",
      price: 32,
      category: "watches",
      qty: 1,
      image: [
        {
          id: 1,
          imag: watch4,
        },
        {
          id: 2,
          imag: watch1,
        },
        {
          id: 3,
          imag: watch2,
        },
        {
          id: 4,
          imag: watch3,
        },
      ],
    },
  ],
  singleProduct: {
    title: "",
    price: 0,
    category: "",
    qty: 1,
    image: [
      {
        imag: "",
      },
      {
        imag: "",
      },
      {
        imag: "",
      },
      {
        imag: "",
      },
    ],
  },
  cart: [],
  filterProducts : [],
 
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case "SELECTED_PRODUCT":
      return {
        ...state,
        singleProduct: action.payload,
      };

    case "DISPLAY_IMG":
      return {
        ...state,
        selectedImg: action.payload,
      };

    case "ADD_CART_PRODUCT":
      const item = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  qty: item.qty + 1,
                }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_ONE_CART":
      const item1 = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (item1) {
        return {
          ...state,
          cart: state.cart.map((item1) =>
            item1.id === action.payload.id
              ? {
                  ...item1,
                  qty: item1.qty > 1 ? item1.qty - 1 : 1,
                }
              : item1
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_CART_PRODUCT":
      const data = state.cart.filter((product) => product !== action.payload);
      return {
        ...state,
        cart: data,
      };

  
    default:
      return state;
  }
};
