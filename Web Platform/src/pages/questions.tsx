import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { dummyQuestions } from "../db/dummyQuestions";
import variables from "@/styles/variables.module.scss";

export default function QuestionsPage() {

    const [questionsMax, setQuestionsMax] = useState(7);
    const [step, setStep] = useState(0);
    const [setting, setSetting] = useState({quantity: 0, categories: ["Considerações", "Personas"], questions: [] as any, answers: [] as any});
    const [answersIdInMoment, setAnswersIdInMoment] = useState(-1);
    const [correctNumber, setCorrectNumber] = useState(0);	

    useEffect(() => {
        if(step == 0) {
            setSetting({quantity: 0, categories: ["Considerações", "Personas"], questions: [] as any, answers: [] as any});
            setAnswersIdInMoment(-1);
            setCorrectNumber(0);
        }

        if(step > setting.quantity) {
            let count = 0;
            setting.answers.map((answer: any) => {
                if(answer.option.value == true) {
                    count++;
               }
            });
            setCorrectNumber(count);
        }
    }, [step]);

    const handleCategoryClick = (category: string) => {
        const updatedCategories = setting.categories.includes(category)
            ? setting.categories.filter((cat) => cat !== category)
            : [...setting.categories, category];
        setSetting({ ...setting, categories: updatedCategories });
    };

    const preProssegingQuestions = () => {
        let questionsSelected = new Array;
        while (questionsSelected.length != setting.quantity) {
            let randomCategory = setting.categories[Math.floor(Math.random() * setting.categories.length)];
            let randomQuestion = dummyQuestions.filter((question) => question.category === randomCategory)[Math.floor(Math.random() * dummyQuestions.filter((question) => question.category === randomCategory).length)];
            console.log(randomQuestion);
            if (!questionsSelected.includes(randomQuestion)) {
                questionsSelected.push(randomQuestion);
            }
        }
        setSetting({ ...setting, questions: questionsSelected });
    };

    return (
        <Layout title="Perguntas e Respostas">
            <div className="flex flex-wrap gap-3 mt-3">
                <span className="text-md">
                    Nessa seção você poderá responder algumas perguntas construídas para você testar seu conhecimento sobre usuários emergentes e pagamento instantâneos.
                </span>
            </div>
            {step > 0 && step <= setting.quantity && (
            <a className="underline flex items-center gap-1 mt-4" onClick={() => setStep(step-1)}>
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.351562 6.60156L6.60156 0.351562C6.86198 0.117188 7.16146 0 7.5 0C7.83854 0 8.13802 0.117188 8.39844 0.351562C8.63281 0.611979 8.75 0.911458 8.75 1.25C8.75 1.58854 8.63281 1.88802 8.39844 2.14844L4.25781 6.25H16.25C16.6146 6.25 16.9141 6.36719 17.1484 6.60156C17.3828 6.83594 17.5 7.13542 17.5 7.5C17.5 7.86458 17.3828 8.16406 17.1484 8.39844C16.9141 8.63281 16.6146 8.75 16.25 8.75H4.25781L8.39844 12.8516C8.63281 13.112 8.75 13.4115 8.75 13.75C8.75 14.0885 8.63281 14.388 8.39844 14.6484C8.13802 14.8828 7.83854 15 7.5 15C7.16146 15 6.86198 14.8828 6.60156 14.6484L0.351562 8.39844C0.117188 8.13802 0 7.83854 0 7.5C0 7.16146 0.117188 6.86198 0.351562 6.60156Z" fill="#284B63"/>
                </svg>
                Voltar
            </a>)}
            <div className="bg-white shadow-md rounded-lg p-4 mt-7 mb-5">
                {step === 0 && (
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <h2 className="text-lg font-bold mb-1">Configure as Perguntas</h2>
                            <span className="mb-5 italic">Ajuste as próximas seções desse recurso</span>
                            <h3 className="text-md font-bold mb-1">Quantidade de Perguntas</h3>
                            <span className="mb-3 italic">Máximo {questionsMax} Perguntas</span>
                            <label className="mb-5">
                                <input  className="border border-gray-300 rounded-md px-2 py-1"
                                        type="number"
                                        onChange={(e) => {
                                            setSetting({ ...setting, quantity: parseInt(e.target.value) });
                                        }}
                                        min={1}
                                        max={questionsMax} />
                            </label>
                            <h3 className="text-md font-bold mb-2">Cenários</h3>
                            <div className="flex flex-col">
                                <label className="mb-3 checkbox-container">
                                    <input className="mr-2" type="checkbox" name="category" checked={setting.categories.includes("Considerações")} value="Considerações" onChange={() => handleCategoryClick("Considerações")} />
                                    <span className="checkmark"></span>
                                    Considerações de Design e Avaliação
                                </label>
                                <label className="checkbox-container">
                                    <input className="mr-2" type="checkbox" name="category" checked={setting.categories.includes("Personas")} value="Personas" onChange={() => handleCategoryClick("Personas")} />
                                    <span className="checkmark"></span>
                                    Personas
                                </label>
                            </div>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end w-full md:w-32 mt-5 mb-1"
                                style={{backgroundColor:variables.terciaryColor}}
                                onClick={() => {
                                    if(setting.categories.length == 0) {
                                        window.alert("Selecione uma categoria de perguntas");
                                        return;
                                    }

                                    if(setting.quantity == 0 || setting.quantity > questionsMax) {
                                        window.alert("Selecione uma quantidade de perguntas válida");
                                        return;
                                    }
                                    setStep(step+1);
                                    preProssegingQuestions();
                                }} >
                            Começar
                        </button>
                    </div>
                )}

                {step > 0 && step <= setting.quantity && (
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <h2 className="text-lg font-bold mb-1">Pergunta {step} de {setting.quantity}</h2>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-md font-bold mb-1">{setting.questions[step-1].title}</h3>
                            <span className="mb-3 italic">{setting.questions[step-1].description}</span>
                            <ul>
                                {setting.questions[step - 1].options.map((option: any) => (
                                    <li key={option.id} className="mb-2">
                                        <label>
                                            <input  className="mr-2"
                                                    key={option}
                                                    type="radio"
                                                    name="option"
                                                    checked={option.id === answersIdInMoment}
                                                    value={option.id} onChange={(e) => {
                                                       setAnswersIdInMoment(parseInt(e.target.value));
                                                    }} />
                                            {option.text}
                                        </label>
                                    </li>
                                ) )}
                            </ul>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end w-full md:w-32 mt-5 mb-1"
                                style={{backgroundColor:variables.terciaryColor}}
                                onClick={(e) => {
                                    if(answersIdInMoment == -1) {
                                        window.alert("Selecione uma opção");
                                        return;
                                    }
                                    const answers = setting.questions[step-1].options.find((option: any) => option.id === answersIdInMoment);
                                    setSetting({ ...setting, answers: [...setting.answers, { id: setting.questions[step-1].id, option: answers }] });
                                    setAnswersIdInMoment(-1);
                                    setStep(step + 1);
                                }} >
                            Avançar
                        </button>
                    </div>
                )}

                {step > setting.quantity && (
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <h2 className="text-lg font-bold mb-3">Você respondeu {correctNumber} de {setting.quantity} perguntas corretamente</h2>
                        </div>
                        <div className="flex flex-col">
                            <span className="mb-3">Agradecemos o tempo dedicado para entender as considerações de design e avaliação de sistemas de pagamento e usuários emergentes.</span>
                            <span className="mb-3">Fortalecer a inclusão é fornecer oportunidades para que as pessoas tenham acesso pleno em diversos serviços da sociedade.</span>
                        </div>
                        <button style={{backgroundColor:variables.terciaryColor}} onClick={() => setStep(0)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end w-full md:w-32 mt-5 mb-1">
                            Refazer
                        </button>
                    </div>
                )}
            </div>
        </Layout>
    );
}