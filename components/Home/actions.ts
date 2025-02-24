"use server"

import { z } from "zod";

const subscriptionRequestSchema = z.object({
      student_fullname: z.string().min(1, { message: "Fullname is required" }),
      student_birthday: z.string().min(1, { message: "Birthday is required" }),
      student_id: z.string().min(1, { message: "ID is required" }),
      student_email: z.string().min(1, { message: "Email is required" }),
      student_phone: z.string().min(1, { message: "Phone is required" }),
      parent_fullname: z.string().min(1, { message: "Fullname is required" }),
      parent_id: z.string().min(1, { message: "ID is required" }),
      parent_email: z.string().min(1, { message: "Email is required" }),
      parent_phone: z.string().min(1, { message: "Phone is required" }),
      emergency_fullname: z.string().min(1, { message: "Fullname is required" }),
      emergency_relationship_type: z.string().min(1, { message: "Relationship type is required" }),
      emergency_phone: z.string().min(1, { message: "Phone is required" }),
  });
  
  export type subscriptionRequestActionState = {
      student_fullname?: string;
      student_birthday?: string;
      student_id?: string;
      student_email?: string;
      student_phone?: string;
      parent_fullname?: string;
      parent_id?: string;
      parent_email?: string;
      parent_phone?: string;
      emergency_fullname?: string;
      emergency_relationship_type?: string;
      emergency_phone?: string;
      success?: string;
    errors?: {
      student_fullname?: string[];
      student_birthday?: string[];
      student_id?: string[];
      student_email?: string[];
      student_phone?: string[];
      parent_fullname?: string[];
      parent_id?: string[];
      parent_email?: string[];
      parent_phone?: string[];
      emergency_fullname?: string[];
      emergency_relationship_type?: string[];
      emergency_phone?: string[];
    };
  };

  export async function subscriptionRequestAction(_prevState: subscriptionRequestActionState, form: FormData): Promise<subscriptionRequestActionState> {
        const student_fullname = form.get("student_fullname") as string;
        const student_birthday = form.get("student_birthday") as string;
        const student_id = form.get("student_id") as string;
        const student_email = form.get("student_email") as string;
        const student_phone = form.get("student_phone") as string;
        const parent_fullname = form.get("parent_fullname") as string;
        const parent_id = form.get("parent_id") as string;
        const parent_email = form.get("parent_email") as string;
        const parent_phone = form.get("parent_phone") as string;
        const emergency_fullname = form.get("emergency_fullname") as string;
        const emergency_relationship_type = form.get("emergency_relationship_type") as string;
        const emergency_phone = form.get("emergency_phone") as string;

        const validatedFields = subscriptionRequestSchema.safeParse({ 
            student_fullname,
            student_birthday,
            student_id,
            student_email,
            student_phone,
            parent_fullname,
            parent_id,
            parent_email,
            parent_phone,
            emergency_fullname,
            emergency_relationship_type,
            emergency_phone,
        });

        if (!validatedFields.success) {
            return {
                student_fullname,
                student_birthday,
                student_id,
                student_email,
                student_phone,
                parent_fullname,
                parent_id,
                parent_email,
                parent_phone,
                emergency_fullname,
                emergency_relationship_type,
                emergency_phone,
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

    // If validation passes, you can send the data to your API or process it
    const response = await fetch('http://127.0.0.1:5001/karatearaucania-8cb0f/us-central1/registrationRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedFields.data),
    });
    const dataResponse = await response.json();


    console.log(dataResponse);

    if (response.ok) {
      console.log("Form submitted successfully!");
    } else {
      console.error("Form submission failed.");
    }


    return { 
        student_fullname,
        student_birthday,
        student_id,
        student_email,
        student_phone,
        parent_fullname,
        parent_id,
        parent_email,
        parent_phone,
        emergency_fullname,
        emergency_relationship_type,
        emergency_phone,
        success: 'Enviado satisfactoriamente!'
    };
  }