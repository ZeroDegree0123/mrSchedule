import "./AccountPage.css"
export default function AccountPage({user}) {
    return (
        <>
            <main className="account-page">
                <h1 className="account-page-title">User Info</h1>
                <div className="line-breaker"></div>
                <section className="account-body-container">
                    <div className="account-name-container">
                        <p className="account-labels">Name</p>
                        <p className="account-info">{user.name}</p>
                    </div>
                    <hr />
                    <div className="account-email-container">
                        <p className="account-labels">Email</p>
                        <p className="account-info">{user.email}</p>
                    </div>
                    <hr />
                </section>
                <section className="account-options-container">
                    {/* <h1>password change</h1>
                    <h1>edit profile</h1> */}
                </section>
            </main>
        </>
    )
}