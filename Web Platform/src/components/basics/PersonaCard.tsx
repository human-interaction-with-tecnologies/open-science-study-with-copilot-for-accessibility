
import Image from 'next/image';

interface PersonaCardProps {
    id: number
    name: string
    description: string
    image: string
    characteristics: string[]
}

export default function PersonaCard(props: PersonaCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md py-6 px-8">
      <h2 className="text-xl font-bold mb-4">{props.name}</h2>
      <Image src={props.image} alt={props.name} className="w-full mb-4" width={500} height={500} />
      <p className="text-gray-700 mb-5">{props.description}</p>
      <h3 className="font-bold mb-2">Resumo das Características</h3>
      <ul className="list-disc pl-6">
        {props.characteristics.map((characteristic, index) => (
          <li key={index}>{characteristic}</li>
        ))}
      </ul>
    </div>
  );
}