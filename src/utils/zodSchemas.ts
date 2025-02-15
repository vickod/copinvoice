import {z} from 'zod';

export const onboardingSchema = z.object({
    firstName: z.string().min(2, "First name is required").max(30),
    lastName: z.string().min(2, "Last name is required").max(30),
    address: z.string().min(2, "Address is required").max(100),
    
});
