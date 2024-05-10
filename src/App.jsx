import Profile from './Profile.jsx';

function App({ accounts }) {
    return (
        <div>
            <h2>Students</h2>
            {
                accounts.map((account) => {
                    return <Profile key={account.name} account={account} />;
                })
            }
        </div>
    );
}

export default App
