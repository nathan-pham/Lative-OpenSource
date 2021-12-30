import '../assets/styles/dashboard.scss';
import Sidebar from '../components/dashboard/Sidebar';
import Modules from '../components/dashboard/Modules';
import React from 'react';

const Dashboard = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch('/api/test')
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
    
    return (
        <div className='container'>
            <div className='dashboard'>
                <p>{!data ? 'Loading...' : data}</p>
                <Sidebar />
                <Modules />
            </div>
        </div>
    )
}

export default Dashboard;