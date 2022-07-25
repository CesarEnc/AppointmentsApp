import React from "react";

import {FiInfo} from "react-icons/fi"

export function AppointmentInfoModal({apt}) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-blue-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <FiInfo/>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Appointment Information
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-2 flex-auto m-auto ">
                    <label className="mr-5" for="petName">Pet Name:</label>
                    <input className="text-white bg-gray-500 mr-1" type="text" id="petName" name="petName"  value= {apt.petName} />
                </div>
                <div className="relative p-2 flex-auto m-auto">
                    <label className="mr-4" for="ownerName">Owner:</label>
                    <input className="text-white bg-gray-500 ml-4" type="text" id="petName" name="petName"  value= {apt.ownerName} />
                </div>
                <div className="relative p-2 flex-auto m-auto ">
                    <label className="mr-5" for="aptNotes">Notes:</label>
                    <input className="text-white bg-gray-500 ml-5" type="text" id="petName" name="petName"  value= {apt.aptNotes} />
                </div>
                <div className="relative p-2 flex-auto m-auto ">
                    <label className="mr-5" for="aptDate">Date:</label>
                    <input className="text-white bg-gray-500 ml-6" type="text" id="petName" name="petName"  value= {apt.aptDate} />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}