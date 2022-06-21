import { useRouter } from 'next/router';
import React from 'react';

const PuppyProfile = () => {
  const router = useRouter();
  const { puppyID } = router.query;

  return (
    <>
      <div>puppyID: {puppyID} </div>
    </>
  );
};

export default PuppyProfile;
