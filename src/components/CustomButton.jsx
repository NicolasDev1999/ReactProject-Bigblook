import React, { useState } from 'react';

const CustomButton = ({ isDropdown, children, buttonText }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const renderButtonContent = () => {
    if (!isDropdown) {
      return <button>{buttonText}</button>;
    } else {
      return (
        <>
          <button className='Button_Nav_Header' onClick={toggleDropdown}>{buttonText}</button>
          {dropdownVisible && (
            <div className="dropdown">
              {React.Children.map(children, (child, index) => (
                <div key={index}>{child}</div>
              ))}
            </div>
          )}
        </>
      );
    }
  };

  return <div>{renderButtonContent()}</div>;
};

export default CustomButton;
