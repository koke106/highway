import Card from "../../components/Card";

const arrayNews = [
    {
        id:1,
        title:'Los españoles deslumbran en un Rally de Canarias vencido por Bonato',
        zone:'Rallie de Canarias',
        autor:'Eugenio Perez',
    },
    {
        id:2,
        title:'Sébastien Ogier reina en el caos de Croacia',
        zone:'WRC - Mundial de Rally',
        autor:'Eugenio Perez',
    },
    {
        id:3,
        title:'Noticia 3 de rallies',
        zone:'Rallie de Asturias',
        autor:'Eugenio Perez',
    },
    {
        id:4,
        title:'Noticia 4 de rallies',
        zone:'Rallie de Soria',
        autor:'Eugenio Perez',
    },
    {
        id:5,
        title:'Noticia 5 de rallies',
        zone:'Rallie de Cuenca',
        autor:'Eugenio Perez',
    },
    {
        id:6,
        title:'Noticia 5 de rallies',
        zone:'Rallie de Cuenca',
        autor:'Eugenio Perez',
    },
    {
        id:7,
        title:'Noticia 5 de rallies',
        zone:'Rallie de Cuenca',
        autor:'Eugenio Perez',
    },
    {
        id:8,
        title:'Noticia 5 de rallies',
        zone:'Rallie de Cuenca',
        autor:'Eugenio Perez',
    },
    {
        id:9,
        title:'Noticia 5 de rallies',
        zone:'Rallie de Cuenca',
        autor:'Eugenio Perez',
    },
    {
        id:10,
        title:'Noticia 5 de rallies',
        zone:'Rallie de Cuenca',
        autor:'Eugenio Perez',
    },
    {
        id:11,
        title:'Noticia 5 de rallies',
        zone:'Rallie de Cuenca',
        autor:'Eugenio Perez',
    }
]

const News = () => {
    return (
        <div>
            <div className="body" >
                <h1>News</h1>
                {arrayNews.map(el=> (
                    <Card key={el.id} id={el.id} title={el.title} zone={el.zone} autor={el.autor} />
                ))}
            </div>
        </div>
    )
}

export default News