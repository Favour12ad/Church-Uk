'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

type AttendanceForm = {
  date: string;
  serviceName: string;
  men: number;
  women: number;
  boys: number;
  girls: number;
  teens: number;
  firstTimers: number;
  bornAgain: number;
  holyGhostFilled: number;
  healed: number;
  comment: string;
};

export default function ServiceAttendancePage(): JSX.Element {
  const [form, setForm] = useState<AttendanceForm>({
    date: '',
    serviceName: '',
    men: 0,
    women: 0,
    boys: 0,
    girls: 0,
    teens: 0,
    firstTimers: 0,
    bornAgain: 0,
    holyGhostFilled: 0,
    healed: 0,
    comment: '',
  });

  const totalAttendance: number
    = form.men + form.women + form.boys + form.girls + form.teens;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!form.date || !form.serviceName) {
      alert('Date and Service Name are required.');
      return;
    }

    console.log('Submitted data:', { ...form, totalAttendance });
    alert('Form submitted successfully!');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Service Attendance Form</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <Input
          name="date"
          label="Date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />
        <Input
          name="serviceName"
          label="Service Name"
          value={form.serviceName}
          onChange={handleChange}
        />
        <Input
          name="men"
          label="Men"
          type="number"
          value={form.men}
          onChange={handleChange}
        />
        <Input
          name="women"
          label="Women"
          type="number"
          value={form.women}
          onChange={handleChange}
        />
        <Input
          name="boys"
          label="Boys"
          type="number"
          value={form.boys}
          onChange={handleChange}
        />
        <Input
          name="girls"
          label="Girls"
          type="number"
          value={form.girls}
          onChange={handleChange}
        />
        <Input
          name="teens"
          label="Teens"
          type="number"
          value={form.teens}
          onChange={handleChange}
        />

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium mb-1">
            Total Attendance
          </label>
          <input
            type="number"
            value={totalAttendance}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        <Input
          name="firstTimers"
          label="First Timers"
          type="number"
          value={form.firstTimers}
          onChange={handleChange}
        />
        <Input
          name="bornAgain"
          label="Born Again"
          type="number"
          value={form.bornAgain}
          onChange={handleChange}
        />
        <Input
          name="holyGhostFilled"
          label="Holy Ghost Filled"
          type="number"
          value={form.holyGhostFilled}
          onChange={handleChange}
        />
        <Input
          name="healed"
          label="Healed"
          type="number"
          value={form.healed}
          onChange={handleChange}
        />

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium mb-1">Comment</label>
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            rows={3}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="col-span-1 md:col-span-2 flex justify-end">
          <button
            type="submit"
            disabled={!form.date || !form.serviceName}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Attendance
          </button>
        </div>
      </form>
    </div>
  );
}

type InputProps = {
  label: string;
  name: keyof AttendanceForm;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

function Input({
  label,
  name,
  value,
  onChange,
  type = 'text',
}: InputProps): JSX.Element {
  return (
    <div>
      <label className="block text-sm font-medium mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
}
