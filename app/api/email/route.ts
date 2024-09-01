import { Resend } from 'resend';
import LoanApprovalEmail from '@/app/emails/LoanApprovalEmail';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const resend = new Resend(process.env.RESEND_KEY);
    const payload = await request.json();
    console.log(payload);

    // TODO - Add data to email
    try {
        await resend.emails.send({
            from: '',
            to: '',
            subject: 'Loan Approved',
            react: LoanApprovalEmail({borrowerFirstName:'Hakeem'})
        });
    
        return NextResponse.json({
            status: 'OK'
        })
    } catch (error) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}