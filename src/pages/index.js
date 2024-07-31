import Image from 'next/image';
import cerrar from '../../public/Cerrar.png';
import s from './index.module.css';
import { useState } from 'react';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleClearInput = () => {
    setInputValue('');
  };

  return (
    <div className={s.containerInput}>
      {!isFocused && inputValue === '' && (
        <label className={s.inputLabel}>
          Correo electrónico
        </label>
      )}
      <input
        className={s.input}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={!isFocused ? "Escribe tu correo electrónico" : ""}
      />
      {isFocused && (
        <Image
          className={s.image}
          src={cerrar}
          alt="Cerrar"
          width={25}
          height={25}
          onClick={handleClearInput}
        />
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
