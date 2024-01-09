'use client';

import { useEffect, useState } from 'react';

// ======================================================================
// INPUT TEXT
export const InputText = ({ label, ...props }) => {
  const [value, setValue] = useState('');

  return (
    <div className="flex flex-col gap-y-[0.625rem]">
      <input
        className="border-b border-current px-4 pb-[0.875rem] text-black-100 caret-primary-400 invalid:text-accent-400 focus-visible:text-black-400 focus-visible:outline-none focus-visible:outline-primary-400"
        type="text"
        {...props}
        aria-label={label}
        aria-errormessage={`error-${props.id}`}
      />
      <span
        id={`error-${props.id}`}
        className="text-xs font-medium leading-none tracking-[0.013em] text-accent-400"
      >
        This field is required
      </span>
    </div>
  );
};

// ======================================================================
// INPUT EMAIL
export const InputEmail = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-y-[0.625rem]">
      <input
        className="border-b border-current px-4 pb-[0.875rem] text-black-100 caret-primary-400 invalid:text-accent-400 focus-visible:text-black-400 focus-visible:outline-none focus-visible:outline-primary-400"
        type="email"
        {...props}
        aria-label={label}
        aria-errormessage={`error-${props.id}`}
      />
      <span
        id={`error-${props.id}`}
        className="text-xs font-medium leading-none tracking-[0.013em] text-accent-400 data-[invalid]:block data-[valid]:hidden"
      >
        This field is required
      </span>
    </div>
  );
};

// ======================================================================
// INPUT NUMBER
export const InputNumber = ({ label, ...props }) => {
  const [value, setValue] = useState(1);

  const MIN_VALUE = 1;
  const MAX_VALUE = 16;

  return (
    <div className="relative flex flex-col gap-y-[0.625rem] text-black-400 focus-within:text-black-400">
      <button
        type="button"
        onClick={() => {
          setValue((prev) => (prev > MIN_VALUE ? prev - 1 : prev));
        }}
        aria-controls={props.id}
        className="absolute left-0 top-0 z-10 w-3 bg-icon-minus bg-center bg-no-repeat px-8 text-center font-bold text-transparent  opacity-50 transition-colors duration-300 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:outline-primary-400"
      >
        -
      </button>
      <input
        className="pointer-events-none relative z-0 cursor-default select-none border-b border-current px-4 pb-[0.875rem] text-center font-bold transition-colors duration-300 [appearance:textfield] invalid:text-accent-400"
        type="text"
        inputMode="numeric"
        {...props}
        aria-label={label}
        value={`${value} people`}
        readOnly
        tabIndex={-1}
      />
      <button
        type="button"
        onClick={() => {
          setValue((prev) => (prev < MAX_VALUE ? prev + 1 : prev));
        }}
        aria-controls={props.id}
        className="absolute right-0 top-0 z-10 w-3 bg-icon-plus bg-center bg-no-repeat px-8 text-center font-bold text-transparent  opacity-50 transition-colors duration-300 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:outline-primary-400"
      >
        +
      </button>
    </div>
  );
};

// ======================================================================
// INPUT DATE
export const InputDate = ({ label, ...props }) => {
  return (
    <fieldset className="flex flex-col items-start gap-x-4 gap-y-[0.625rem] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col">
        <legend className="whitespace-nowrap">{label}</legend>
        <span
          id={`error-${props.id}`}
          className="text-xs font-medium leading-none tracking-[0.013em] text-accent-400 data-[invalid]:block data-[valid]:hidden"
        >
          This field is required
        </span>
      </div>
      <div className="flex gap-x-[0.625rem]">
        <input
          className="w-[28%] border-b border-current px-4 pb-[0.875rem] text-black-100 caret-primary-400 invalid:text-accent-400 focus-visible:text-black-400 focus-visible:outline-none focus-visible:outline-primary-400 sm:w-20"
          type="text"
          aria-label="month"
          placeholder="MM"
          aria-errormessage={`error-${props.id}`}
        />
        <input
          className="w-[28%] border-b border-current px-4 pb-[0.875rem] text-black-100 caret-primary-400 invalid:text-accent-400 focus-visible:text-black-400 focus-visible:outline-none focus-visible:outline-primary-400 sm:w-20"
          type="text"
          aria-label="day"
          placeholder="DD"
          aria-errormessage={`error-${props.id}`}
        />
        <input
          className="w-[44%] border-b border-current px-4 pb-[0.875rem] text-black-100 caret-primary-400 invalid:text-accent-400 focus-visible:text-black-400 focus-visible:outline-none focus-visible:outline-primary-400 sm:w-24"
          type="text"
          aria-label="year"
          placeholder="YYYY"
          aria-errormessage={`error-${props.id}`}
        />
      </div>
    </fieldset>
  );
};

