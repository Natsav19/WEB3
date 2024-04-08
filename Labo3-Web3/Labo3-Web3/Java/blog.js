function App() {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    return (
        <>
            <Header />
            <BlogDetail id={id} />
            <CommentList />
            <AddComment id={id} />
            <Footer />
        </>
    );
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />)
