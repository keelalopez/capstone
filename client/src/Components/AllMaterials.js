import MaterialElement from "./MaterialElement";

function AllMaterials ({materials}) {
    const materialsArray = materials.map(eachMaterial => {
        return (
            <MaterialElement {...eachMaterial} key={eachMaterial.id} />
        )
    })

    return (
        <div>
            <h2>All Materials Here</h2>
            {materialsArray}
        </div>
    )
}

export default AllMaterials;