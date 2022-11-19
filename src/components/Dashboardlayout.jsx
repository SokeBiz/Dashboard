import { react } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";


function Dashboardlayout({children}) {
    
    return(
        <>
            <main className="d-flex flex-wrap">
                <div className="col-3 pt-5 border border-secondary">
                    <ul>
                        <li className="list-group-item text-start p-3">
                            <Link to={'/Dashboard/Home'}>Home</Link>
                        </li>
                        <li className="list-group-item text-start p-3">
                            <Link to={'/Dashboard/Projects'}>Projects</Link>
                        </li>
                        <li className="list-group-item text-start p-3">
                            <Link to={'/Dashboard/Billings'}>Billings</Link>
                        </li>
                        <li className="list-group-item text-start p-3">
                            <Link to={'/Dashboard/Team'}>Team Members</Link>    
                        </li>
                        <li className="list-group-item text-start p-3">
                            <Link to={'/Dashboard/Stats'}>Stats</Link>
                        </li>
                        <li className="list-group-item text-start p-3">
                            <Link to={'/Dashboard/Settings'}>Settings</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-6">
                    {children}
                </div>

                <div className="col-3 bg-dark text-white p-3 rounded">
                    <h3>
                        Sales Revenue
                    </h3>
                    <ul>
                        <li className="list-group-item text-start p-3">
                            230k
                            <p>Sales</p>
                        </li>
                        <li className="list-group-item text-start p-3">
                            8.594k
                            <p>Customers</p>
                        </li>
                        <li className="list-group-item text-start p-3">
                            1.423k
                            <p>Products</p>
                        </li>
                        <li className="list-group-item text-start p-3">
                            $9745
                            <p>Revenue</p>
                        </li>
                        <li className="list-group-item text-start p-3">
                            Stats
                        </li>
                        <li className="list-group-item text-start p-3">
                            Settings
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default Dashboardlayout;