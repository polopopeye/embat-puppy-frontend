import React from 'react';

const Badges = (props: { badges: Array<string> }) => {
  const { badges } = props;
  return (
    <>
      <div>
        {badges?.map((badge) => {
          return (
            <div key={badge}>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md  font-medium bg-blue-100 text-gray-800 m-1">
                {badge}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Badges;
