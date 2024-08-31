import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface LoanApprovalEmailProps {
  borrowerFirstName?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000/";

export const LoanApprovalEmail = ({
  borrowerFirstName,
}: LoanApprovalEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Your Loan Was Approved!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/logo.png`}
            width="100"
            height="100"
            style={image}
            alt="Logo"
          />
          <Section>
            <Text style={text}>Hi {borrowerFirstName},</Text>
            <Text style={text}>
              We're excited to inform you that your loan application has been
              approved, and the funds have been successfully disbursed to your
              account.
            </Text>
            <Hr />

            <Text style={header}>Loan Details</Text>
            <Text style={text}>Loan Amount: $5000</Text>

            <Text style={text}>Disbursement Date: 8/31/2024</Text>

            <Text style={text}>First Payment Date: 9/20/2024</Text>

            <Text style={text}>Final Payment Date: 10/20/2024</Text>

            <Text style={text}>Installment Amount: $3000</Text>

            <Text style={text}>
              You can now access the funds in your Bank of America account.
            </Text>

            <Text style={text}></Text>
            <Text style={text}></Text>
            <Text style={text}>
              We look forward to a long and mutually beneficial relationship.
            </Text>
            <Hr />
            <Text style={text}>Sincerely,</Text>
            <Text style={header}>Lone Inc</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

LoanApprovalEmail.PreviewProps = {
  borrowerFirstName: "Tim",
} as LoanApprovalEmailProps;

export default LoanApprovalEmail;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const header = {
  fontSize: "18px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "600",
  color: "#404040",
  lineHeight: "26px",
};

const image = {
  margin: "auto",
};
