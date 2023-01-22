import { Routes, Route, Link, Outlet } from 'react-router-dom'; 

function ContainerProjects () {
    return (
        <>
            <nav>
                <Link to="all">All Projects</Link>
                <Link to="add">Add Project</Link>
            </nav>

            <Outlet />
        </>
    )
}

export default ContainerProjects;