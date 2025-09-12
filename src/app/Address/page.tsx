"use client"
import GetUserAddressApi from "@/API/GetUserAddress/GetUserAddressApi";
import RemoveAddressApi from "@/API/RemoveAddress/RemoveAddressAoi";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import getMyToken from "@/Utilities/getMyToken";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { toast } from "sonner";


export default function Address() {
  const [address,SetAddress]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [currentId,setCurrentId]=useState("");
  const [isDesabled,setIsDesabled]=useState(false)
     const form = useForm({
        defaultValues: {
          name: "",
          details: "",
          phone: "",
          city: "",
        },
        
      });
      async function handleAddress(values) {
        const token=await getMyToken()
        console.log(values);
    try{
      const res= await axios.post("https://ecommerce.routemisr.com/api/v1/addresses",values,{
        headers:{
          token:token,
          "Content-Type":"application/json"
        }
      });
      console.log(res)
      if(res.data.status==="success"){
        toast.success("Address has been created.",{position:"top-center",duration:3000})
        getAddress()
      }
    }
    catch(err){
      toast.error("error.",{position:"top-center",duration:3000})
    }
  }
  async function getAddress(){
    const {data}=await GetUserAddressApi()
    SetAddress(data)
  }
  async function deleteAddress(id){
    setCurrentId(id);
    setIsLoading(true);
    const data= await RemoveAddressApi(id);
    console.log(data)
    setIsLoading(false);
    getAddress()
    
  }
  useEffect(()=>{
    getAddress()
  },[])
  return (
    <>
      <div className="container w-1/2 mx-auto my-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddress)}>
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Name:</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="details"
              render={({field}) => (
                <FormItem>
                  <FormLabel>details:</FormLabel>
                  <FormControl>
                    <Input {...field} type="text"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({field}) => (
                <FormItem>
                  <FormLabel>city:</FormLabel>
                  <FormControl>
                    <Input {...field} type="text"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({field}) => (
                <FormItem>
                  <FormLabel>phone:</FormLabel>
                  <FormControl>
                    <Input {...field} type="tel"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="my-3" variant="outline">Add address</Button>
          </form>
        </Form>
      </div>
      <div className="container w-[80%] mx-auto">
              {address.map((item)=><div key={item._id}>
               <Link href={`/Address/${item._id}`}>
                 <div className="card border-2 my-6">
                  <h1>{item.name}</h1>
                  <p>{item.details}</p>
                  <p>{item.city}</p>
                  <p>{item.phone}</p>
                </div>
               </Link>
               {currentId===item._id?isLoading?<i className="fa-solid fa-spinner fa-spin"></i>:<Button disabled={isLoading} className='w-full bg-black text-white' onClick={()=>deleteAddress(item._id)} variant="outline">Remove</Button>:<Button disabled={isLoading} className='w-full bg-black text-white' onClick={()=>deleteAddress(item._id)} variant="outline">Remove</Button>}
              
               
              </div>)}
      </div>
    </>
  )
}
