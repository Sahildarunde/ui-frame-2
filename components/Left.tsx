import React, { ChangeEvent } from 'react';
import Dropdown from './Dropdown';
import InputBox from './InputBox';

const roles = ['EMPLOYEE', 'ADMIN', 'HEAD'];

type LeftProps = {
  selectedImage: string | null;
  onImageChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Left({ setSelectedImage, selectedImage, onImageChange }: LeftProps) {
  return (
    <div>
      <div className="p-4 h-screen flex flex-col md:flex-row gap-48 md:ml-16">
        <div>
          <h2 className='text-slate-500 m-2 font-semibold'>PROFILE IMAGE</h2>
          <div className='h-48 w-48 relative overflow-hidden mb-4 border border-slate-400 rounded-lg'>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                className="rounded-lg shadow-lg max-w-full h-full object-cover"
              />
            )}
          </div>
          <div>
            <input
              type="file"
              id='file'
              accept="image/*"
              onChange={onImageChange}
              className="file"
            />
            <div className='flex justify-start items-center gap-2'>
              <ImageIcon />
              <label className='text-blue-700 text-semibold' htmlFor="file">Change Profile Image</label>
            </div>
          </div>
          <div className='mt-8 w-60'>
            <h2 className='text-slate-500 m-2 font-semibold'>EMPLOYEE DETAILS</h2>
            <InputBox label='First Name' placeholder='Russel' />
            <InputBox label='Last Name' placeholder='Sims' />
            <InputBox label='Email Address' placeholder='russel@mycompany.com' />
            <InputBox label='Phone Number' placeholder='+125529345869' />
            <InputBox label='Position' placeholder='iOS Developer' />
          </div>
        </div>
        <div>
          <div className='md:ml-16 md:mt-2 md:mt-0'>
            <h2 className='text-slate-500 m-4 font-semibold'>ROLE</h2>
            <Dropdown options={roles} label='Role' />
          </div>
          <div className='md:ml-16 mt-5 md:mt-0 flex flex-col w-38'>
            <h2 className='text-slate-500 m-4 font-semibold'>Team</h2>
            <Dropdown options={["Kate Middleton"]} label='HR' />
            <Dropdown options={["Kirk Mitrohin"]} label='Manager' />
            <Dropdown options={["Eugene Hummell"]} label='Lead' />
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
  );
}
