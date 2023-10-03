import React, { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Orden de compra</h2>
        <div className="card p-4 w-50 mx-auto">
          <form onSubmit={handleConfirm}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
              <label htmlFor="nombre">
                Nombre<span className="text-danger">*</span>
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                name="phone"
                id="phone"
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
              <label htmlFor="phone">
                Phone<span className="text-danger">*</span>
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
              <label htmlFor="email-reg">
                Email<span className="text-danger">*</span>
              </label>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary border-0">
                Crear orden
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
