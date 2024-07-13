"use server";

import { createClient } from "@/utils/supabase/server";

export async function csdSignUpAction(prev: unknown, formData:FormData) {
  const csd_number = formData.get('csd-number') as string;
  const business_name = formData.get('business-name') as string;
  const contact_details = formData.get('phone') as string;
  const email = formData.get('email') as string;
  const owner_name = formData.get('owner-name')  as string;

  if(!csd_number || !business_name || !contact_details || !email || !owner_name) {
    return { message: 'Please fill out all fields' }
  }

  const supabase = createClient()


  const { data, error } = await supabase.from('service_providers').insert([{
    csd_number,
    business_name,
    contact_details,
    email,
    name: owner_name
  }])

  if(error) {
    return { message: error.message };
  }

  return {message: 'Your business has been registered'}
}
