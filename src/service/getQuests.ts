import quests from "../../public/content/quests";

export default async function selectQuestionToRender(subject: string, level: string, numberQuests: number) {
    try {
        const questsContent = quests
        const questions: any[] = [];
        const validIds: any[] = [];

        //receber como parametros o nivel e conteudo
        const filteredQuests = questsContent.filter((question: any) => {
            return question.subject === subject && question.level === level 
        })

        numberQuests = numberQuests > filteredQuests.length ? filteredQuests.length : numberQuests;
        
        for(let cont = 0; cont < numberQuests; cont++) {
            let number: number = 0

            do {
                number = Math.floor(Math.random() * (filteredQuests.length));
            } while (validIds.includes(number));

            validIds.push(number);

            questions.push(filteredQuests[number]);
        }

        return questions

    } catch (error) {
        console.error('Erro ao obter conteúdo:', error);
    }
}