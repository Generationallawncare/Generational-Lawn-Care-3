
import React, { useState } from 'react';
export default function QuoteForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', service: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); alert('Form submitted!'); };
  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-gray-100 rounded-xl">
      <input name="name" placeholder="Name" onChange={handleChange} className="w-full mb-2 p-2" required />
      <input name="email" placeholder="Email" onChange={handleChange} className="w-full mb-2 p-2" required />
      <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full mb-2 p-2" required />
      <input name="address" placeholder="Service Address" onChange={handleChange} className="w-full mb-2 p-2" required />
      <input name="service" placeholder="Service Needed" onChange={handleChange} className="w-full mb-2 p-2" required />
      <button type="submit" className="px-4 py-2 bg-black text-white rounded">Submit</button>
    </form>
  );
}
