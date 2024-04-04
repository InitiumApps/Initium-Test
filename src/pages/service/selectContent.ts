export async function selectQuestionToRender() {
    try {
        const response = await fetch("/api/getContentApi");
        const questsContent = await response.json();

        //receber como parametros o nivel e conteudo
        const filteredSubject = questsContent.filter((question: any) => {
            return question.subject == "inputAndOutput"
        })

        const filteredDificulty = filteredSubject.filter((question: any) => {
            return question.level == "easy"
        })

        console.log(filteredSubject, filteredDificulty);


    } catch (error) {
        console.error('Erro ao obter conteúdo:', error);
    }
}
