import React from "react";
import { connect } from "react-redux";
import Input from "../../components/UI/Input/Input ";
import * as actionTypes from "../../store/actions/index";
import Button from "../../components/UI/Button/Button";

function OrderForm(props) {
  let formInputElemnts = [];
  for (let key in props.orderForm) {
    formInputElemnts.push({
      id: key,
      config: props.orderForm[key],
    });
  }

  const onAddOrder = (event) => {
    event.preventDefault();
    props.onAddOrder(props.orderForm);
    console.log(props);
    props.history.push("/status");
  };

  let forms = (
    <form onSubmit={onAddOrder}>
      {formInputElemnts.map((formElement, index) => {
        return (
          <Input
            key={index}
            value={formElement.config.value}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            change={(event) =>
              props.onChangeHandler(event.target.value, formElement.id)
            }
            inValid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
          />
        );
      })}
      <Button disable={!props.formIsValid}>ORDER</Button>
    </form>
  );

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h3>Place Order</h3>
      {forms}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    orderForm: state.formRed.orderForm,
    formIsValid: state.formRed.formIsValid,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    onChangeHandler: (value, key) =>
      dispatch({ type: "CHANGE_VALUE", value: value, key: key }),
    onAddOrder: (orderForm) => dispatch(actionTypes.addOrder(orderForm)),
  };
};
export default connect(mapStateToProps, mapDispatchToState)(OrderForm);
