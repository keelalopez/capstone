import DivisionElement from "./DivisionElement"

function AllDivisions ({divisions}) {

    const divisionsArray = divisions.map(eachDiv => {
        return (
            <DivisionElement {...eachDiv} key={eachDiv.id} />
        )
    })

    return (
        <div>
            <h1>All Divisions</h1>
            {divisionsArray}
        </div>
    )
}

export default AllDivisions;