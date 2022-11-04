// People List component
// people props coming from getServerSideProps function fetching data asynchronously
export default function PeopleList({ people }) {
    // console.log(people)
    return (
        <div>
            <section className="container">
                <h2 className="people-heading">{people.name}</h2>
                <p>PHYSICAL FEATURES</p>
                <div className="wrapper">
                    <h4>Eye Colour: {people.eye_color}</h4>
                    <h4>Hair Colour: {people.hair_color}</h4>
                    <h4>Skin Colour: {people.skin_color}</h4>
                    <h4>Mass: {people.mass}</h4>
                    <h4>Height: {people.height}</h4>
                </div>

            </section>

            {/* jsx styling */}

            <style jsx>
                {`
                 *{
                    font-family: 'Lato', sans-serif;
                   }

                 .container{
                    position: relative;
                    top: 30px;
                    margin-top: 3rem;
                    text-align: center;
                 }

                 .container > p {
                    color: #96908F;
                 }

                 .people-heading{
                    letter-spacing: 1.5px;
                    text-transform: capitalize;
                    color: #0C0C0C;
                 }

                 .wrapper{
                    position: relative;
                    top: 30px;
                 }

                 .wrapper > h4 {
                    letter-spacing: 1px;
                    text-transform: capitalize;
                    color: #232323;
                 }
                `}
            </style>


        </div>
    )
}

// we are using getServerSideProps to fetch data on every request and it takes context as a parameter that will help us get the id dynamimcally in the URL
// set routing dynamically
export async function getServerSideProps(context) {
    const response = await fetch(`https://swapi.dev/api/people/${context.params.id}`);

    //convert response to json
    const people = await response.json()

    // if people in not found
    if (!people) {
        return {
            notFound: true
        }
    }

    // if people exist then return people as props object
    return {
        props: {
            people
        }
    }

}