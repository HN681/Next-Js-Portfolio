import React, { useState } from 'react';
import Head from 'next/head';
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e, setState) => {
    const { name, value } = e.target;
    setState(value);
  };

  const validateEmail = () => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here (e.g., send data to server).

    // Assuming a successful submission, you can set isSubmitted to true.
    setIsSubmitted(true);
  };

  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold mb-5">Contact Us</h1>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-2 top-1 ${
                    name ? 'text-xs text-blue-500' : 'text-base text-gray-600'
                  } transition-all duration-300 ease-out`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${
                    name ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  value={name}
                  onChange={(e) => handleInputChange(e, setName)}
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-2 top-1 ${
                    email ? 'text-xs text-blue-500' : 'text-base text-gray-600'
                  } transition-all duration-300 ease-out`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${
                    email ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  value={email}
                  onChange={(e) => handleInputChange(e, setEmail)}
                  onBlur={validateEmail}
                />
                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-2 top-1 ${
                    message ? 'text-xs text-blue-500' : 'text-base text-gray-600'
                  } transition-all duration-300 ease-out`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${
                    message ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  value={message}
                  onChange={(e) => handleInputChange(e, setMessage)}
                ></textarea>
              </div>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="text-green-600 text-lg">
            Thank you for your submission! We will get back to you shortly.
          </div>
        )}

        {/* Contact Information */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
          <p className="mb-2">
            <FaEnvelope className="inline mr-2" />
            <strong>Email:</strong> contact@example.com
          </p>
          <p className="mb-2">
            <FaPhone className="inline mr-2" />
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="mb-2">
            <strong>Address:</strong> 123 Main St, City, Country
          </p>
        </div>

        {/* Social Media Links */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Connect with Us</h2>
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 mr-4"
          >
            <FaFacebook className="inline" /> Facebook
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 mr-4"
          >
            <FaTwitter className="inline" /> Twitter
          </a>
          <a
            href="https://www.instagram.com/youraccount"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <FaInstagram className="inline" /> Instagram
          </a>
        </div>
      </main>
    </div>
  );
}

export default Contact;
