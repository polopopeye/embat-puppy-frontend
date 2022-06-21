import { PuppyInterface } from 'app/interfaces/puppyInterface';
import { store } from 'app/store';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { HeartIcon as HeartIconFull } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/outline';
import DialogPuppy from './DialogPuppy';
import { puppySlice } from 'app/slices/puppySlice';

const ListPuppies = () => {
  const [puppies, setPuppies] = useState(
    store.getState().puppy.data as PuppyInterface[]
  );

  store.subscribe(() => {
    setPuppies(store.getState().puppy.data as PuppyInterface[]);
  });

  const handleLike = (puppyID: string) => {
    toast.success('Saved! 💚');
    store.dispatch(puppySlice.actions.saveHeart(puppyID));
  };

  let [isOpen, setIsOpen] = useState(false);
  let [currentPupy, setCurrentPupy] = useState({} as PuppyInterface);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center gap-8 p-8">
        {puppies.map((puppy) => {
          return (
            <div
              key={puppy.id}
              className="border-gray-500 border-2 rounded-md p-4 w-full"
              onClick={() => {
                setIsOpen(true);
                setCurrentPupy(puppy);
              }}
            >
              <div className="grid place-items-center max-h-200">
                <img src={puppy.profileImage} className="rounded-full" />
              </div>
              <div className="text-center font-bold text-2xl py-4">
                {puppy.completeName}
              </div>
              <div
                onClick={() => {
                  handleLike(puppy.id as string);
                }}
                className="flex justify-center items-center"
              >
                {puppy.heart ? (
                  <HeartIconFull className="text-red-500 w-16 h-16 text-center" />
                ) : (
                  <HeartIcon className="text-gray-500 w-16 h-16 text-center" />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <DialogPuppy
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentPupy={currentPupy}
      />
    </>
  );
};

export default ListPuppies;
