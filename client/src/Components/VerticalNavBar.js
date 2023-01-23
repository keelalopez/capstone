// import { Link } from 'react-router-dom';

function VerticalNavBar () {
    return (
        <div className="vertical-nav">
            <ul className="vertical-nav">
                <li><a href="/projects">Projects</a></li>
                <li><a href="/materials">Materials</a></li>
                <li><a href="/divisions">Divisions</a></li>
                <li><a href="/">User</a></li>

            </ul>
        </div>
    )
}

export default VerticalNavBar;