import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />

    </div>
  );
}
