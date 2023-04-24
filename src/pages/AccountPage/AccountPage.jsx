import "./AccountPage.css"
export default function AccountPage({user}) {
    return (
        <>
            <main className="account-page">
                <section>
                    <h1>user info</h1>
                    {user.name}
                    {user.email}
                </section>
            </main>
        </>
    )
}