import React, { useContext } from "react";
import SkillContext from '../context/SkillContext'; // Import the SkillContext you defined

export const SkillCreate = () => {
  const { formValues, onChange } = useContext(SkillContext); // Use the SkillContext you defined

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle the form submission, e.g., making an API request.
    // For now, let's log the form values.
    console.log('Form submitted with values:', formValues);
  };

  return (
    <div className='mt-12'>
      <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-sm'>
        <div className='space-y-6'>
          <div className='mb-4'>
            <label htmlFor='name' className='block mb-2 text-sm font-medium'>
              Name
            </label>
            <input
              name='name'
              value={formValues.name} 
              // Use the onChange function 
              onChange={onChange}
              className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='slug' className='block mb-2 text-sm font-medium'>
              Slug
            </label>
            <input
              name='slug'
              value={formValues.slug}
              // Use the onChange function
              onChange={onChange}
              className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2'
            />
          </div>
          <div className='mb-4'>
            <button type='submit' className='px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
