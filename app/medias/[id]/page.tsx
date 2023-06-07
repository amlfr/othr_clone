export default function Media({ params }: { params: { id: number } }) {
    return (
        <main>
            <h1>Média {params.id}</h1>
        </main>
    );
}
