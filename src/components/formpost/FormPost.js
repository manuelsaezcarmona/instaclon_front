import React from 'react';

export default function FormPost() {
  return (
    <div className="formpost__container">
      <form className="formpost__form">
        <img src="../../assets/empty.jpg" alt="imagen sin cargar" />
        <input id="file-selector" type="file" name="imagefile" />
      </form>
    </div>
  );
}
