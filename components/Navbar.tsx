import React from 'react';

type NavbarProps = {
  selectedImage: string | null;
};

export default function Navbar({ selectedImage }: NavbarProps) {
  return (
    <div className="md:m-10 mt-12 flex justify-between items-center">
      <div className="flex justify-center items-center gap-2 p-3">
        <div className="h-14 w-14 relative overflow-hidden rounded-full">
          {selectedImage ? (
            <img className="absolute object-cover" src={selectedImage} alt="Profile" />
          ) : (
            <img className="absolute object-cover" src="./profilePic.jpeg" alt="Default Profile" />
          )}
        </div>
        <h2 className="text-lg font-semibold">Russels Sims</h2>
      </div>
      <div className="mr-2 cursor p-3 bg-red-200 rounded-full border border-red-500 flex gap-1">
        <p className="text-red-500">Delete</p>
        <DeleteIcon />
      </div>
    </div>
  );
}

function DeleteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
  );
}
