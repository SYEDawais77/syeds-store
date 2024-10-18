import React, { useState } from "react";

export default function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="text-gray-700 mb-4">
        Have any questions or need assistance? Feel free to reach out to us by
        filling out the form below, or contact us through one of the following
        options:
      </p>

      {/* Contact Options */}
      <div className="mb-6">
        <p className="text-lg font-semibold">Contact Options:</p>
        <ul className="list-none mt-2 space-y-2">
          <li>
            <a
              href="https://www.linkedin.com/in/syed-awais-shah-784a8a277/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn: Syed Awais Shah
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/00923127415089"
              className="text-green-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: +923127415089
            </a>
          </li>
          <li>
            <a
              href="mailto:shah.syedawais77@yahoo.com"
              className="text-gray-800 hover:underline"
            >
              Email: shah.syedawais77@yahoo.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
