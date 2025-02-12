import React from 'react';
import Image from 'next/image';

interface AboutCardProps {
  id: number;
  name: string;
  description1: string;
  description2?: string;
  email?: string;
  image: string;
}

export default function AboutCard(props: AboutCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <Image src={props.image} alt={props.name} width={150} height={150} style={{ borderRadius: '50%' }} />
      <h2 className="text-lg mt-2">{props.name}</h2>
      { props.email && <p className="text-sm">{props.email}</p> }
      <p className="text-sm">{props.description1}</p>
      { props.description2 && <p className="text-sm">{props.description2}</p> }
    </div>
  );
}