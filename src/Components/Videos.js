import React from 'react'
import { useSearchParams } from 'react-router-dom';

export const Videos = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  console.log(type)
  return (
    <h1>Videos/{type}</h1>
  )
}
