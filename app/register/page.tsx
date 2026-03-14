"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";

const DEPARTMENTS = [
  { value: "rnd", label: "Research & Development" },
  { value: "marketing", label: "Marketing" },
  { value: "finance", label: "Finance" },
  { value: "creatives", label: "Creatives" },
  { value: "operations", label: "Operations" },
  { value: "partnerships", label: "Partnerships" },
];

type FormData = {
  firstName: string;
  lastName: string;
  birthday: string;
  course: string;
  yearSection: string;
  email: string;
  department: string;
};

const INITIAL_FORM: FormData = {
  firstName: "",
  lastName: "",
  birthday: "",
  course: "",
  yearSection: "",
  email: "",
  department: "",
};

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-xs font-semibold tracking-widest uppercase text-[#378394] mb-2">
      {children}
      {required && <span className="text-[#1de4af] ml-1">*</span>}
    </label>
  );
}

const inputCls =
  "w-full bg-transparent border-b-2 border-[#022a34]/10 text-[#022a34] text-sm py-2.5 px-0 " +
  "placeholder:text-[#022a34]/25 focus:outline-none focus:border-[#378394] transition-colors duration-300 caret-[#378394]";

const selectCls = inputCls + " appearance-none cursor-pointer";

function SelectChevron() {
  return (
    <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
      <svg className="w-4 h-4 text-[#022a34]/25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log("Submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-[#1de4af]/20 animate-ping" />
            <div className="w-20 h-20 rounded-full border border-[#1de4af]/60 bg-[#1de4af]/10 flex items-center justify-center">
              <CheckIcon className="w-9 h-9 text-[#378394]" strokeWidth={1.5} />
            </div>
          </div>
          <p className="text-[#378394] text-xs tracking-widest uppercase font-semibold mb-3">
            Registration complete
          </p>
          <h2 className="text-4xl font-light text-[#022a34] mb-4 tracking-tight">
            Welcome to SPARK Hub
          </h2>
          <p className="text-[#022a34]/40 text-sm leading-relaxed mb-10">
            We've received your registration and will be in touch with next steps shortly.
          </p>
          <Link href="/" className="text-sm text-[#022a34]/40 hover:text-[#022a34] transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ════ HERO ════ */}
      <section className="bg-[#022A34] bg-[url('/bg/footer_bg.webp')] bg-cover bg-center bg-no-repeat sm:min-h-screen lg:-mt-30 -mt-40">
        <div className="flex justify-center items-center text-center py-24 sm:py-52 md:py-72">
          <div>
            <h1 className="font-bold text-4xl sm:text-6xl md:text-8xl md:mt-0 mt-16 text-white">
              Join the <br />
              <strong className="text-accent">SPARK HUB</strong>
            </h1>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-sm mx-auto mt-6">
              Connect with innovators, researchers, and changemakers driving science and technology forward.
            </p>
          </div>
        </div>
      </section>

      {/* ════ FORM ════ */}
      <div className="flex-1 flex items-center justify-center bg-white px-6 py-16 lg:px-20">
        <div className="w-full max-w-4xl">

          <p className="text-xs font-semibold tracking-widest uppercase text-[#378394] mb-10 text-center">
            Registration form
          </p>

          <div className="space-y-8">

            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label required>First name</Label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={inputCls} placeholder="Juan" />
              </div>
              <div>
                <Label required>Last name</Label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={inputCls} placeholder="dela Cruz" />
              </div>
            </div>

            {/* Birthday */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label required>Birthday</Label>
                <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} className={inputCls} />
              </div>
            </div>

            {/* Course, Year & Section, Email */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <Label required>Course</Label>
                <input type="text" name="course" value={formData.course} onChange={handleChange} className={inputCls} placeholder="e.g. BSIT" />
              </div>
              <div>
                <Label required>Year & Section</Label>
                <input type="text" name="yearSection" value={formData.yearSection} onChange={handleChange} className={inputCls} placeholder="e.g. 3A" />
              </div>
              <div>
                <Label required>Email</Label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputCls} placeholder="you@example.com" />
              </div>
            </div>

            {/* Department */}
            <div>
              <Label required>Department</Label>
              <div className="relative">
                <select name="department" value={formData.department} onChange={handleChange} className={selectCls}>
                  <option value="" disabled style={{ background: "#fff" }}>Select a department</option>
                  {DEPARTMENTS.map((d) => (
                    <option key={d.value} value={d.value} style={{ background: "#fff" }}>{d.label}</option>
                  ))}
                </select>
                <SelectChevron />
              </div>
            </div>

            <div className="border-t border-[#022a34]/5" />

            <div className="flex flex-col items-center gap-4">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full sm:w-auto sm:min-w-[280px] flex items-center justify-between px-8 py-4 rounded-2xl
                  bg-[#022a34] text-white font-semibold text-sm tracking-wide
                  hover:bg-[#296e7a] active:scale-[0.98] transition-all duration-200 group"
              >
                <span>Submit registration</span>
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2.5} />
              </button>
              <p className="text-center text-xs text-[#022a34]/25 leading-relaxed">
                By registering, you agree to receive updates from SPARK Hub.
                We'll never share your information with third parties.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}