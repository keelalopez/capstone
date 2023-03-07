import {  Link, Outlet } from 'react-router-dom'; 

function ContainerMaterials () {
    return(
        <div className="container-router-nav ">
            <nav>
                <Link to="all">
                    <button>All Materials</button>
                </Link>
                <Link to="pending">
                    <button>Pending</button>
                </Link>
                <Link to="delivered">
                    <button>Delivered</button>
                </Link>
                <Link to="this-week">
                    <button>Critical</button>
                </Link>
                <Link to="add">
                    <button>Add New Material</button>
                </Link>
            </nav>

            <Outlet />
        </div>
    )
}

export default ContainerMaterials;