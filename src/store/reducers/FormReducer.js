const initialState = {
  formIsValid: false,
  orderForm: {
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your name",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    item: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your items",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },

    street: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your street",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    zipcode: {
      elementType: "input",
      elementConfig: {
        type: "number",
        placeholder: "Your Zipcode",
      },
      value: "",
      validation: {
        required: true,
        minLength: 5,
        maxLength: 6,
      },
      valid: false,
      touched: false,
    },
    country: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Country",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your Email",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    price: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Total Price",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    deliveryMethod: {
      elementType: "select",
      elementConfig: {
        options: [
          { value: "fastest", displayValue: "Fastest" },
          { value: "cheapest", displayValue: "Cheapest" },
        ],
      },
      validation: {
        required: true,
      },
      value: "fastest",
      valid: true,
      touched: false,
    },
  },
};
const checkvalidity = (value, validation) => {
  let isValid = true;
  if (validation.required) {
    isValid = value.trim() !== "" && isValid;
  }
  if (validation.minLength) {
    isValid = value.length >= validation.minLength && isValid;
  }
  if (validation.maxLength) {
    isValid = value.length <= validation.maxLength && isValid;
  }
  return isValid;
};
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_VALUE":
      const updatedOrderForm = { ...state.orderForm };
      const updatedFormElement = { ...updatedOrderForm[action.key] };
      updatedFormElement.value = action.value;
      updatedFormElement.valid = checkvalidity(
        updatedFormElement.value,
        updatedFormElement.validation
      );
      updatedFormElement.touched = true;
      updatedOrderForm[action.key] = updatedFormElement;
      let formIsValid = true;
      for (let inputIdentifier in updatedOrderForm) {
        formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
      }

      return { orderForm: updatedOrderForm, formIsValid: formIsValid };

    case "ADD_ORDER":
      return state;
    default:
      return state;
  }
};

export default formReducer;
