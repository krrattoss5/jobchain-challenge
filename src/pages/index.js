import Image from 'next/image';
import cerrar from '../../public/Cerrar.png';
import s from './index.module.css';
import { useState } from 'react';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleClearInput = () => {
    setInputValue('');
    setIsFocused(false)
    setError(false)
  };

  const validation = (email)=>{
    if(!emailRegex.test(email)){
      setError(true)
    } else {
      setError(false)
    }
  }

  const handleChange = (e) => {
    e.preventDefault
    setInputValue(e.target.value)
    validation(e.target.value)
  }

  return (
    <div className={s.containerInput}>
      {!isFocused && inputValue === '' && (
        <label className={s.inputLabel}>
          Correo electrónico
        </label>
      )}
      <input
        className={`${s.input} ${error ? s.inputError : ''}`}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onClick={() => setIsFocused(true)}
        onBlur={() => !inputValue.length ? setIsFocused(false) : null}
        placeholder={!isFocused ? "Escribe tu correo electrónico" : ""}
      />
      {isFocused && (
        <button className={s.button}>
        <Image
          className={s.image}
          src={cerrar}
          alt="Cerrar"
          width={25}
          height={25}
          onClick={handleClearInput}
        />
        </button>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <div className={s.container}>
      <Input />
    </div>
  );
}
