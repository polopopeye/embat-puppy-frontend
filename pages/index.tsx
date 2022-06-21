import { useAppDispatch, useAppSelector } from 'app/hooks';
import { listPuppies, puppyApp } from 'app/slices/puppySlice';
import ListPuppies from 'components/puppies/ListPuppies';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';

const Home = () => {
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector(puppyApp);

  useEffect(() => {
    dispatch(listPuppies());
  }, []);

  if (pending) return 'loading... ';

  return (
    <div>
      <ListPuppies />
    </div>
  );
};

export default Home;
