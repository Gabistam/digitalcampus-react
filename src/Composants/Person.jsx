import React from 'react';
import Fullname from './Fullname';
import Hobbies from './Hobbies';

export default function Person() {
  return (
    <div>
        <h1>Person</h1>
        <h2><Fullname  /> </h2>
        <h2><Hobbies/></h2>
    </div>
  )
}
