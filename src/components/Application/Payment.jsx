import React, { useState } from 'react';

function Payment() {
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount === "") {
            alert("Please enter amount");
        } else {
            // Convert amount to integer (in paise)
            const amountInPaise = parseInt(amount) * 100;

            var options = {
                key: "",
                amount: amountInPaise,
                currency: "INR",
                name: "PROJECTS",
                description: "For testing purpose",
                handler: function (response) {
                    alert(response.razorpay_payment_id);
                },
                prefill: {
                    name: "",
                    email: "",
                    contact: ""
                },
                notes: {
                    address: "Razorpay Corporate office"
                },
                theme: {
                    color: "#3399cc"
                }
            };

            var pay = new window.Razorpay(options);
            pay.open();
        }
    };

    return (
        <div className="App">
            <h2>Razorpay Payment Integration Using React</h2>
            <br />
            <input type="text" placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
            <br /><br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Payment;
