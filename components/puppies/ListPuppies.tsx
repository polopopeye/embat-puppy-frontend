import { PuppyInterface } from 'app/interfaces/puppyInterface';
import { store } from 'app/store';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { HeartIcon as HeartIconFull } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/outline';

const ListPuppies = () => {
  const [puppies, setPuppies] = useState(
    store.getState().puppy.data as PuppyInterface[]
  );

  store.subscribe(() => {
    setPuppies(store.getState().puppy.data as PuppyInterface[]);
  });

  const handleLike = () => {
    toast.success('Saved! 💚');
  };

  return (
    <>
      <div>PUPPIES</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center gap-8 p-8">
        {puppies.map((puppy) => {
          return (
            <div
              key={puppy.id}
              className="border-gray-500 border-2 rounded-md p-4 w-full"
            >
              <div className="grid place-items-center max-h-200">
                <img src={puppy.profileImage} className="rounded-full" />
              </div>
              <div className="text-center font-bold text-2xl py-4">
                {puppy.completeName}
              </div>
              <div>{puppy.description}</div>
              <div
                onClick={() => {
                  handleLike();
                }}
              >
                <HeartIconFull className="w-16 h-16" />
                <HeartIcon className="w-16 h-16" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListPuppies;
