"use client"
import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckOutSchema, CheckOutSchemaType } from '@/schema/CheckOut.schema';
import OnlinePayment from '@/API/OnlinePayment/OnlinePayment';
import { useParams } from 'next/navigation';

export default function CheckOut() {
  const {id}:{id:string}=useParams();
    const form = useForm<CheckOutSchemaType>({
    defaultValues: {
      details: "",
      phone: "",
      city:"",
    },
    resolver:zodResolver(CheckOutSchema)
  });
  async function handleCheckOut(values:CheckOutSchemaType) {
    console.log(values);
    
    const res=await OnlinePayment(id,"",values)
    console.log(res)
    if(res.status==="success"){
      window.location.href=res.session.url
    }
  }
  return (
    <>
      <div className="container w-1/2 mx-auto my-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleCheckOut)}>
            <FormField
              control={form.control}
              name="details"
              render={({field}) => (
                <FormItem>
                  <FormLabel>details:</FormLabel>
                  <FormControl>
                    <Input {...field} type='text'/>
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
            <Button type="submit" className="my-3" variant="outline">Checkout</Button>
          </form>
        </Form>
        
      </div>
    </>
  );
}
