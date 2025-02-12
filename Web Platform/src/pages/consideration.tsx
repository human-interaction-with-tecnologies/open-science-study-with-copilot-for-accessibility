import Layout from "@/components/Layout";
import Link from "next/link";
import { dummyConsiderations } from "../db/dummyConsiderations";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from 'next/image';

export default function ConsiderationDetailPage() {
    const router = useRouter();
    const [consideration, setConsideration] = useState(dummyConsiderations.find((consideration) => `${consideration.id}` === `${router.query.id}`));

    useEffect(() => {
        const selectedConsideration =  dummyConsiderations.find((consideration) => `${consideration.id}` === `${router.query.id}`);
        setConsideration(selectedConsideration);
    }, [router.query.id]);

    return (
        <Layout title="Consideração de Design e Avaliação"> 
            <Link className="underline flex items-center gap-1 mt-3 mb-3" href="/considerations">
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.351562 6.60156L6.60156 0.351562C6.86198 0.117188 7.16146 0 7.5 0C7.83854 0 8.13802 0.117188 8.39844 0.351562C8.63281 0.611979 8.75 0.911458 8.75 1.25C8.75 1.58854 8.63281 1.88802 8.39844 2.14844L4.25781 6.25H16.25C16.6146 6.25 16.9141 6.36719 17.1484 6.60156C17.3828 6.83594 17.5 7.13542 17.5 7.5C17.5 7.86458 17.3828 8.16406 17.1484 8.39844C16.9141 8.63281 16.6146 8.75 16.25 8.75H4.25781L8.39844 12.8516C8.63281 13.112 8.75 13.4115 8.75 13.75C8.75 14.0885 8.63281 14.388 8.39844 14.6484C8.13802 14.8828 7.83854 15 7.5 15C7.16146 15 6.86198 14.8828 6.60156 14.6484L0.351562 8.39844C0.117188 8.13802 0 7.83854 0 7.5C0 7.16146 0.117188 6.86198 0.351562 6.60156Z" fill="#284B63"/>
                </svg>
                Voltar
            </Link>
            {consideration ? (
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-2">
                    <h2 className="text-xl font-bold mb-2">
                        {consideration.title}
                    </h2>
                    <div className="flex flex-wrap flex-1 gap-1.5">
                        {
                            consideration.category.map(
                                (item) => (<span key={crypto.randomUUID()} className="bg-blue-500 text-white px-3 py-1 rounded-xl bg-webplat-terciary-color">{item}</span>)
                            )
                        }
                    </div>
                    <span className="mt-3 mb-5">{consideration.content}</span>
                    { consideration.images.length > 0 &&
                        <>
                            <h3 className="font-bold mb-2">{consideration.images.length > 1 ? "Imagens de exemplo" : "Imagem de exemplo"}</h3>
                            <div className="mb-5 flex flex-row flex-wrap justify-center content-center items-center gap-6">
                                { consideration.images.map((image) => (
                                    <Image key={ image.id } className="h-full w-11/12 sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-2/12" src={ image.url } alt={ image.text } width={ 500 } height={ 500 } />
                                )) }
                            </div>
                        </>
                    }
                    { consideration.videos.length > 0 &&
                        <>
                            <h3 className="font-bold mb-2">{consideration.videos.length > 1 ? "Vídeos de exemplo" : "Vídeo de exemplo"}</h3>
                            <div className="mb-5 flex flex-row flex-wrap justify-center content-center gap-6">
                                { consideration.videos.map((video) => (
                                    <video key={ video.id } className="w-11/12 sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-2/12" controls preload="none">
                                        <source src={ video.url } type={ video.type } />
                                        Vídeo não suportado.
                                    </video>
                                )) }
                            </div>
                        </>
                    }
                    { consideration.audios.length > 0 &&
                        <>
                            <h3 className="font-bold mb-2">{consideration.audios.length > 1 ? "Áudios de exemplo" : "Áudio de exemplo"}</h3>
                            <div className="mb-5 flex flex-row flex-wrap justify-center content-center gap-6">
                                { consideration.audios.map((audio) => (
                                    <audio key={ audio.id } className="w-11/12 sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-2/12" controls preload="none">
                                        <source src={ audio.url } type={ audio.type } />
                                        Áudio não suportado.
                                    </audio>
                                )) }
                            </div>
                        </>
                    }
                    { consideration.references.length > 0 &&
                        <div>
                            <h3 className="font-bold mb-2">Outras Referências</h3>
                            <ul className="list-disc ml-6">
                                {consideration.references.map((reference, index) => (
                                    <li className="link color-webplat-terciary-color" key={index}>
                                        <a className="underline"
                                        target="_blanck"
                                        href={reference.url}
                                        >
                                            {reference.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }            
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </Layout>        
    )
}