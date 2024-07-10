export function MetricsHeader({ totalUsers }) {
    return <div id='metrics-header'>
        <h1>Admin Dashboard</h1>
        <h4>Total Users: {totalUsers-1}</h4>
    </div>
}