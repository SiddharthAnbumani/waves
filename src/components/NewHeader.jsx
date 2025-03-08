import React from 'react';

const NewHeader = ({ background, text }) => {
  return (
    <div
      className="h-[20vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-white text-2xl font-bold">{text}</div>
    </div>
  );
};

export default NewHeader;