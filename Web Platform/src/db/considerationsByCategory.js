import { dummyConsiderations } from "./dummyConsiderations";

export const considerationsByCategory = (category) => {
    return (category == null || category == "") 
    ? dummyConsiderations 
    : dummyConsiderations.filter(
        (consideration) => consideration.category === category
        );
};