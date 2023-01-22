import { Routes, Route, Link, Outlet } from 'react-router-dom'; 

function ContainerMaterials () {
    return(
        <>
        <nav>
            <Link to="all">All Materials</Link>
            <Link to="add">Add New Material</Link>
        </nav>

        <Outlet />
        </>
    )
}

export default ContainerMaterials;