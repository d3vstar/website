"use server"
import { GoogleAuth } from 'google-auth-library';
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
import { z } from "zod";

const subscriptionRequestSchema = z.object({
      student_motivation: z.string().min(1, { message: "Requerido: Indicar sus expectativas de la academia" }),
      student_fullname: z.string().min(1, { message: "Requerido: Nombre completo del postulante" }),
      student_birthday: z.string().min(1, { message: "Requerido: Fecha de nacimiento del postulante" }),
      student_id: z.string().min(1, { message: "Requerido: Cédula de Identidad del postulante" }),
      student_email: z.string().optional(),
      student_phone: z.string().optional(),
      is_parent: z.boolean(),
      parent_fullname: z.string().optional(),
      parent_id: z.string().optional(),
      parent_email: z.string().optional(),
      parent_phone: z.string().optional(),
      emergency_fullname: z.string().min(1, { message: "Requerido: Nombre completo del contacto de emergencia" }),
      emergency_relationship_type: z.string().min(1, { message: "Requerido: Tipo de parentesco del contacto de emergencia" }),
      emergency_phone: z.string().min(1, { message: "Requerido: Teléfono del contacto emergencia" }),
  }).refine( (data) => {
    const { is_parent } = data;
    const student_email = data.student_email || "";

    return is_parent ? student_email.length > 0 : student_email.length >= 0;
  }, {
    message: "Requerido: correo de postulante mayor de edad",
    path: ['student_email']
  }).refine( (data) => {
    const { is_parent } = data;
    const student_phone = data.student_phone || "";

    return is_parent ? student_phone.length > 0 : student_phone.length >= 0;
  }, {
    message: "Requerido: Teléfono de contacto del postulante mayor de edad",
    path: ['student_phone']
  }).refine( (data) => {
    const { is_parent } = data;
    const parent_fullname = data.parent_fullname || "";

    return !is_parent ? parent_fullname.length > 0 : parent_fullname.length >= 0;
  }, {
    message: "Requerido: Nombre completo del apoderado",
    path: ['parent_fullname']
  }).refine( (data) => {
    const { is_parent } = data;
    const parent_id = data.parent_id || "";

    return !is_parent ? parent_id.length > 0 : parent_id.length >= 0;
  }, {
    message: "Requerido: Cédula de Identidad del apoderado",
    path: ['parent_id']
  }).refine( (data) => {
    const { is_parent } = data;
    const parent_email = data.parent_email || "";

    return !is_parent ? parent_email.length > 0 : parent_email.length >= 0;
  }, {
    message: "Requerido: Correo del apoderado",
    path: ['parent_email']
  }).refine( (data) => {
    const { is_parent } = data;
    const parent_phone = data.parent_phone || "";

    return !is_parent ? parent_phone.length > 0 : parent_phone.length >= 0;
  }, {
    message: "Requerido: Teléfono del apoderado",
    path: ['parent_phone']
  });
  
  export type subscriptionRequestActionState = {
      student_motivation?: string;
      student_fullname?: string;
      student_birthday?: string;
      student_id?: string;
      student_email?: string;
      student_phone?: string;
      is_parent?: boolean;
      parent_fullname?: string;
      parent_id?: string;
      parent_email?: string;
      parent_phone?: string;
      emergency_fullname?: string;
      emergency_relationship_type?: string;
      emergency_phone?: string;
      success?: string;
    errors?: {
      student_motivation?: string[];
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
        const student_motivation = form.get("student_motivation") as string;
        const student_fullname = form.get("student_fullname") as string;
        const student_birthday = form.get("student_birthday") as string;
        const student_id = form.get("student_id") as string;
        const student_email = form.get("student_email") as string;
        const student_phone = form.get("student_phone") as string;
        const is_parent = (form.get("is_parent") == "on") as boolean;
        const parent_fullname = form.get("parent_fullname") as string;
        const parent_id = form.get("parent_id") as string;
        const parent_email = form.get("parent_email") as string;
        const parent_phone = form.get("parent_phone") as string;
        const emergency_fullname = form.get("emergency_fullname") as string;
        const emergency_relationship_type = form.get("emergency_relationship_type") as string;
        const emergency_phone = form.get("emergency_phone") as string;


        // console.log(`IsParent: ${is_parent}`);

        // const waitingPromise = new Promise( (resolver, rejected) => {
        //   setTimeout(() => {
        //     resolver("done");
        //   }, 4000)
        // });

        // await waitingPromise.then( (r) => console.log("waiting time finished!"));

        const validatedFields = subscriptionRequestSchema.safeParse(
          { 
            student_motivation,
            student_fullname,
            student_birthday,
            student_id,
            student_email,
            student_phone,
            is_parent,
            parent_fullname,
            parent_id,
            parent_email,
            parent_phone,
            emergency_fullname,
            emergency_relationship_type,
            emergency_phone
          });

          console.log(`Validation Fields result success? : ${validatedFields.success}`);
          
          if (!validatedFields.success) {
            console.log(`Errors: ${JSON.stringify(validatedFields.error.flatten().fieldErrors)}`)
          }
        if (!validatedFields.success) {

          return {...validatedFields, success: 'validation', errors: validatedFields.error.flatten().fieldErrors}
        }

        /**
         * Check environment variables
         */
        let GOOGLE_CLOUD_FUNCTION_CREDENTIALS_FILE = "";
        let GOOGLE_CLOUD_FUNCTION_TARGET_AUDIENCE = "";

        try {
            const clientSecretManager = new SecretManagerServiceClient();
            const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG || "");

            if(firebaseConfig === "") {
                console.error('Error accessing variable FIREBASE_CONFIG');
                return {...validatedFields, success: 'fail'}
            }

            const { projectId } = firebaseConfig;


            if(!projectId || projectId === "") {
                console.error('Error accessing variable GOOGLE_CLOUD_PROJECT');
            }

            const versionId = 'latest';
            
            const GOOGLE_CLOUD_FUNCTION_CREDENTIALS_FILE_KEY = 'GOOGLE_CLOUD_FUNCTION_CREDENTIALS_FILE';
            const versionNameCredentialsFile = `projects/${projectId}/secrets/${GOOGLE_CLOUD_FUNCTION_CREDENTIALS_FILE_KEY}/versions/${versionId}`;
            let [versionName] = await clientSecretManager.accessSecretVersion({ name: versionNameCredentialsFile });
            GOOGLE_CLOUD_FUNCTION_CREDENTIALS_FILE = versionName?.payload?.data?.toString() || "";
            
            const GOOGLE_CLOUD_FUNCTION_TARGET_AUDIENCE_KEY = 'GOOGLE_CLOUD_FUNCTION_TARGET_AUDIENCE';
            const versionNameAudience = `projects/${projectId}/secrets/${GOOGLE_CLOUD_FUNCTION_TARGET_AUDIENCE_KEY}/versions/${versionId}`;
            [versionName] = await clientSecretManager.accessSecretVersion({ name: versionNameAudience });
            GOOGLE_CLOUD_FUNCTION_TARGET_AUDIENCE = versionName?.payload?.data?.toString() || "";

        } catch(error) {
            console.error("Error accessing secrets:", error);
            return {...validatedFields, success: 'fail'};
        }

        try {
          const auth = new GoogleAuth({
              credentials: JSON.parse(GOOGLE_CLOUD_FUNCTION_CREDENTIALS_FILE), // path.join(process.cwd(), GOOGLE_CLOUD_FUNCTION_CREDENTIALS_FILE),
            });
      
          const idTokenClient = await auth.getIdTokenClient(GOOGLE_CLOUD_FUNCTION_TARGET_AUDIENCE);
          const idToken = await idTokenClient.idTokenProvider.fetchIdToken(GOOGLE_CLOUD_FUNCTION_TARGET_AUDIENCE);
          
          // Make a request to the target audience URL
          const res = await idTokenClient.request({ 
            url: GOOGLE_CLOUD_FUNCTION_TARGET_AUDIENCE, 
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${idToken}`
            },
            data: validatedFields.data,
          });
      
        console.log('Service response:', res.data);
      
        } catch(error) {
          console.error(error);
      
          return {...validatedFields, success: 'fail'};
        }

    return { ...validatedFields, success: 'true'};
  }