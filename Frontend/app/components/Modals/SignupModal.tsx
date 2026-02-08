'use client';

import Modal from "./Modals";
import useSignupModal from "@/app/Hooks/UseSignupModal";
// import { signup } from "@/app/lib/actions/auth";

const SignupModal = () => {
  const signupModal = useSignupModal();

  const content = (
    <form  className="space-y-4">
      <input
        name="email"
        required
        type="email"
        placeholder="Your e-mail address"
        className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
      />

      <input
        name="password1"
        required
        type="password"
        placeholder="Your password"
        className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
      />

      <input
        name="password2"
        required
        type="password"
        placeholder="Repeat password"
        className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
      />

      <button
        type="submit"
        className="w-full h-[54px] bg-black text-white rounded-xl hover:opacity-90 transition"
      >
        Create account
      </button>
    </form>
  );

  return (
    <Modal
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="Sign up"
      content={content}
    />
  );
};

export default SignupModal;
