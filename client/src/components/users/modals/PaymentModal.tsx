import { FormEvent, useState } from "react";
import UserService from "../../../services/UserService";

const PaymentModal = () => {
  
  const makePayment = async(e:FormEvent) => {
    e.preventDefault();
    try {
      const { data: { data : { authorization_url } } } = await UserService.PayWithPaystack();
      if (authorization_url) {
        window.location.href = authorization_url;
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <section>
      <h3 className="trip-payment text-center"> Trip Payment </h3>
      <p className="text-center">You are about to fund this trip</p>
      <p className="text-center">Amount</p>
      <strong className="text-center fw-bolder">N20000</strong>
      <p className="text-center"> <i className="fa-solid fa-exclamation"></i> Selecting any of the payment method will redirect you to their payment platform.</p>
      <h5 className="text-center" >Select payment method</h5>

      <div className="row">
        <div className="col-sm-12 col-md-6">Flutterwave</div>
        <div className="col-sm-12 col-md-6">Paystack</div>
      </div>

      <form onSubmit={makePayment}>
        <button className="btn btn-lg">
          Pay
        </button>
      </form>

    </section>
  )
}

export default PaymentModal;