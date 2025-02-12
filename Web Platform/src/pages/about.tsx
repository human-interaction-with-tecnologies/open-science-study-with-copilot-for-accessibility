
import Layout from "@/components/Layout";
import AboutCard from "@/components/basics/AboutCard";
import { dummyTeam } from "../db/dummyTeam";
import { dummyGroup } from "../db/dummyGroup";
import { dummyAboutReferences } from "../db/dummyAboutReferences";

export default function AboutPage() {
    return (
        <Layout title="Sobre">
            <div className="bg-white rounded-lg shadow-lg p-6 mt-7">
                <h2 className="text-2xl font-bold mb-8">Equipe</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-5 mb-5">
                    {
                    dummyTeam.map((person) => (
                        <AboutCard 
                        key={person.id}
                        id={person.id}
                        name={person.name}
                        description1={person.description}
                        email={person.email}
                        image={person.image}
                        />
                    ))}
                </div>
                
                <h2 className="text-2xl font-bold mt-8 mb-8">Grupo de Pesquisa</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-5 mb-5">
                    {
                    dummyGroup.map((group) => (
                        <AboutCard
                        key={group.id}
                        id={group.id}
                        name={group.name}
                        description1={group.description}
                        email={group.email}
                        image={group.image}
                        />
                    ))}
                </div>
                <h2 className="text-2xl font-bold mt-8 mb-8">Contato</h2>
                <h3 className="text-lg font-bold mb-2">Endereço</h3>
                <p className="mb-2">Rua Augusto Corrêa - nº 01 – Guamá</p>
                <p className="mb-4">Belém, Pará, Brasil – CEP: 66075110</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.497609398409!2d-48.458639825915505!3d-1.4742696985118746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48dbe8d60aec1%3A0xfcadc7d40fe3a62d!2sHIT%20-%20Human%20Interaction%20with%20Technologies%20Research%20Group!5e0!3m2!1spt-BR!2sbr!4v1702479132014!5m2!1spt-BR!2sbr"
                        style={{width:"100%", height:"400px"}}
                        loading="lazy" >
                </iframe>
                
                <h2 className="text-2xl font-bold mt-8 mb-8">Materiais Complementares</h2>
                <ul className="list-disc ml-8">
                    {dummyAboutReferences.map((reference) => (
                        <li key={reference.id} className="mb-2 link color-webplat-terciary-color">
                            <a className="underline" target="_blanck" href={reference.url}>
                                {reference.description}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}
