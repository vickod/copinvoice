"use server";

import { requireUser } from "@/utils/hooks";
import { redirect } from 'next/navigation';
import { parseWithZod } from '@conform-to/zod';
import { invoiceSchema, onboardingSchema } from "@/utils/zodSchemas";
import { prisma } from "@/utils/db";
import { emailClient } from "@/utils/mailtrap";

export async function onboardUser(prevState: any, formData: FormData) {
    const session = await requireUser();

    const submission = parseWithZod(formData, {
        schema: onboardingSchema,
      });

      if (submission.status !== 'success') {
        return submission.reply();
      }
    
      const data = await prisma.user.update({
        where: { id: session.user?.id },
        data: {
        firstName: submission.value.firstName,
        lastName: submission.value.lastName,
        address: submission.value.address
 
        },
      });
      redirect('/dashboard');
    
}


export async function createInvoice(prevState: any,formData: FormData){
  const session = await requireUser();

  const submission = parseWithZod(formData, {
    schema: invoiceSchema,
  });

  
  if (submission.status !== 'success') {
    return submission.reply();
  }

  const data = await prisma.invoice.create({
    data: {
    clientAddress:submission.value.clientAddress,
    clientEmail: submission.value.clientEmail,
    clientName: submission.value.clientName,
    currency: submission.value.currency,
    date: submission.value.date, 
    dueDate: submission.value.dueDate,
    fromAddress:submission.value.fromAddress,
    fromEmail: submission.value.fromEmail,
    fromName: submission.value.fromName,
    invoiceItemDescription: submission.value.invoiceItemDescription,
    invoiceItemQuantity: submission.value.invoiceItemQuantity,
    invoiceItemRate: submission.value.invoiceItemRate,
    invoiceName: submission.value.invoiceName,
    invoiceNumber: submission.value.invoiceNumber,
    status: submission.value.status,
    total: submission.value.total,
    note: submission.value.note,
    userId: session.user?.id,
    updatedAt: new Date(), 
    },
  });

  const sender = {
    email: "hello@demomailtrap.com",
    name: "Mailtrap Test",
  };

  emailClient.send({
    from:sender,
    to: [{email:process.env.PERSONAL_MAIL! }],
    subject: "new Invoice for you",
    text: "Hey, we have a new invoice for you!",
    category: "Invoice",
  })

  redirect('/dashboard/invoices');

}