// ======================================================================
// INPUT TIME
export const InputTime = ({ label, ...props }) => {
  const [hour, setHour] = useState('');
  const [minutes, setMinutes] = useState('');
  const [optionSelected, setOptionSelected] = useState('am');
  const [isOpenListBox, setIsOpenListBox] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        setIsOpenListBox(false);
        window.removeEventListener('keydown', handleKeyPress);
      }
    };

    if (isOpenListBox) {
      window.addEventListener('keydown', handleKeyPress);
    } else {
      window.removeEventListener('keydown', handleKeyPress);
    }
  }, [isOpenListBox]);

  const toggleListBoxState = () => {
    setIsOpenListBox((prev) => !prev);
  };

  const handleChangeHour = (event) => {
    const value = event.target.value.replace(/\+|-/gi, '');
    setHour(value);
  };

  const handleChangeMinutes = (event) => {
    const value = event.target.value.replace(/\+|-/gi, '');
    setMinutes(value);
  };

  return (
    <fieldset className="flex flex-col items-start gap-x-4 gap-y-[0.625rem] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col">
        <legend className="whitespace-nowrap">{label}</legend>
        <span
          id={`error-${props.id}`}
          className="text-xs font-medium leading-none tracking-[0.013em] text-accent-400 data-[invalid]:block data-[valid]:hidden"
        >
          This field is required
        </span>
      </div>
      <div className="flex gap-x-[0.625rem]">
        <input
          className="w-[28%] border-b border-current px-4 pb-[0.875rem] text-black-100 caret-primary-400 invalid:text-accent-400 focus-visible:text-black-400 focus-visible:outline-none focus-visible:outline-primary-400 sm:w-20"
          type="number"
          onChange={handleChangeHour}
          inputMode="numeric"
          value={hour}
          min={6}
          max={12}
          aria-label="hours"
          placeholder="09"
          aria-errormessage={`error-${props.id}`}
        />
        <input
          className="w-[28%] border-b border-current px-4 pb-[0.875rem] text-black-100 caret-primary-400 invalid:text-accent-400 focus-visible:text-black-400 focus-visible:outline-none focus-visible:outline-primary-400 sm:w-20"
          type="number"
          onChange={handleChangeMinutes}
          inputMode="numeric"
          value={minutes}
          min={0}
          max={55}
          step={5}
          aria-label="minutes"
          placeholder="00"
          aria-errormessage={`error-${props.id}`}
        />
        <div
          className={`relative w-[44%] border-b border-current text-black-100 invalid:text-accent-400 focus-within:text-black-400 sm:w-24 ${
            isOpenListBox ? 'text-black-400' : ''
          }`}
        >
          <button
            type="button"
            className="w-full bg-transparent bg-icon-arrow bg-right bg-no-repeat px-4 pb-[0.875rem]  text-left uppercase focus-visible:text-black-400 focus-visible:outline-none focus-visible:outline-primary-400"
            name="am-pm"
            id="am-pm"
            aria-haspopup="listbox"
            onClick={toggleListBoxState}
          >
            {optionSelected}
          </button>
          <ul
            role="listbox"
            aria-expanded={isOpenListBox}
            className="collapse absolute left-0 top-full z-50 mt-2 flex flex-col bg-white pt-[0.625rem] shadow-dropbox last:pb-1 aria-expanded:visible aria-expanded:opacity-100"
          >
            <li>
              <button
                role="option"
                aria-selected={optionSelected === 'am'}
                className='flex items-center gap-x-4 py-2 pl-4 pr-9 text-black-100 transition-colors before:h-4 before:w-3 before:bg-center before:bg-no-repeat before:content-[""] hover:bg-neutral-100 hover:text-black-400 focus-visible:bg-neutral-100 focus-visible:text-black-400 focus-visible:outline-none focus-visible:outline-primary-400 aria-selected:before:bg-icon-check'
                type="button"
                onClick={() => setOptionSelected('am')}
              >
                AM
              </button>
            </li>
            <li>
              <button
                role="option"
                aria-selected={optionSelected === 'pm'}
                className='flex items-center gap-x-4 py-2 pl-4 pr-9 text-black-100 transition-colors before:h-4 before:w-3 before:bg-center before:bg-no-repeat before:content-[""] hover:bg-neutral-100 hover:text-black-400 focus-visible:bg-neutral-100 focus-visible:text-black-400 focus-visible:outline-none focus-visible:outline-primary-400 aria-selected:before:bg-icon-check'
                type="button"
                onClick={() => setOptionSelected('pm')}
                onBlur={(event) => {
                  const firstOption = event.target
                    .closest('ul')
                    .querySelector('li:first-child button');
                  firstOption.focus();
                }}
              >
                PM
              </button>
            </li>
          </ul>
        </div>
      </div>
    </fieldset>
  );
};
