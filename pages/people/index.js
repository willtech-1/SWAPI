// import nextjs link
import Link from "next/link"

// accepting people props from the getServerSideProps function 
export default function People({ people }) {

    return (
        <div>
            <div className="people-container">

                <h2 className="text-heading">People List</h2>
                <section className="wrappper">
                    {/* iterate over people and get each persons name and URL unique id */}
                    {people.results.map((person) => {
                        // applied split method to each persons URL string in order to get the URL id
                        // console.log(person.url)
                        const urlArr = person.url.split("/")
                        // console.log(urlArr)

                        // get the persons unique id in the URL
                        const id = urlArr[urlArr.length - 2];
                        // console.log(id)

                        return (
                            // button link to each each person and their unique URL id
                            <div key={id}>
                                <Link href={`/people/${id}`}>
                                    <button>{person.name}</button>
                                </Link>
                            </div>
                        )

                    })}
                </section>

            </div>

            {/* styling jsx */}
            <style>
                {`
                *{
                    font-family: 'Lato', sans-serif;
                }

                .text-heading {
                    position: relative;
                    top: 30px;
                    text-align: center;
                    letter-spacing: 1px;
                    font-size: 1.85rem;
                    color: #252120;
                }

                .wrappper{
                    position: relative;
                    top: 70px;
                    display: flex;
                    justify-content: center;
                    align-item: center;
                    justify-content: space-evenly;
                }

                button{
                    cursor: pointer;
                    color: white;
                    outline: none;
                    background: #2C3E50;
                    font-size: 1rem;
                    padding: 12px;
                    border-radius: 30px;
                    border: none;
                    letter-spacing: 1px;
                }

                button:hover{
                    transition: all 0.3s ease;
                    color: black;
                    background: #E8E1DF;
                }
                `}

            </style>
        </div>
    )
}



// we are using getServerSideProps to fetch data on every request
export async function getServerSideProps() {
    const response = await fetch(`https://swapi.dev/api/people/`);

    //convert response to json
    const people = await response.json()

    // if people in not found
    if (!people) {
        return {
            notFound: true,
        }
    }

    // if people exist then return people as props object
    return {
        props: {
            people
        }
    }

}








