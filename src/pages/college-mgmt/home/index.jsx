import React from 'react';
import { InputField1 } from '../../../components/forms';

const InputField = {
  name: 'name',
  label: 'Name',
  placeholder: 'Enter Name',
  type: 'text',
  required: true,
  disabled: false,
  value: '',
  onChange: () => {}
};

export default function Home() {
  return <div>Home</div>;
}
