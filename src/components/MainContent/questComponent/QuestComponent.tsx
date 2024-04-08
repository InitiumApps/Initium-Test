export default function QuestComponent(props: any) {

    const { question } = props;

    return(
        <div className="flex flex-col m-auto mt-8 p-4">
            <p className="text-justify" > {question.content}</p> 
            <p className="text-sm mt-2"><strong>Questão na lista: {question.id}</strong></p>
        </div>
    );
}