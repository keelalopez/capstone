import DivisionElement from "./DivisionElement"

function AllDivisions ({divisions}) {

    const divisionsArray = divisions.map(eachDiv => {
        return (
            <DivisionElement {...eachDiv} key={eachDiv.id} />
        )
    })

    return (
        <>
            <h1>All Divisions</h1>
            <div className="divisions-container">
                {divisionsArray}
            </div>
        </>
    )
}

export default AllDivisions;