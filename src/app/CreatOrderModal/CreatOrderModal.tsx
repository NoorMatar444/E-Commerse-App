"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import getMyToken from "@/Utilities/getMyToken";

export default function CreatOrderModal({ id }) {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      details: "",
      city: "",
      phone: "",
    },
  });
  async function handleOrder(values,id) {
    const token = await getMyToken();
    if (!token) {
      throw new Error("No Token");
    }
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/${id}`,
      {
        method: "POST",
        headers: {
          token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shippingAddress: {
            details: values.details,
            phone: values.phone,
            city: values.city,
          },
        }),
      }
    );
    const payload = await res.json();
    console.log(payload);
    return payload;
  }

  return (
    <>
      <div>
        {/* Modal toggle */}
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Cerat Order
        </button>
        {/* Main modal */}
        {isOpen && (
          <div
            id="authentication-modal"
            tabIndex={-1}
            aria-hidden="true"
            className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              {/* Modal content */}
              <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    please fill the form
                  </h3>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    type="button"
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* Modal body */}
                <div className="p-4 md:p-5">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleOrder)}>
                      <FormField
                        control={form.control}
                        name="details"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>details:</FormLabel>
                            <FormControl>
                              <Input {...field} type="text" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>city:</FormLabel>
                            <FormControl>
                              <Input {...field} type="text" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>phone:</FormLabel>
                            <FormControl>
                              <Input {...field} type="tel" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <br></br>
                      <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Creat order
                      </button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
