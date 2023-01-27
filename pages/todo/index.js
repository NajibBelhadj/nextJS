export default function ToDo({ data }) {
    return (
        <h1 className="content">{data}</h1>
    )
}

export async function getStaticProps(context) {
    //console.log(context.previewData);
    return {
        props: {
            data: context.preview ? 'List of draft Todo' : 'List of To Do'
        }
    }
}
