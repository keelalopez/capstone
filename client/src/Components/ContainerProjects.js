import { Link, Outlet } from 'react-router-dom'; 

function ContainerProjects () {
    return (
        <div className="container-router-nav ">
            <nav>
                <Link to="all">
                    <button>All Projects</button>
                </Link>
                <Link to="add">
                    <button>Add Project</button>
                </Link>
            </nav>

            <Outlet />
        </div>
    )
}

export default ContainerProjects;