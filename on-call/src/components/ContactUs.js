import React from "react";

const ContactUs = () => {
  return (
    <div className=" app-contanier h-screen flex justify-center">
      <div className="h-full bg-[#fff] w-2/5 mt-5 mr-5">
        <div className="border-b-2 px-5 py-5">
          <h1 className="text-lg  underline">INFO</h1>
          <h2 className="text-xs mb-5">Order Enquiries</h2>
          <p className="text-md">
            If your order is late, incorrect,or if You're not happy with the
            food,please contact us directly on
          </p>
          <p className="text-xl">0124 676667</p>
        </div>
        <div className="mt-5 ml-5">
          <h3>Location</h3>
        </div>
      </div>
      <div className="h-2/5 bg-[#fff] w-1/5 mt-5 px-5 flex flex-col">
        <table class="table-auto">
          <thead>
            <tr className="border-2 border-black">
              <th>Day</th>
              <th>Collection</th>
              <th>Delivery</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>10:45am - 11:45pm</td>
              <td>10:45am - 11:45pm</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>10:45am - 11:45pm</td>
              <td>10:45am - 11:45pm</td>
            </tr>{" "}
            <tr>
              <td>Wednesday</td>
              <td>10:45am - 11:45pm</td>
              <td>10:45am - 11:45pm</td>
            </tr>{" "}
            <tr>
              <td>Thursday</td>
              <td>10:45am - 11:45pm</td>
              <td>10:45am - 11:45pm</td>
            </tr>{" "}
            <tr>
              <td>Friday</td>
              <td>10:45am - 11:45pm</td>
              <td>10:45am - 11:45pm</td>
            </tr>{" "}
            <tr>
              <td>saturday</td>
              <td>10:45am - 11:45pm</td>
              <td>10:45am - 11:45pm</td>
            </tr>{" "}
            <tr>
              <td>Sunday</td>
              <td>10:45am - 11:45pm</td>
              <td>10:45am - 11:45pm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactUs;
