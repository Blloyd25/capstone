import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalApp() {
  return (
    <PayPalScriptProvider options={{"client-id": "AZ_0AUzafiXYNoQi_w6S8LXbDnLqY44UPwwBOmxs2cMhsCSeBZ8E8r6W0ma040U1qGAFdf91Bs4Rlwdg",currency:"USD"
       
    
    }}>
      <PayPalButtons
        createOrder={(data,actions) => {
          return actions.order.create({
            purchase_units:[
              {
                ammount: {
                 
                  value:"20",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}



















