import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { PuppyInterface } from 'app/interfaces/puppyInterface';
import Badges from './Badges';

const DialogPuppy = (props: {
  isOpen: boolean;
  setIsOpen: Function;
  currentPupy: PuppyInterface;
}) => {
  const { isOpen, setIsOpen, currentPupy } = props;

  return (
    <Dialog
      as="div"
      className="fixed z-50 inset-0 overflow-y-auto"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="relative text-center inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <img
            src={currentPupy.profileImage}
            className="rounded-full mx-auto"
          />
          <hr></hr>
          <h1 className="font-bold text-2xl py-2">
            {currentPupy.completeName}
          </h1>
          <p className="py-2">{currentPupy.description}</p>
          <h1>Skills:</h1>
          <Badges badges={currentPupy.skills} />
        </div>
      </div>
    </Dialog>
  );
};

export default DialogPuppy;
