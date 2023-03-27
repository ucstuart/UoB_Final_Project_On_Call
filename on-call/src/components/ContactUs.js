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
      <div className="h-2/5 bg-[#fff] w-1/4 mt-5 px-5 flex flex-col">
        <table class="table-auto mt-10">
          <thead>
            <tr className="border-2 border-black">
              <th>Day</th>
              <th>Collection</th>
              <th>Delivery</th>
            </tr>
          </thead>
          <tbody className="border-2 border-black ml-4">
            <tr className="border-2 border-black">
              <td className="pl-2">Monday</td>
              <td>10:45am - 11:45pm</td>
              <td>10:45am - 11:45pm</td>
            </tr>
            <tr className="border-2 border-black">
              <td className="pl-2">Tuesday</td>
              <td>10:45am - 11:45pm</td>
              <td>10:45am - 11:45pm</td>
            </tr>{" "}
            <tr className="border-2 border-black">
              <td className="pl-2">Wednesday</td>
              <td>10:45am - 11:45pm</td>
              <td>10:45am - 11:45pm</td>
            </tr>{" "}
            <tr className="border-2 border-black">
              <td className="pl-2">Thursday</td>
              <td>10:45am - 11:45pm</td>
              <td>10:45am - 11:45pm</td>
            </tr>{" "}
            <tr className="border-2 border-black">
              <td className="pl-2">Friday</td>
              <td>10:45am - 11:45pm</td>
              <td>10:45am - 11:45pm</td>
            </tr>{" "}
            <tr className="border-2 border-black">
              <td className="pl-2">saturday</td>
              <td>10:45am - 11:45pm</td>
              <td>10:45am - 11:45pm</td>
            </tr>{" "}
            <tr className="border-2 border-black">
              <td className="pl-2">Sunday</td>
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
